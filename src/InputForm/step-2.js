import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import InputForm from ".";

export class Step2 extends React.Component {
  render() {
    const { values, currentStep, onNextStep, onPrevStep } = this.props;
    return (
      <InputForm
        values={values}
        currentStep={currentStep}
        onNextStep={onNextStep}
        onPrevStep={onPrevStep}
        render={({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          isValid,
          setFieldTouched
        }) => (
          <>
            <FormLabel component="legend">
              Billing and direct debit setup
            </FormLabel>
            <RadioGroup
              aria-label="billing"
              name="billing"
              onChange={handleChange}
              value={values.billing}
              defaultValue={values.billing}
            >
              <FormControlLabel
                value="creditCard"
                control={<Radio color="primary" />}
                label="Credit card"
              />
              <FormControlLabel
                value="bankAccount"
                control={<Radio color="primary" />}
                label="Bank account"
              />
              <FormControlLabel
                value="manual"
                control={<Radio color="primary" />}
                label="Pay each bill manually"
              />
            </RadioGroup>
            <FormLabel component="legend">
              Your bills and letters preference
            </FormLabel>
            <RadioGroup
              aria-label="bills-and-letters"
              name="billsAndLetters"
              onChange={handleChange}
              value={values.billsAndLetters}
              defaultValue={values.billsAndLetters}
            >
              <FormControlLabel
                value="email"
                control={<Radio contr color="primary" />}
                label="By email"
              />
              <FormControlLabel
                value="post"
                control={<Radio color="primary" />}
                label="By post"
              />
            </RadioGroup>
          </>
        )}
      />
    );
  }
}
