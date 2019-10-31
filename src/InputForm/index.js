import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Container } from "@material-ui/core";
import { formConfig } from "./formConfig";
import { ProgressIndicator } from "../Progress";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  }
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        lifeSupport: "",
        billsAndLetters: "email",
        billing: ""
      }
    };
  }

  render() {
    const { currentStep, onNextStep, onPrevStep } = this.props;
    const { values } = this.state;
    const activeStep = formConfig[currentStep - 1];
    const ActiveStep = activeStep.component;
    return (
      <Formik
        initialValues={values}
        enableReinitialize={false}
        validationSchema={activeStep.validationSchema}
        validateOnMount
        onSubmit={onNextStep}
      >
        {props => (
          <div>
            <ProgressIndicator currentStep={currentStep} />
            <Container maxWidth="md">
              <form onSubmit={props.handleSubmit}>
                <ActiveStep {...props} />
                {currentStep < formConfig.length && (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!props.isValid || !props.dirty}
                  >
                    Next step
                  </Button>
                )}
                {currentStep === formConfig.length && (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!props.isValid || !props.dirty}
                  >
                    Submit
                  </Button>
                )}
                {currentStep > 1 && (
                  <Button variant="contained" onClick={onPrevStep}>
                    Prev step
                  </Button>
                )}
              </form>
            </Container>
          </div>
        )}
      </Formik>
    );
  }
}

export default withStyles(styles)(InputForm);
