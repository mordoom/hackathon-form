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
  },
  container: {
    maxWidth: "200px"
  }
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepIndex: 1,
      values: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        lifeSupport: ""
      }
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
    const activeStep = formConfig[activeStepIndex - 1];
    const ActiveStep = activeStep.component;
    return (
      <div className={classes.container}>
        <Container maxWidth="md">
          <h1>Form</h1>
          <Formik
            initialValues={values}
            enableReinitialize={false}
            validationSchema={activeStep.validationSchema}
            onSubmit={this.handleNextStep}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <ActiveStep {...props} />
                {activeStepIndex < formConfig.length && (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!props.isValid || !props.dirty}
                  >
                    Next step
                  </Button>
                )}
                {activeStepIndex === formConfig.length && (
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!props.isValid || !props.dirty}
                  >
                    Submit
                  </Button>
                )}
                {activeStepIndex > 1 && (
                  <Button variant="contained" onClick={this.handlePrevStep}>
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
