import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

export const Step2 = props => {
  const { values, handleChange } = props;

  return (
    <>
      <FormLabel component="legend">Billing and direct debit setup</FormLabel>
      <RadioGroup aria-label="billing" name="billing" onChange={handleChange}>
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
      >
        <FormControlLabel
          value="email"
          control={<Radio color="primary" />}
          label="By email"
        />
        <FormControlLabel
          value="post"
          control={<Radio color="primary" />}
          label="By post"
        />
      </RadioGroup>
    </>
  );
};
