import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import BusinessForm from 'functionalComponents/BusinessForm'
import PasswordForm from 'functionalComponents/PasswordForm'

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Hidden hidden={value !== index}>{value === index && children}</Hidden>
  );
};

const Profil = ({ handleChange, errors }) => {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardHeader color="info">
        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="primary"
        >
          <Tab label="Unternehmens-Profil" />
          <Tab label="Slot Verwaltung" />
          <Tab label="Account Verwaltung" />
        </Tabs>
      </CardHeader>
      <CardBody>
        <TabPanel value={value} index={0}>
          <BusinessForm handleChange={handleChange} errors={errors} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PasswordForm handleChange={handleChange} errors={errors} newPassword/>
        </TabPanel>
      </CardBody>
    </Card>
  );
};

export default Profil;
