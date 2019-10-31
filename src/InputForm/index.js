import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Button, Container } from "@material-ui/core";
import { formConfig } from "./formConfig";

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
      <div>
        <Container maxWidth="md">
          <h1>Form</h1>
          <Formik
            initialValues={values}
            enableReinitialize={false}
            validationSchema={activeStep.validationSchema}
            onSubmit={onNextStep}
          >
            {props => (
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
            )}
          </Formik>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(InputForm);
