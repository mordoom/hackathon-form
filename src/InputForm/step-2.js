import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import InputForm from ".";
import { FormikTextField } from "./FormikTextField";
import { useStyles } from "./styles";
import { Grid, Typography } from "@material-ui/core";

const CreditCard = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldTouched
}) => (
  <>
    <FormikTextField
      label="Card number"
      fieldName="cardNumber"
      values={values}
      errors={errors}
      touched={touched}
      handleChange={handleChange}
      handleBlur={handleBlur}
      setFieldTouched={setFieldTouched}
      inputProps={{ maxLength: 16 }}
    />
    <FormikTextField
      label="Expiry"
      fieldName="expiry"
      values={values}
      errors={errors}
      touched={touched}
      type="tel"
      pattern="[0-9\/]*"
      handleChange={handleChange}
      handleBlur={handleBlur}
      setFieldTouched={setFieldTouched}
      inputProps={{ maxLength: 5 }}
    />
    <FormikTextField
      label="CVV"
      fieldName="cvv"
      values={values}
      errors={errors}
      touched={touched}
      handleChange={handleChange}
      handleBlur={handleBlur}
      setFieldTouched={setFieldTouched}
      inputProps={{ maxLength: 3 }}
    />
  </>
);

const BankAccount = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldTouched
}) => (
  <>
    <FormikTextField
      label="Account name"
      fieldName="accountName"
      values={values}
      errors={errors}
      touched={touched}
      handleChange={handleChange}
      handleBlur={handleBlur}
      setFieldTouched={setFieldTouched}
    />
    <FormikTextField
      label="BSB"
      fieldName="bsb"
      values={values}
      errors={errors}
      touched={touched}
      handleChange={handleChange}
      handleBlur={handleBlur}
      setFieldTouched={setFieldTouched}
      inputProps={{ maxLength: 7 }}
    />
    <FormikTextField
      label="Account number"
      fieldName="accountNumber"
      values={values}
      errors={errors}
      touched={touched}
      handleChange={handleChange}
      handleBlur={handleBlur}
      setFieldTouched={setFieldTouched}
      inputProps={{ maxLength: 10 }}
    />
  </>
);

export const Step2 = ({ values, currentStep, onNextStep, onPrevStep }) => {
  const classes = useStyles();
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
        setFieldTouched,
        handleBlur,
        validateField
      }) => (
        <>
          <FormLabel className={classes.formLabel} component="legend">
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
            {values.billing === "creditCard" && (
              <CreditCard
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldTouched={setFieldTouched}
              />
            )}
            <FormControlLabel
              value="bankAccount"
              control={<Radio color="primary" />}
              label="Bank account"
            />
            {values.billing === "bankAccount" && (
              <BankAccount
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                setFieldTouched={setFieldTouched}
              />
            )}
            <FormControlLabel
              value="manual"
              control={<Radio color="primary" />}
              label="Pay each bill manually"
            />
          </RadioGroup>
          <Typography component="div" style={{ marginTop: "32px" }} />
          <FormLabel className={classes.formLabel} component="legend">
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
};
