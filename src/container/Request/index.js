import React, { useEffect, useState } from "react";
import graphql from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";

import RequestView from "components/Request/Request.js";

import environment from "graphql/environment.js";

const requestMutationGql = graphql`
  mutation RequestMutation($input: CreateRequestInput!) {
    createRequest(input: $input) {
      clientMutationId
    }
  }
`;

export const getShortDate = isoDate => {
  const date = new Date(isoDate);
  const month = date.toLocaleString("de-DE", { month: "long" });
  const day = date.getDate();
  return `${day}. ${month}`;
};

export const getTimeString = isoDate => {
  const date = new Date(isoDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${!minutes ? "00" : minutes}`;
};

const prepareLabel = isoDate => ({
  shortDate: getShortDate(isoDate),
  timeString: getTimeString(isoDate)
});

const prepareSlotLabels = slot => {
  const startDate = new Date(slot.start);
  const endDate = new Date(slot.end);
  return {
    startLabel: prepareLabel(startDate),
    endLabel: prepareLabel(endDate)
  };
};

const prepareSlots = slots => {
  const slotsPerDay = [];
  slots.forEach(({ node: slot }) => {
    const slotEnhanced = { ...slot, ...prepareSlotLabels(slot) };
    const date = new Date(slot.start);
    const dateString = date.toLocaleDateString();
    const dayObject = slotsPerDay.find(({ date }) => date === dateString);
    if (dayObject) {
      dayObject.slots.push(slotEnhanced);
    } else {
      slotsPerDay.push({
        date: dateString,
        shortDate: getShortDate(date),
        slots: [slotEnhanced]
      });
    }
  });
  return slotsPerDay;
};

const initialFormValues = {
  companyId: null,
  customerEmail: "",
  text: "",
  slot: {
    id: ""
  }
};

const Request = ({ companyId, company, handleClose, loading }) => {
  const [slotsPerDay, setSlotsPerDay] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const [formValues, setFormValue] = useState({
    ...initialFormValues,
    companyId
  });

  const [requestStep, setRequestStep] = useState(0);

  const [selectedDay, setSelectedDay] = useState(null);
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading)
  }, [loading])

  if (!slotsPerDay && company) {
    setSlotsPerDay(prepareSlots(company.properties.timeslotSet.edges));
    return <></>;
  }

  const nextStep = () => {
    const newStep = (requestStep + 1) % 4;
    // send order
    if (requestStep === 2) {
      const { companyId, customerEmail, text, slot } = formValues;
      setIsLoading(true)
      commitMutation(environment, {
        mutation: requestMutationGql,
        variables: {
          input: {
            companyId,
            slotId: slot.id,
            customerEmail,
            text
          }
        },
        onCompleted: (resp, errors) => {
          setIsLoading(false)
          if (errors && errors.length > 0) {
            setSubmitError(true)
          } else {
            setRequestStep(newStep);
          }
        },
        onError: () => {
          console.log('mutation error')
        }
      })
    } else {
      setRequestStep(newStep);
    }
  };

  const prevStep = () => {
    const newStep = requestStep - 1;
    setRequestStep(newStep);
  };

  const handleDaySelect = date => () => {
    setSelectedDay(date);
  };

  const handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    const newFormValues = { ...formValues };
    newFormValues[key] = value;
    setFormValue(newFormValues);
  };

  const handleSlotChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    const newFormValues = { ...formValues };
    newFormValues[key] = slotsPerDay
      .find(({ date }) => date === selectedDay)
      .slots.find(({ id }) => id === value);
    setFormValue(newFormValues);
  };

  return (
    <RequestView
      requestStep={requestStep}
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      handleSlotChange={handleSlotChange}
      company={company}
      submitError={submitError}
      slotsPerDay={slotsPerDay}
      formValues={formValues}
      selectedDay={selectedDay}
      handleDaySelect={handleDaySelect}
      handleClose={handleClose}
      loading={isLoading}
    />
  );
};

export default Request;
