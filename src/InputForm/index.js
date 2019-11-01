import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { formConfig } from "./formConfig";
import { ProgressIndicator } from "../Progress";
import uniqBy from 'lodash/uniqBy';
import isEmpty from 'lodash/isEmpty';

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
      currentStep: props.currentStep,
      errors: null
    };
    this.validate();
  }

  componentDidMount() {
    this.validate();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentStep !== prevProps.currentStep) {
      this.validate();
    }
  }

  validate = () => {
    const { validationSchema } = this.configForCurrentStep;
      validationSchema.validate(this.props.values, { abortEarly: false })
        .then((...args) => {
          this.setState({ errors: {} });
        })
        .catch((errors) => {
          const uniqErrors = uniqBy(errors.inner, (error) => error.path);
          const formikErrors = uniqErrors.reduce((errorObj, error) => ({
            ...errorObj,
            [error.path]: error.message
          }), {});
          this.setState({ errors: formikErrors });
        });
  }

  get configForCurrentStep() {
    const { currentStep } = this.props;
    return formConfig[currentStep - 1];
  }

  render() {
    const { currentStep, onNextStep, onPrevStep, values, render } = this.props;
    const { errors } = this.state;
    const activeStep = this.configForCurrentStep;

    if (!errors) {
      return null;
    }
    return (
      <Formik
        enableReinitialize
        initialValues={values}
        initialErrors={errors}
        isInitialValid={!errors}
        validationSchema={activeStep.validationSchema}
        onSubmit={onNextStep}
        validateOnMount
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
                    disabled={props.dirty ? !props.isValid : !isEmpty(errors)}
                  >
                    Next step
                  </Button>
                )}
                {currentStep === formConfig.length && (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={props.dirty ? !props.isValid : !isEmpty(errors)}
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
