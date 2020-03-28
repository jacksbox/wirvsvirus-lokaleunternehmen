import React, { useState } from "react";

import RequestView from "functionalComponents/Request/Request.js";

import apiClient from 'utils/apiClient'

const mock = {
  id: "00001",
  oeffnungszeiten: [{"start":"10:00","end":"18:00"},{"start":"10:00","end":"18:00"},{"start":"10:00","end":"18:00"},{"start":"10:00","end":"18:00"},{"start":"10:00","end":"18:00"},{"start":"0:00","end":"0:00"},{"start":"0:00","end":"0:00"}],
  name: "Der kleine Teeladen",
  beschreibung: "Schwarzer, Weiser, Grüner, Blauer, Roter, Gelber, Grauer, Brauner, Transparenter Tee",
  categories: ["Lebensmittel", "Tee"],
  adresse: "Sanderstraße 8, 12047 Berlin",
  latitude: "52.492723",
  longitude: "13.4246693",
  email: "tee@example.com",
  telefon: "03023456789",
  max_pro_slot: "3",
  available_time_slots: [[{"id":"1","start":"2020-03-25T10:00","end":"2020-03-25T12:00"},{"id":"2","start":"2020-03-25T14:00","end":"2020-03-25T16:00"}],[{"id":"3","start":"2020-03-26T10:00","end":"2020-03-26T12:00"},{"id":"4","start":"2020-03-26T14:00","end":"2020-03-26T186:00"}],[{"id":"5","start":"2020-03-27T10:00","end":"2020-03-27T12:00"},{"id":"6","start":"2020-03-27T14:00","end":"2020-03-27T16:00"}],[{"id":"7","start":"2020-03-28T10:00","end":"2020-03-28T12:00"}],[{"id":"8","start":"2020-03-29T10:00","end":"2020-03-29T11:00"},{"id":"9","start":"2020-03-29T11:00","end":"2020-03-29T12:00"},{"id":"10","start":"2020-03-29T13:00","end":"2020-03-29T14:00"}],[{"id":"11","start":"2020-03-30T10:00","end":"2020-03-30T18:00"}],[{"id":"12","start":"2020-03-31T12:00","end":"2020-03-31T14:00"},{"id":"13","start":"2020-03-31T14:00","end":"2020-03-31T18:00"}]]
};

const initialFormValues = {
  id: "0001",
  kunden_email: "",
  text: "",
  slot: null
};

// parse json fields
const prepareUnternehmen = ({oeffnungszeiten, available_time_slots, ...unternehmen}) => ({
  ...unternehmen,
  oeffnungszeiten: typeof oeffnungszeiten === 'string' ? JSON.parse(oeffnungszeiten) : oeffnungszeiten,
  available_time_slots: typeof available_time_slots === 'string' ? JSON.parse(available_time_slots) : available_time_slots
})

const Request = ({ preUnternehmen = mock, handleClose }) => {
  const unternehmen = prepareUnternehmen(preUnternehmen)

  const [formValues, setFormValues] = useState({
    ...initialFormValues,
    id: unternehmen.id,
    slot: unternehmen.available_time_slots[0].id
  });

  const [requestStep, setRequestStep] = useState(0);

  const [ day, setDay ] = useState(-1)
  const handleDayChange = dayIndex => () => {
    setDay(dayIndex)
  }

  const nextStep = () => {
    const newStep = (requestStep + 1) % 4
    // send order
    if (requestStep === 2) {
      const { id, kunden_email, text, slot } = formValues
      const cSlot = unternehmen.available_time_slots[day].find(({ id: sid }) => `${sid}` === `${slot}`)
      // apiClient.instance.post('anfragen', {
      //   kunden_email,
      //   text,
      //   unternehmen_id: id,
      //   slot: cSlot
      // }).then(() => setRequestStep(newStep))
      setRequestStep(newStep)
    } else {
      setRequestStep(newStep)
    }
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
    setFormValues(newFormValues)
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
      handleClose={handleClose}
    />
  )
};

export default Request;
