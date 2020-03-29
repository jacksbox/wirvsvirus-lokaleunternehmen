import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";

import Input from "functionalComponents/Input";

import { makeStyles } from "@material-ui/core/styles";

import { CATEGORIES } from "consts";

const useStyles = makeStyles(theme => ({
  formControl: {
    paddingTop: "2px",
    margin: theme.spacing(3, 0, 1, 0),
    minWidth: "100%"
  }
}));


const BusinessForm = ({ handleChange, errors }) => {
  const classes = useStyles();
  const [category, setCategory] = useState("");

  const handleCategoryChange = event => {
    setCategory(event.target.value);
    handleChange(event);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <p style={{ fontSize: "18px" }}>
          Das Angebot befindet sich im Aufbau, bitte nutzen Sie zur
          Registrierung dieses{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScaCVS7ej3dcFbiOBTck3wcjDyytzvIFzvHCStJt8Ir-9u7vQ/viewform?usp=sf_link">
            <strong>Formular</strong>
          </a>
        </p>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Input
          id="name"
          required
          labelText="Unternehmen (Name)"
          helperText="Unternehmen (Name) wird benötigt."
          handleChange={handleChange}
          errors={errors}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>

      <Input
          id="ober_kategorie"
          select
          value={category || CATEGORIES[0].value}
          options={CATEGORIES}
          required
          labelText="Kategorie"
          helperText="Kategorie bitte auswählen."
          handleChange={handleCategoryChange}
          errors={errors}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Input
          id="email"
          required
          labelText="Email"
          helperText="Bitte überpüfen Sie die eMail Adresse."
          handleChange={handleChange}
          errors={errors}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Input
          id="telefon"
          required
          labelText="Telefon"
          helperText="Bitte überpüfen Sie die Telefonummer."
          handleChange={handleChange}
          errors={errors}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <Input
          id="zip"
          required
          labelText="PLZ"
          helperText="PLZ wird benötigt."
          handleChange={handleChange}
          errors={errors}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6}>
        <Input
          id="city"
          required
          labelText="Stadt"
          helperText="Stadt wird benötigt."
          handleChange={handleChange}
          errors={errors}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Input
          id="address"
          required
          labelText="Straße und Hausnummer"
          helperText="Adresse wird benötigt."
          handleChange={handleChange}
          errors={errors}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Input
          id="beschreibung"
          required
          labelText="Beschreibung"
          helperText="Beschreibung wird benötigt."
          handleChange={handleChange}
          errors={errors}
          fullWidth
          multiline
          rows={5}
        />
      </Grid>
    </Grid>
  );
};
export default BusinessForm;
