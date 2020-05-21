import React, { Component } from "react";
import FormDialogaddFamiliar from "../Components/Forms/addFamiliar/addFamiliar";
import { connect } from "react-redux"; //para que o component tenha acesso á redux store
import { Redirect } from "react-router-dom";

class Familiares extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <h1>Familiares</h1>
        <FormDialogaddFamiliar />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Familiares);
