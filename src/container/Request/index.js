import React, { useState } from "react";

import RequestView from "functionalComponents/Request/Request.js";

import apiClient from 'utils/apiClient'

const initialFormValues = {
  companyId: null,
  customerEmail: null,
  text: null,
  slot: null
};

export const getShortDate = isoDate => {
  const date = new Date(isoDate);
  const month = date.toLocaleString('de-DE', { month: 'long' });;
  const day = date.getDate();
  return `${day}. ${month}`;
}

export const getTimeString = isoDate => {
  const date = new Date(isoDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${!minutes ? "00" : minutes}`;
};

const prepareSlotLabels = slot => {
  const datetimeStart = new Date(slot.start)
  const datetimeEnd = new Date(slot.start)
  return {
    startLabel: {
      shortDate: getShortDate(datetimeStart),
      timeString: getTimeString(datetimeStart)
    },
    endLabel: {
      shortDate: getShortDate(datetimeEnd),
      timeString: getTimeString(datetimeEnd)
    }
  }
}

const prepareSlots = slots => {
  const slotsPerDay = []
  slots.forEach(({ node: slot }) => {
    const slotEnhanced = { ...slot, labels: prepareSlotLabels(slot) }
    const datetime = new Date(slot.start)
    const slotDate = datetime.getDate()
    const dayObject = slotsPerDay.find(({ date }) => date === slotDate)
    if (dayObject) {
      dayObject.slots.push(slotEnhanced)
    } else {
      slotsPerDay.push({ date: slotDate, slots: [slotEnhanced] })
    }
  })
  return slotsPerDay
}

const Request = ({ company, handleClose }) => {
  console.log(company)
  const slots = prepareSlots(company.properties.timeslotSet.edges)

  const [formValues, setFormValue] = useState({
    ...initialFormValues,
    company: company.id,
    slot: null
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
      const { company, customerEmail, text, slot } = formValues
      // const cSlot = unternehmen.available_time_slots[day].find(({ id: sid }) => `${sid}` === `${slot}`)
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
    newFormValues[key] = value
    setFormValue(newFormValues)
  }

  return (
    <RequestView
      requestStep={requestStep}
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      company={company}
      slots={slots}
      formValues={formValues}
      day={day}
      handleDayChange={handleDayChange}
      handleClose={handleClose}
    />
  )
};

export default Request;
