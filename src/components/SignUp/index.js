import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import BusinessForm from "components/BusinessForm";

import SuccessMessage from "./SuccessMessage";

const SignUp = ({ saved, handleSubmit, ...rest }) => {
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
          <CardContent>
            {saved ? (
              <SuccessMessage />
            ) : (
              <>
                <BusinessForm {...rest} />
                <Grid container spacing={2}>
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
