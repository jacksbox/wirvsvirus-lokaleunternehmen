import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Input from "components/Input";

import update from "immutability-helper";

const daysOptions = [
  { label: "Montag", value: "Monday" },
  { label: "Dienstag", value: "Tuesday" },
  { label: "Mittwoch", value: "Wednesday" },
  { label: "Donnerstag", value: "Thursday" },
  { label: "Freitag", value: "Friday" },
  { label: "Samstag", value: "Saturday" },
  { label: "Sonntag", value: "Sunday" },
];

const hoursOptions = [...new Array(24)].map((_, index) => ({
  label: `${index + 1}`,
  value: index + 1,
}));

const minutesOptions = [
  { label: "00", value: 0 },
  { label: "30", value: 30 },
];

const renderItem = ({
  item,
  index,
  handleChange,
  handleDelete,
  errors,
  numItems,
}) => {
  const { day, start_hours, start_minutes, end_hours, end_minutes } = item;
  return (
    <Grid item xs={12} container spacing={2}>
      <Grid item xs={12} md={2}>
        <Input
          id={`day-${index}`}
          select
          value={day}
          options={daysOptions}
          required
          labelText="Tag"
          helperText="Zeiten dürfen Sich nicht überlappen"
          handleChange={handleChange(index)}
          errors={errors}
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={8} container spacing={2}>
        <Grid item xs={12} md={6} container spacing={2}>
          <Grid item xs={2}>
            von
          </Grid>
          <Grid item xs={5}>
            <Input
              id={`start_hours-${index}`}
              select
              value={start_hours}
              options={hoursOptions}
              required
              labelText="Stunde"
              helperText=""
              handleChange={handleChange(index)}
              errors={errors}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <Input
              id={`start_minutes-${index}`}
              select
              value={start_minutes}
              options={minutesOptions}
              required
              labelText="Minuten"
              helperText=""
              handleChange={handleChange(index)}
              errors={errors}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} container spacing={2}>
          <Grid item xs={2}>
            bis
          </Grid>
          <Grid item xs={5}>
            <Input
              id={`end_hours-${index}`}
              select
              value={end_hours}
              options={hoursOptions}
              required
              labelText="Stunde"
              helperText=""
              handleChange={handleChange(index)}
              errors={errors}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <Input
              id={`end_minutes-${index}`}
              select
              value={end_minutes}
              options={minutesOptions}
              required
              labelText="Minuten"
              helperText=""
              handleChange={handleChange(index)}
              errors={errors}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button onClick={handleDelete(index)} disabled={numItems === 1}>
          entfernen
        </Button>
      </Grid>
    </Grid>
  );
};

const baseItem = {
  day: "Monday",
  start: '12:00',
  start_hours: 12,
  start_minutes: 0,
  end: '18:00',
  end_hours: 18,
  end_minutes: 0,
};

const needsZero = value => value < 10 ? `0${value}` : value

const BusinessHours = ({ updateBusinessHours, errors = [] }) => {
  const [items, setItems] = useState([{ ...baseItem }]);

  useEffect(() => {
    updateBusinessHours(items);
  }, []);

  const handleAdd = () => {
    if (items.length >= 21) {
      return;
    }
    const newItems = update(items, { $push: [{ ...baseItem }] });
    setItems(newItems);
    updateBusinessHours(newItems);
  };

  const handleChange = (index) => (event) => {
    const newItem = {
      ...items[index],
      [event.target.name.split("-")[0]]: event.target.value,
    };
    newItem.start = `${needsZero(newItem.start_hours)}:${needsZero(newItem.start_minutes)}`
    newItem.end = `${needsZero(newItem.end_hours)}:${needsZero(newItem.end_minutes)}`
    const newItems = update(items, { [index]: { $set: newItem } });
    setItems(newItems);
    updateBusinessHours(newItems);
  };

  const handleDelete = (index) => () => {
    if (items.length === 1) {
      return;
    }
    const newItems = update(items, { $splice: [[index, 1]] });
    setItems(newItems);
    updateBusinessHours(newItems);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Öffnungszeiten</Typography>
      </Grid>
      <Grid item xs={12}></Grid>
      {items.map((item, index) =>
        renderItem({
          item,
          index,
          handleChange,
          handleDelete,
          errors,
          numItems: items.length,
        })
      )}
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={12} sm={4} md={2}>
          <Button onClick={handleAdd} variant="contained" fullWidth>
            Hinzufügen
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BusinessHours;
