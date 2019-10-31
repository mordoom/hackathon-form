import React from "react";
import InputForm from ".";

export const Step3 = props => {
  return (
    <InputForm
      values={props.values}
      currentStep={props.currentStep}
      onNextStep={props.onNextStep}
      onPrevStep={props.onPrevStep}
      render={({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
      }) => <>Confirmation page here</>}
    />
  );
};
