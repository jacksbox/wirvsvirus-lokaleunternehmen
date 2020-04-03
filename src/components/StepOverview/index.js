import React from "react";

import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const styles = theme => ({
  chipsContainer: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
});

// const days = [
//   "Montag",
//   "Dienstag",
//   "Mittwoch",
//   "Donnerstag",
//   "Freitag",
//   "Samstag",
//   "Sonntag"
// ];

const useStyles = makeStyles(styles);

const StepOverview = ({
  nextStep,
  handleClose,
  company: {
    properties: {
      address,
      phone,
      description,
      category: { name: categoryName },
      subCategories: { edges: subCategories }
    }
  }
}) => {
  const classes = useStyles();
  return (
    <>
      {subCategories && (
        <div className={classes.chipsContainer}>
          {subCategories &&
            subCategories.length > 0 &&
            subCategories.map(({ node: { name } }) => (
              <Chip variant="outlined" size="small" label={name} key={name} />
            ))}
        </div>
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          {(address || phone) && (
            <>
              <h5>Adresse</h5>
              <p>
                {address && (
                  <>
                    <span>{address}</span>
                    <br />
                  </>
                )}
                {phone && <span>Telefon: {phone}</span>}
              </p>
            </>
          )}
          {description && (
            <>
              <h5>Beschreibung</h5>
              {description.length > 350 ? (
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <p>{description.substr(0, 350)}...</p>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <p>{description.slice(350)}</p>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ) : (
                description
              )}
            </>
          )}
        </Grid>
        {/* <Grid item md={5} xs={12}>
          <h5>Öffnungszeiten</h5>
          <Table size="small">
            <tbody>
              {days.map((day, i) => (
                <TableRow key={day}>
                  <TableCell className={classes.inlineList}>{day}: </TableCell>
                  <TableCell className={classes.inlineList}>
                    {unternehmen.oeffnungszeiten[i].closed ? (
                      "geschlossen"
                    ) : (
                      <>
                        {unternehmen.oeffnungszeiten[i].start} -{" "}
                        {unternehmen.oeffnungszeiten[i].end} Uhr
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </Grid>
        </Grid> */}
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} container justify="space-between">
          <Button onClick={handleClose}>zurück</Button>
          <Button onClick={nextStep} variant="contained" color="primary">
            Bestellung aufgeben
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default StepOverview;
