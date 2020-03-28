import React, { useState } from "react";

import RegisterSlimComponent from "functionalComponents/RegisterSlim";

const RegisterSlim = () => {
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState({});

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
    setFormValues[key] = key === "slot" ? parseInt(value) : value;
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
