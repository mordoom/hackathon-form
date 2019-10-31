import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import { object, string, ref } from "yup";

const validationSchema = object({
  name: string("Enter a name").required("Name is required"),
  email: string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
  confirmPassword: string("Enter your password")
    .required("Confirm your password")
    .oneOf([ref("password")], "Password does not match")
});

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  },
  container: {
    maxWidth: "200px"
  }
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    const values = { name: "", email: "", confirmPassword: "", password: "" };
    return (
      <React.Fragment>
        <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Form</h1>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
            />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);
