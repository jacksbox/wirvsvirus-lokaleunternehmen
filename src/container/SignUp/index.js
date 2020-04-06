import React, { useState, useEffect } from "react";

import { commitMutation } from "react-relay";
import { fetchQuery } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";
import Nominatim from "nominatim-geocoder";

import SignUpComponent from "components/SignUp";

import environment from "graphql/environment.js";

const geocoder = new Nominatim({
  secure: true,
})

const availableCategoriesGqlQuery = graphql`
  query SignUpCategoriesQuery {
    allCategories {
      edges {
        node {
          id
          name
        }
      }
    }
    allSubCategories {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;


const companyMutationGql = graphql`
  mutation SignUpMutation($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      clientMutationId
    }
  }
`;

const initialFormValues = {
  name: null,
  email: null,
  phone: null,
  categoryId: null,
  subCategoryIds: [],
  zip: null,
  city: null,
  street: null,
  streetNo: null,
  description: null,
  maxPerSlot: null,
  businessHours: []
};

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = email => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
};

const requiredFormValues = [
  "name",
  "email",
  "phone",
  "categoryId",
  "zip",
  "city",
  "address",
  "description",
  "maxPerSlot"
];

// const validateBusinessHours = businessHours => {
//   const len = businessHours.length
//   const errors = new Set()
//   let cur = null
//   let com = null
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (businessHours[i].d === businessHours[j].d) {
//         cur = parseInt(`${businessHours[i].h}${businessHours[i].m}`)
//         com = parseInt(`${businessHours[j].h}${businessHours[j].m}`)
//         if (cur > com) {

//         }
//       }
//     }
//   }
//   return Array.from(errors);
// }

const validateRegisterForm = formValues => {
  const errors = new Set();
  // check required
  requiredFormValues.forEach(fieldName => {
    if (formValues[fieldName] === null || formValues[fieldName] === "") {
      errors.add(fieldName);
    }
  });

  if(formValues.maxPerSlot && (formValues.maxPerSlot < 1 || formValues.maxPerSlot > 10)) {
    errors.add("maxPerSlot")
  }

  if (formValues.email && !validateEmail(formValues.email)) {
    errors.add("email");
  }

  // errors.add(validateBusinessHours(formValues.businessHours))

  return Array.from(errors);
};

const SignUp = () => {
  const [{ categories, subCategories }, setAvailableCategories] = useState({
    categories: [],
    subCategories: []
  });
  const [saved, setSaved] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState([]);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    fetchQuery(environment, availableCategoriesGqlQuery).then(
      (
        { allCategories: { edges: categories }, allSubCategories: { edges: subCategories } } = {
          allCategories: { edges: [] },
          allSubCategories: { edges: [] }
        }
      ) => {
        setAvailableCategories({ categories, subCategories });
      }
    );
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;
    formValues[name] = value;
    setFormValues(formValues);
  };

  const updateBusinessHours = newItems => {
    const newFormValues = {
      ...formValues,
      businessHours: newItems
    }
    setFormValues(newFormValues);
  }

  const prepareCompanyData = ([ lng, lat ]) => {
    const {
      name, email, phone, description, categoryId, subCategoryIds,
      zip, city, street, streetNo, maxPerSlot
    } = formValues
    return {
      name,
      address: `${street} ${streetNo}, ${zip} ${city}`,
      email,
      phone,
      description,
      categoryId,
      subCategoryIds,
      maxPerSlot,
      location: `{'type': 'point', 'coordinates': [${parseFloat(lng)}, ${parseFloat(lat)}]}`
    }
  }

  const handleSubmit = () => {
    const { zip, city, street, streetNo } = formValues
    const errors = validateRegisterForm(formValues);
    if (errors.length > 0) {
      setErrors(errors);
      return false;
    }
    geocoder.search( { q: `${streetNo}, ${street}, ${zip} ${city}, Germany` } ).then(response => {
      console.log(response);
      if (!response.length) {
        errors.push('noGeo', 'street', 'streetNo', 'zip', 'city')
        setErrors(errors);
      } else {
        if (!response[0].lon || !response[0].lat) {
          throw new Error('No long/lat available')
        }
        const lngLat =  [response[0].lon, response[0].lat]
        const input = prepareCompanyData(lngLat)
        console.log(input)
        commitMutation(environment, {
          mutation: companyMutationGql,
          variables: {
            input
          },
          onCompleted: (resp, errors) => {
            if (errors && errors.length > 0) {
              setSubmitError(true)
            } else {
              setSaved(true);
            }
          },
          onError: () => {
            console.log('mutation error')
          }
        })
      }
    })
    .catch(error => {
        console.log('geocoder error', error)
    })
  };

  return (
    <SignUpComponent
      formValues={formValues}
      updateBusinessHours={updateBusinessHours}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      categories={categories}
      subCategories={subCategories}
      errors={errors}
      submitError={submitError}
      saved={saved}
    />
  );
};

export default SignUp;
