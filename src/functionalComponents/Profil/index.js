import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import BusinessForm from "container/BusinessForm";
import AccountForm from "container/AccountForm";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    value === index ? children : null
  );
};

const Profil = ({ handleChange, errors }) => {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={handleTabChange}
              indicatorColor="primary"
            >
              <Tab label="Unternehmensprofil" />
              <Tab label="Pickup-Slots Verwaltung" />
              <Tab label="Account Verwaltung" />
            </Tabs>
          </Grid>
          <Grid item xs={12}>
            <TabPanel value={value} index={0}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography color="textSecondary" gutterBottom>
                    Informationen für Ihre Kunden
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Unternehmensprofil bearbeiten
                  </Typography>
                  <Divider />
                  <BusinessForm handleChange={handleChange} errors={errors} />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography color="textSecondary" gutterBottom>
                    Wann sind Sie für Ihre Kunden verfügbar
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Pickup-Slots Verwalten
                  </Typography>
                  <Divider />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography color="textSecondary" gutterBottom>
                    Private Informationen
                  </Typography>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Account Verwaltung
                  </Typography>
                  <Divider />
                </Grid>
              </Grid>
              <AccountForm />
            </TabPanel>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Profil;
