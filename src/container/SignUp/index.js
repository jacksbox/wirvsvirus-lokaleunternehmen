import React, { useState, useEffect } from "react";

import SignUpComponent from "components/SignUp";

const initialFormValues = {
  name: null,
  email: null,
  phone: null,
  categoryId: null,
  subCategoryIds: null,
  zip: null,
  city: null,
  address: null,
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
  "description",
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
  const [saved, setSaved] = useState(false);
  const [formValues, setFormValues] = useState(
    initialFormValues
  );
  const [errors, setErrors] = useState([]);

  useEffect(() => {

  }, [])

  const handleChange = event => {
    const { name, value } = event.target;
    formValues[name] = value;
    setFormValues(formValues)
  };

  const handleSubmit = () => {
    console.log(formValues)
    const errors = validateRegisterForm(formValues);
    if (errors.length > 0) {
      setErrors(errors);
      return false;
    }
    // call the api please
    setSaved(true);
  };

  return (
    <SignUpComponent
      formValues={formValues}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      saved={saved}
    />
  );
};

export default SignUp;
