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

const useStyles = makeStyles(theme => ({
  formControl: {
    paddingTop: '2px',
    margin: theme.spacing(3, 0),
    minWidth: '100%'
  }
}));

const RegisterForm = ({ setSaved }) => {
  const classes = useStyles();
  const [category, setCategory] = useState('');

  const handleChange = event => {
    setCategory(event.target.value);
  };


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
            fullWidth: true
          }}
          inputProps={{
            name: "name"
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <FormControl className={classes.formControl}>
          <InputLabel id="ober_kategorie">Kategorie</InputLabel>
          <Select
            id="ober_kategorie"
            name="ober_kategorie"
            labelId="ober_kategorie"
            value={category}
            onChange={handleChange}
          >
            {CATEGORIES.map(({ value, label }) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <CustomInput
          labelText="Email address"
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            name: "email"
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <CustomInput
          labelText="Telefon"
          id="telefon"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            name: "telefon"
          }}
        />
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText="PLZ"
          id="zip"
          formControlProps={{
            fullWidth: true
          }}
          inputPorps={{
            name: "zip"
          }}
        />
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText="Stadt"
          id="city"
          formControlProps={{
            fullWidth: true
          }}
          inputPorps={{
            name: "city"
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <CustomInput
          labelText="Straße und Hausnummer"
          id="address"
          formControlProps={{
            fullWidth: true
          }}
          inputPorps={{
            name: "address"
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <CustomInput
          labelText="Beschreibung"
          id="beschreibung"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            name: "beschreibung",
            multiline: true,
            rows: 5
          }}
        />
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText="Passwort"
          id="password"
          formControlProps={{
            fullWidth: true
          }}
          inputPorps={{
            name: "password",
            type: "password"
          }}
        />
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <CustomInput
          labelText="Passwort bestätigen"
          id="password_confirm"
          formControlProps={{
            fullWidth: true
          }}
          inputPorps={{
            type: "password",
            name: "password_confirm"
          }}
        />
      </GridItem>
      <GridItem xs={12}>
        <Button onClick={() => setSaved(true)} color="success" disabled>
          Jetzt registrieren
        </Button>
      </GridItem>
    </GridContainer>
  );
};

export default RegisterForm;
