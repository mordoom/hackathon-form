import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
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
  render() {
    const { currentStep, onNextStep, onPrevStep, values, render } = this.props;
    const activeStep = formConfig[currentStep - 1];
    return (
      <Formik
        enableReinitialize
        initialValues={values}
        validationSchema={activeStep.validationSchema}
        onSubmit={onNextStep}
      >
        {props => (
          <div>
            <ProgressIndicator currentStep={currentStep} />
            <Container maxWidth="md">
              <form onSubmit={props.handleSubmit}>
                {render(props)}
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
