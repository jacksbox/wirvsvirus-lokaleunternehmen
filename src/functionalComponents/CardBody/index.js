import React from 'react'

import { makeStyles } from "@material-ui/core/styles";

const styles = theme => ({
  CardBody: {
    padding: theme.spacing(2)
  }
})

const useStyles = makeStyles(styles);

const CardBody = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.CardBody}>{children}</div>
}

export default CardBody