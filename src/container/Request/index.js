import React, { useState } from "react";

import RequestView from "functionalComponents/Request";

const mock = {
  unternehmen_id: "00001",
  kontaktlose_oeffnungszeiten: [
    { start: "2020-03-24T09:00:00.00Z", stop: "2020-03-24T18:00:00.00Z" },
    { start: "2020-03-25T09:00:00.00Z", stop: "2020-03-24T18:00:00.00Z" },
    { start: "2020-03-26T09:00:00.00Z", stop: "2020-03-24T18:00:00.00Z" },
    { start: "2020-03-27T09:00:00.00Z", stop: "2020-03-24T18:00:00.00Z" },
    { start: "2020-03-28T09:00:00.00Z", stop: "2020-03-24T18:00:00.00Z" },
    { start: "2020-03-29T09:00:00.00Z", stop: "2020-03-24T18:00:00.00Z" },
    { start: "2020-03-30T09:00:00.00Z", stop: "2020-03-24T18:00:00.00Z" }
  ],
  name: "Der kleine Teeladen",
  beschreibung: "Schwarzer, Weiser, Grüner, Blauer, Roter, Gelber, Grauer, Brauner, Transparenter Tee",
  categories: ["Lebensmittel", "Tee"],
  adresse: "Sanderstraße 8, 12047 Berlin",
  latitude: "52.492723",
  longitude: "13.4246693",
  email: "tee@example.com",
  telefon: "03023456789",
  max_pro_slot: "3",
  available_time_slots: [
    [
      { id: 0, start: "2020-03-24T09:00:00.00Z", stop: "2020-03-24T09:30:00.00Z" },
      { id: 1, start: "2020-03-24T11:00:00.00Z", stop: "2020-03-24T11:30:00.00Z" },
      { id: 2, start: "2020-03-24T16:00:00.00Z", stop: "2020-03-24T16:30:00.00Z" }
    ],
    [
      { id: 3, start: "2020-03-25T09:00:00.00Z", stop: "2020-03-25T09:30:00.00Z" },
      { id: 4, start: "2020-03-25T17:00:00.00Z", stop: "2020-03-25T17:30:00.00Z" }
    ],
    [
      { id: 5, start: "2020-03-26T09:00:00.00Z", stop: "2020-03-26T09:30:00.00Z" },
      { id: 6, start: "2020-03-26T11:00:00.00Z", stop: "2020-03-26T11:30:00.00Z" },
      { id: 7, start: "2020-03-26T16:00:00.00Z", stop: "2020-03-26T16:30:00.00Z" }
    ]
  ]
};

const initialFormValues = {
  unternehmen_id: "0001",
  kunden_email: "",
  text: "",
  slot: null
};

const Request = ({ unternehmen = mock }) => {
  const [formValues, setFormValue] = useState({
    ...initialFormValues,
    unternehmen_id: unternehmen.unternehmen_id,
    slot: unternehmen.available_time_slots[0].id
  });

  const [requestStep, setRequestStep] = useState(0);

  const [ day, setDay ] = useState(-1)
  const handleDayChange = dayIndex => () => {
    setDay(dayIndex)
  }

  const nextStep = () => {
    const newStep = (requestStep + 1) % 4
    setRequestStep(newStep)
  }

  const prevStep = () => {
    const newStep = requestStep - 1
    setRequestStep(newStep)
  }

  const handleChange = event => {
    const key = event.target.name
    const value = event.target.value
    const newFormValues = { ...formValues }
    newFormValues[key] = key === 'slot' ? parseInt(value) : value
    setFormValue(newFormValues)
  }

  return (
    <RequestView
      requestStep={requestStep}
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      unternehmen={unternehmen}
      formValues={formValues}
      day={day}
      handleDayChange={handleDayChange}
    />
  )
};

export default Request;
