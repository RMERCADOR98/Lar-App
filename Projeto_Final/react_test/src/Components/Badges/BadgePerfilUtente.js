import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 80,
    height: 80,
  },
  shapeCircle: {
    borderRadius: "50%",
  },
}));

export default function BadgeOverlap({ children }) {
  const classes = useStyles();

  const rectangle = <div className={classes.shape} />;
  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

  return (
    <Container className={classes.root}>
      <Badge
        color="secondary"
        variant="standart"
        badgeContent=""
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {children}
      </Badge>
    </Container>
  );
}
