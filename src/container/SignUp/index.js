import React, { useState, useEffect } from "react";

import { commitMutation } from "react-relay";
import { fetchQuery } from "relay-runtime";
import graphql from "babel-plugin-relay/macro";
import Nominatim from "nominatim-geocoder";

import SignUpComponent from "components/SignUp";

import environment from "graphql/environment.js";

const geocoder = new Nominatim()

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
  subCategoryIds: null,
  zip: null,
  city: null,
  street: null,
  streetNo: null,
  description: null
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
  "description"
];

const validateRegisterForm = formValues => {
  const errors = new Set();
  // check required
  requiredFormValues.forEach(fieldName => {
    if (formValues[fieldName] === null || formValues[fieldName] === "") {
      errors.add(fieldName);
    }
  });

  if (formValues.email && !validateEmail(formValues.email)) {
    errors.add("email");
  }

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

  const prepareCompanyData = ([ lng, lat ]) => {
    const {
      name, email, phone, description, categoryId, subCategoryIds,
      zip, city, street, streetNo
    } = formValues
    return {
      name,
      address: `${street} ${streetNo}, ${zip} ${city}`,
      email,
      phone,
      description,
      categoryId,
      subCategoryIds,
      location: `{'type': 'point', 'coordinates': [${parseFloat(lng)}, ${parseFloat(lat)}]}`
    }
  }

  const handleSubmit = () => {
    console.log(formValues);
    const { zip, city, street, streetNo } = formValues
    const errors = validateRegisterForm(formValues);
    if (errors.length > 0) {
      setErrors(errors);
      return false;
    }
    geocoder.search( { q: `${streetNo}, ${street}, ${zip} ${city}` } ).then(response => {
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
          onCompleted: () => {
            setSaved(true);
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
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      categories={categories}
      subCategories={subCategories}
      errors={errors}
      saved={saved}
    />
  );
};

export default SignUp;
