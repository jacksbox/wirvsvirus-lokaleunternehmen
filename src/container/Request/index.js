import React, { useState } from "react";

import RequestView from "functionalComponents/Request/Request.js";

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

const prepareLabel = isoDate => ({
  shortDate: getShortDate(isoDate),
  timeString: getTimeString(isoDate)
})

const prepareSlotLabels = slot => {
  const startDate = new Date(slot.start)
  const endDate = new Date(slot.start)
  return {
    startLabel: prepareLabel(startDate),
    endLabel: prepareLabel(endDate),
  }
}

const prepareSlots = slots => {
  const slotsPerDay = []
  slots.forEach(({ node: slot }) => {
    const slotEnhanced = { ...slot, labels: prepareSlotLabels(slot) }
    const date = new Date(slot.start)
    const dateString = date.toLocaleDateString()
    const dayObject = slotsPerDay.find(({ date }) => date === dateString)
    if (dayObject) {
      dayObject.slots.push(slotEnhanced)
    } else {
      slotsPerDay.push({ date: dateString, label: prepareLabel(date), slots: [slotEnhanced] })
    }
  })
  return slotsPerDay
}

const initialFormValues = {
  companyId: null,
  customerEmail: '',
  text: '',
  slot: {
    id: ''
  }
};

const Request = ({ company, handleClose }) => {
  const slotsPerDay = prepareSlots(company.properties.timeslotSet.edges)

  const [formValues, setFormValue] = useState({
    ...initialFormValues,
    companyId: company.id,
  });

  const [requestStep, setRequestStep] = useState(0);

  const [ selectedDay, setSelectedDay ] = useState(null)

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

  const handleDaySelect = date => () => {
    setSelectedDay(date)
  }

  const handleChange = event => {
    const key = event.target.name
    const value = event.target.value
    const newFormValues = { ...formValues }
    newFormValues[key] = value
    setFormValue(newFormValues)
  }

  const handleSlotChange = event => {
    const key = event.target.name
    const value = event.target.value
    const newFormValues = { ...formValues }
    newFormValues[key] = slotsPerDay.find(({ date }) => date === selectedDay).slots.find(({ id }) => id === value)
    setFormValue(newFormValues)
  }

  return (
    <RequestView
      requestStep={requestStep}
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      handleSlotChange={handleSlotChange}
      company={company}
      slotsPerDay={slotsPerDay}
      formValues={formValues}
      selectedDay={selectedDay}
      handleDaySelect={handleDaySelect}
      handleClose={handleClose}
    />
  )
};

export default Request;
