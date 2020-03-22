import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Chip from "@material-ui/core/Chip";

import Button from "components/CustomButtons/Button.js";

import { CATEGORIES } from "consts";

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

const useStyles = makeStyles(styles);

const StepOverview = ({ nextStep, handleClose, unternehmen }) => {
  const classes = useStyles();
  return (
    <>
      {(unternehmen.ober_kategorie ||  unternehmen.unter_kategorien)&& (
        <div className={classes.categoryList}>
          {unternehmen.ober_kategorie && <Chip label={CATEGORIES.find(({ value }) => value === unternehmen.ober_kategorie).label} />}
          {unternehmen.unter_kategorien && unternehmen.unter_kategorien.split(',').map(category => (
            <Chip label={category} key={category} />
          ))}
        </div>
      )}
      <Grid container spacing={2}>
        <Grid item md={7}>
          {(unternehmen.adresse || unternehmen.telefon) && (
            <>
              <h5>Adresse</h5>
              <p>
                {unternehmen.adresse && <><span>{unternehmen.adresse}</span><br /></>}
                {unternehmen.telefon && <span>Telefon: {unternehmen.telefon}</span>}
              </p>
            </>
          )}
          {unternehmen.beschreibung && (
            <>
              <h5>Beschreibung</h5>
              <p>{unternehmen.beschreibung}</p>
            </>
          )}
        </Grid>
        <Grid item md={5}>
          <h5>Öffnungszeiten</h5>
          <Table size="small">
            <tbody>
              {days.map((day, i) => (
                <TableRow key={day}>
                  <TableCell className={classes.inlineList}>{day}: </TableCell>
                  <TableCell className={classes.inlineList}>
                    {unternehmen.oeffnungszeiten[i].start} -{" "}
                    {unternehmen.oeffnungszeiten[i].end} Uhr
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </Grid>
        <Grid item md={12}>
          <Button onClick={handleClose}>zurück</Button>
          <Button onClick={nextStep} color="info">
            Bestellung aufgeben
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default StepOverview;
