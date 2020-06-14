import React from "react";

import { makeStyles } from "@material-ui/core";
import SaudeUtente from "./SaudeUtente";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const InfoMap = ({ saudes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {saudes &&
        saudes.map((saude) => {
          return <SaudeUtente saude={saude} />;
        })}
    </div>
  );
};

export default InfoMap;
