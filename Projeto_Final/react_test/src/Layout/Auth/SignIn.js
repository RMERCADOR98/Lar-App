import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../Store/Actions/authActions";
import { Redirect } from "react-router-dom";

import SignInForm from "./signInForm";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  //dar update do state para este registar o que está a ser escrito. Para saber exatamente aquilo que temos de fazer update , este é identificado a partir do "id", definido em cada input field
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  //Em primeiro previnimos o form de ser submetido quando a página faz refresh
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    const error = authError;
    console.log(error);

    return (
      <div className="container">
        {/* <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlfor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlfor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form> */}
        <SignInForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          error={error}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
