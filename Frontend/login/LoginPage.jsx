import React, { Component } from "react";
import Logo from '../images/purplefix-smallest-web.png';
import { Checkbox } from 'antd';


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate errors that are empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate if form was filled
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: null,
      password: null,
      formErrors: {
        emailAddress: "",
        password: ""
      }
    };
  }
  //submitting array of values
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <div className="logo">
            <img src={Logo} alt='logo' />
          </div>
          <h1>Sign in</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="emailAddress">
              <label htmlFor="emailAdress">Email address</label>
              <input
                className={formErrors.emailAddress.length > 0 ? "error" : null}
                placeholder="Email Address"
                type="text"
                name="emailAddress"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.emailAddress.length > 0 && (
                <span className="errorMessage">{formErrors.emailAddress}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            
            <label htmlFo='checkbox' name="remember" valuePropName="checked">
             <Checkbox>Remember me</Checkbox>
             </label>
            <div className="SignIn">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;