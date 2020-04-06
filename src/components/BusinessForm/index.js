import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Select from "react-select";

import Input from "components/Input";

const BusinessForm = ({ categories, subCategories, handleChange, errors }) => {
  const [categoryId, setCategoryId] = useState("");
  const [subCategoriesValues, setSubCategoriesValues] = useState(null);

  const handleCategoryChange = event => {
    setCategoryId(event.target.value);
    handleChange(event);
  };

  const handleSubCategoriesChange = values => {
    setSubCategoriesValues(values);
    handleChange({
      target: {
        name: "subCategoryIds",
        value: values ? values.map(({ value }) => value) : []
      }
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <Input
          id="name"
          required
          labelText="Unternehmen"
          helperText="Unternehmen wird benötigt."
          handleChange={handleChange}
          errors={errors}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} />
      <Grid item xs={12} sm={12} md={6}>
        <Input
          id="categoryId"
          select
          value={categoryId}
          options={categories.map(({ node: { id, name } }) => ({
            value: id,
            label: name
          }))}
          size="medium"
          required
          labelText="Kategorie"
          helperText="Kategorie bitte auswählen."
          handleChange={handleCategoryChange}
          errors={errors}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Select
          isMulti
          name="subCategories"
          value={subCategoriesValues}
          onChange={handleSubCategoriesChange}
          options={subCategories.map(({ node: { id, name } }) => ({
            value: id,
            label: name
          }))}
          classNamePrefix="ReactSelect"
          placeholder="Unterkategorien"
          styles={{
            container: provided => ({
              ...provided,
              height: 56
            }),
            control: provided => ({
              ...provided,
              height: 56
            }),
            menu: provided => ({
              ...provided,
              zIndex: 5000
            }),
          }}
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
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Input
          id="phone"
          required
          labelText="Telefon"
          helperText="Bitte überpüfen Sie die Telefonummer."
          handleChange={handleChange}
          errors={errors}
          variant="outlined"
          fullWidth
        />
      </Grid>
      {errors.includes("noGeo") && (
        <Grid item xs={12}>
          <Typography variant="body2" color="error">
            Wir konnte die angegebene Adresse nicht finden, bitte überprüfen Sie
            ihre Eingaben.
          </Typography>
        </Grid>
      )}
      <Grid item xs={6} sm={6} md={6}>
        <Input
          id="zip"
          required
          labelText="PLZ"
          helperText="PLZ wird benötigt."
          handleChange={handleChange}
          errors={errors}
          variant="outlined"
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
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={10}>
        <Input
          id="street"
          required
          labelText="Straße"
          helperText="Straße wird benötigt."
          handleChange={handleChange}
          errors={errors}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={2}>
        <Input
          id="streetNo"
          required
          labelText="Nr."
          helperText="Hausnummer wird benötigt."
          handleChange={handleChange}
          errors={errors}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Input
          id="description"
          required
          labelText="Beschreibung"
          helperText="Beschreibung wird benötigt."
          handleChange={handleChange}
          errors={errors}
          variant="outlined"
          fullWidth
          multiline
          rows={5}
        />
      </Grid>
    </Grid>
  );
};
export default BusinessForm;
