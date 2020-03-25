import React, { useState } from "react";

import LoginRegisterComponent from "functionalComponents/LoginRegister";

import { setLoggedIn } from 'utils/auth'

const initialRegisterFormValues = {
  name: null,
  email: null,
  telefon: null,
  ober_kategorie: null,
  zip: null,
  city: null,
  address: null,
  beschreibung: null,
  password: null,
  passwordConfirm: null
};

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = email => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
};

const requiredRegisterFormValues = [
  "name",
  "email",
  "ober_kategorie",
  "zip",
  "city",
  "address",
  "beschreibung",
  "password",
  "passwordConfirm"
];
const validateRegisterForm = formValues => {
  const errors = new Set();
  // check required
  requiredRegisterFormValues.forEach(fieldName => {
    if (formValues[fieldName] === null || formValues[fieldName] === "") {
      errors.add(fieldName);
    }
  });

  if (formValues.email && !validateEmail(formValues.email)) {
    errors.add("email");
  }

  if (formValues.password !== formValues.passwordConfirm) {
    errors.add("noMatch");
  }

  if (formValues.password && formValues.password.length < 6) {
    errors.add("passwordToShort");
  }

  return Array.from(errors);
};

const LoginRegister = () => {
  const [saved, setSaved] = useState(false);
  const [registerFormValues, setRegisterFormValues] = useState(
    initialRegisterFormValues
  );
  const [registerErrors, setRegisterErrors] = useState([]);

  const handleRegisterFormChange = event => {
    const { name, value } = event.target;
    registerFormValues[name] = value;
    setRegisterFormValues(registerFormValues)
  };

  const handleRegister = () => {
    const errors = validateRegisterForm(registerFormValues);
    if (errors.length > 0) {
      setRegisterErrors(errors);
      return false;
    }
    // call the api please
    setSaved(true);
  };

  const handleLogin = event => {
    event.preventDefault()
    setLoggedIn(true)
    return false
  }

  return (
    <LoginRegisterComponent
      registerFormValues={registerFormValues}
      handleRegisterFormChange={handleRegisterFormChange}
      handleRegister={handleRegister}
      registerErrors={registerErrors}
      handleLogin={handleLogin}
      saved={saved}
    />
  );
};

export default LoginRegister;
