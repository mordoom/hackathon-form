import React, { Component } from "react";
import { Formik, Form } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Step1 } from "./step-1";
import { Step2 } from "./step-2";
import Paper from "@material-ui/core/Paper";
import { object, string, ref } from "yup";
import { Button } from "@material-ui/core";
import { Switch, Route, Prompt, Redirect, matchPath } from "react-router-dom";

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

const steps = [Step1, Step2];

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepIndex: 1,
      values: { name: "", email: "", confirmPassword: "", password: "" }
    };
  }

  handleNextStep = values => {
    const nextStepIndex = this.state.activeStepIndex + 1;
    this.setState({ activeStepIndex: nextStepIndex, values });
  };

  handlePrevStep = () => {
    this.setState({ activeStepIndex: this.state.activeStepIndex - 1 });
  };

  render() {
    const classes = this.props;
    const { activeStepIndex, values } = this.state;
    const ActiveStep = steps[activeStepIndex - 1];
    return (
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
          <h1>Form</h1>
          <Formik
            initialValues={values}
            enableReinitialize={false}
            validationSchema={validationSchema}
            onSubmit={this.handleNextStep}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <ActiveStep {...props} />
                {activeStepIndex < steps.length && (
                  <Button
                    type="submit"
                    disabled={!props.isValid || !props.dirty}
                  >
                    Next step
                  </Button>
                )}
                {activeStepIndex > 1 && (
                  <Button onClick={this.handlePrevStep}>Prev step</Button>
                )}
              </form>
            )}
          </Formik>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(InputForm);
