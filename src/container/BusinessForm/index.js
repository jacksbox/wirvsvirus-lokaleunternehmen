import React from "react";

import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';

import Button from "components/CustomButtons/Button.js";

import BusinessFormComponent from "functionalComponents/BusinessForm";

const days = [
  { label: 'Montag', abbr: 'mon'},
  { label: 'Dienstag', abbr: 'tue'},
  { label: 'Mittwoch', abbr: 'wed'},
  { label: 'Donnerstag', abbr: 'thu'},
  { label: 'Freitag', abbr: 'fri'},
  { label: 'Samstag', abbr: 'sat'},
  { label: 'Sonntag', abbr: 'sun'}
]

const BusinessForm = () => {
  const handleChange = () => {}
  const handleSubmit = () => {}
  const errors = []

  return (
    <>
      <BusinessFormComponent handleChange={handleChange} errors={errors} newPassword />
      <Grid container>
        <Grid item xs={12}>
          <h4>Öffnungszeiten</h4>
        </Grid>
        <Grid item xs={6} container style={{ alignItems: 'flex-start' }}>
          {days.map(({label, abbr}) => (
            <>
            <Grid item xs={12} sm={4}><label style={{ lineHeight: '60px' }}>{label}</label></Grid>
            <Grid item xs={6} sm={4}>
              <TextField id={`${abbr}_from`} label="von" />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField id={`${abbr}to`} label="bis" />
            </Grid>
            </>
          ))}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Button onClick={handleSubmit} color="success">
            Speichern
          </Button>
        </Grid>
      </Grid>
      </>
  );
};

export default BusinessForm;
