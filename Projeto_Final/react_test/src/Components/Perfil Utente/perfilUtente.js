import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(12),
    },
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        className={classes.large}
      />
    </div>
  );
}
