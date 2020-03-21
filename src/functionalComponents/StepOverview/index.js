import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";

import Button from "components/CustomButtons/Button.js";

import SnackbarContent from "components/Snackbar/SnackbarContent.js";

const styles = theme => ({
  categoryList: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
});

const days = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag"
];

const getTimeString = isoDate => {
  const date = new Date(isoDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${!minutes ? "00" : minutes}`;
};

const useStyles = makeStyles(styles);

const StepOverview = ({ displayThankYou, nextStep, unternehmen }) => {
  const classes = useStyles();
  return (
    <>
      {unternehmen.categories && (
        <div className={classes.categoryList}>
          {unternehmen.categories.map(category => (
            <Chip label={category} key={category} />
          ))}
        </div>
      )}
      <Grid container spacing={2}>
        <Grid item md={7}>
          <h5>Beschreibung</h5>
          <p>{unternehmen.beschreibung}</p>
          <Button onClick={() => nextStep()} color="info">Bestellung aufgeben</Button>
        </Grid>
        <Grid item md={5}>
          <h5>Öffnungszeiten</h5>
          <Table size="small">
          <tbody>
            {days.map((day, i) => (
              <TableRow key={day}>
                <TableCell className={classes.inlineList}>{day}: </TableCell>
                <TableCell className={classes.inlineList}>
                  {getTimeString(
                    unternehmen.kontaktlose_oeffnungszeiten[i].start
                  )}{" "}
                  -{" "}
                  {getTimeString(
                    unternehmen.kontaktlose_oeffnungszeiten[i].stop
                  )}{" "}
                  Uhr
                </TableCell>
              </TableRow>
            ))}
            </tbody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
};

export default StepOverview;
