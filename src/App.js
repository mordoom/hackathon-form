import React from "react";
import "./App.css";
import { Header } from "./Header";
import { formConfig } from "./InputForm/formConfig";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      values: [
        {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          lifeSupport: ""
        },
        { billsAndLetters: "email", billing: "" }
      ]
    };
  }

  handleNextStep = values => {
    const { currentStep } = this.state;
    const nextStepIndex = currentStep + 1;
    const newValues = [...this.state.values];
    newValues[currentStep - 1] = values;
    this.setState({ currentStep: nextStepIndex, values: newValues });
  };

  handlePrevStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  render() {
    const { values, currentStep } = this.state;
    const activeStep = formConfig[currentStep - 1];
    const ActiveStep = activeStep.component;

    return (
      <div className="App">
        <Header />
        <ActiveStep
          values={values[currentStep - 1]}
          currentStep={currentStep}
          onNextStep={this.handleNextStep}
          onPrevStep={this.handlePrevStep}
        />
      </div>
    );
  }
}
