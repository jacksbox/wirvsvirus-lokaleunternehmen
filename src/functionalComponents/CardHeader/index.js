import React from 'react'
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

const styles = theme => ({
  CardHeader: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`
  },
  CardHeader_primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.constrastText
  },
  CardHeader_secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.constrastText
  }
})

const useStyles = makeStyles(styles);

const CardHeader = ({ color, children }) => {
  const classes = useStyles();
  const className = classNames({
    [classes.CardHeader]: true,
    [classes[`CardHeader_${color}`]]: color
  })
  return <div className={className}>{children}</div>
}

export default CardHeader