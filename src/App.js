import React from "react";
import "./App.css";
import { Header } from "./Header";
import InputForm from "./InputForm";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
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

  handleNextStep = values => {
    const { currentStep } = this.state;
    const nextStepIndex = currentStep + 1;
    this.setState({ currentStep: nextStepIndex, values });
  };

  handlePrevStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  render() {
    const { values, currentStep } = this.state;

    return (
      <div className="App">
        <Header />
        <InputForm
          values={values}
          currentStep={currentStep}
          onNextStep={this.handleNextStep}
          onPrevStep={this.handlePrevStep}
        />
      </div>
    );
  }
}
