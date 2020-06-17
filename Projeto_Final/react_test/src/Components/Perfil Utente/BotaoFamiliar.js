import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import GroupIcon from "@material-ui/icons/Group";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(12),
    },
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

function BotaoFamiliar({ utenteId }) {
  const classes = useStyles();
  console.log(utenteId);

  return (
    <div className={classes.root}>
      <NavLink to={"/Familiar/" + utenteId}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.large}
          style={{ background: "#fdd835" }}
        >
          <GroupIcon style={{ color: "#000" }} fontSize="large" />
        </Avatar>
      </NavLink>
    </div>
  );
}

export default BotaoFamiliar;
