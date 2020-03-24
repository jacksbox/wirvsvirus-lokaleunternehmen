import React, { useState } from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { CATEGORIES } from "consts";

import { makeStyles } from "@material-ui/core/styles";

import SuccessMessage from "./SuccessMessage";

import Danger from "components/Typography/Danger.js";

const useStyles = makeStyles(theme => ({
  formControl: {
    paddingTop: '2px',
    margin: theme.spacing(3, 0, 1, 0),
    minWidth: '100%'
  }
}));

const RegisterForm = ({ saved, handleChange, handleSubmit, errors }) => {
  const classes = useStyles();
  const [category, setCategory] = useState('');

  const handleCategoryChange = event => {
    setCategory(event.target.value);
    handleChange(event)
  };

  if (saved) {
    return <SuccessMessage />
  }


  return (
    <GridContainer>
      <GridItem>
        <p style={{ fontSize: "18px" }}>
          Das Angebot befindet sich im Aufbau, bitte nutzen Sie zur
          Registrierung dieses{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScaCVS7ej3dcFbiOBTck3wcjDyytzvIFzvHCStJt8Ir-9u7vQ/viewform?usp=sf_link">
            <strong>Formular</strong>
          </a>
        </p>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <CustomInput
          labelText="Unternehmen (Name)"
          id="name"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            name: "name",
            onChange: handleChange
          }}
        />
        {errors.includes('name') && <Danger>Unternehmen (Name) wird benötigt.</Danger>}
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <FormControl className={classes.formControl} required>
          <InputLabel id="ober_kategorie">Kategorie</InputLabel>
          <Select
            id="ober_kategorie"
            name="ober_kategorie"
            labelId="ober_kategorie"
            value={category}
            onChange={handleCategoryChange}
          >
            {CATEGORIES.map(({ value, label }) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {errors.includes('ober_kategorie') && <Danger>Kategorie bitte auswählen.</Danger>}
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            name: "email",
            onChange: handleChange
          }}
        />
        {errors.includes('email') && <Danger>Bitte überpüfen Sie die eMail Adresse.</Danger>}
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <CustomInput
          labelText="Telefon"
          id="telefon"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            name: "telefon",
            onChange: handleChange
          }}
        />
        {errors.includes('telefon') && <Danger>Bitte überpüfen Sie die Telefonummer.</Danger>}
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText="PLZ"
          id="zip"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            name: "zip",
            onChange: handleChange
          }}
        />
        {errors.includes('zip') && <Danger>PLZ wird benötigt.</Danger>}
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText="Stadt"
          id="city"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            name: "city",
            onChange: handleChange
          }}
        />
        {errors.includes('city') && <Danger>Stadt wird benötigt.</Danger>}
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <CustomInput
          labelText="Straße und Hausnummer"
          id="address"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            name: "address",
            onChange: handleChange
          }}
        />
        {errors.includes('address') && <Danger>Adresse wird benötigt.</Danger>}
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <CustomInput
          labelText="Beschreibung"
          id="beschreibung"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            name: "beschreibung",
            multiline: true,
            rows: 5,
            onChange: handleChange
          }}
        />
        {errors.includes('beschreibung') && <Danger>Beschreibung wird benötigt.</Danger>}
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText="Passwort"
          id="password"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            name: "password",
            type: "password",
            onChange: handleChange
          }}
        />
        {errors.includes('password') && <Danger>Passwort wird benötigt.</Danger>}
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText="Passwort bestätigen"
          id="passwordConfirm"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            type: "password",
            name: "passwordConfirm",
            onChange: handleChange
          }}
        />
        {errors.includes('password') && <Danger>Bitte bestätigen Sie ihr gewähltes Passwort.</Danger>}
      </GridItem>
      <GridItem xs={12}>
        {errors.includes('noMatch') && <Danger>Passwörter stimmen nicht überein.</Danger>}
      </GridItem>
      <GridItem xs={12}>
        <Button onClick={handleSubmit} color="success">
          Jetzt registrieren
        </Button>
      </GridItem>
    </GridContainer>
  );
};

export default RegisterForm;
