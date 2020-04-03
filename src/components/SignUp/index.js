import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MuiAlert from "@material-ui/lab/Alert";

import BusinessForm from "components/BusinessForm";
import Input from "components/Input";

import SuccessMessage from "./SuccessMessage";

const SignUp = ({ saved, handleSubmit, submitError, ...rest }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Ihr Unternehmen bei <strong>Bleib Lokal!</strong>
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Registrierung
            </Typography>
            <Divider />
          </CardContent>
          {submitError && (
            <CardContent>
              <MuiAlert severity="error">
                {submitError.msg
                  ? submitError.msg
                  : "Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."}
              </MuiAlert>
            </CardContent>
          )}
          <CardContent>
            {saved ? (
              <SuccessMessage />
            ) : (
              <>
                <BusinessForm {...rest} />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={3}>
                    <Typography variant="body2">Wieviele Kunden sollen in einem Pickup Zeitslot ihre Bestellung abholen können?</Typography>
                    <Input
                      id="maxPerSlot"
                      required
                      labelText="Kunden pro Time Slot"
                      helperText="Dieses Feld wird benötigt"
                      handleChange={rest.handleChange}
                      errors={rest.errors}
                      variant="outlined"
                      type="number"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      Sie wollen bestehende Daten in Ihrem Unternehmensprofil
                      ändern? Dann schreiben Sie uns bitte eine Mail an{" "}
                      <a href="mailto:bleib.lokal2020@gmail.com">
                        bleib.lokal2020@gmail.com
                      </a>
                      . Wir nehmen die gewünschten Änderungen gerne für Sie vor!
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      color="secondary"
                    >
                      Jetzt registrieren
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUp;
