import React, { useState } from "react";

import RegisterSlimComponent from "functionalComponents/RegisterSlim";

const RegisterSlim = () => {
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState({
    name: null,
    ober_kategorie: null,
    email: null,
    telefon: null,
    zip: null,
    city: null,
    address: null,
    beschreibung: null
  });

  const nextStep = () => {
    const newStep = step + 1;
    setStep(newStep);
  };

  const prevStep = () => {
    const newStep = step - 1;
    setStep(newStep);
  };

  const handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    const newFormValues = { ...formValues };
    newFormValues[key] = value;
    setFormValues(newFormValues);
  };

  const errors = [];

  return (
    <RegisterSlimComponent
      step={step}
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      errors={errors}
    />
  );
};

export default RegisterSlim;
