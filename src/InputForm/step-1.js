import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import InputForm from "./";
import { FormikTextField } from "./FormikTextField";
import { useStyles } from "./styles";

export const Step1 = props => {
  const classes = useStyles();
  return (
    <InputForm
      values={props.values}
      currentStep={props.currentStep}
      onNextStep={props.onNextStep}
      onPrevStep={props.onPrevStep}
      validateOnChange={true}
      render={({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched,
        handleBlur
      }) => (
        <>
          <FormikTextField
            autoFocus={true}
            label="First name"
            fieldName="firstName"
            values={values}
            textField={classes.textField}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            setFieldTouched={setFieldTouched}
            handleBlur={handleBlur}
          />
          <FormikTextField
            label="Last name"
            fieldName="lastName"
            values={values}
            textField={classes.textField}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            setFieldTouched={setFieldTouched}
            handleBlur={handleBlur}
          />
          <FormikTextField
            label="Email address"
            fieldName="email"
            values={values}
            textField={classes.textField}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            setFieldTouched={setFieldTouched}
            handleBlur={handleBlur}
          />
          <FormikTextField
            label="Phone (landline or mobile)"
            fieldName="phone"
            values={values}
            inputProps={{ maxLength: 10 }}
            textField={classes.textField}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            setFieldTouched={setFieldTouched}
            handleBlur={handleBlur}
          />
          <FormikTextField
            label="Date of birth (DD/MM/YYYY)"
            fieldName="dateOfBirth"
            values={values}
            inputProps={{ maxLength: 10 }}
            textField={classes.textField}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            setFieldTouched={setFieldTouched}
            handleBlur={handleBlur}
          />
          <FormLabel className={classes.formLabel} component="legend">
            Life support
          </FormLabel>
          <RadioGroup
            aria-label="life-support"
            name="lifeSupport"
            onChange={handleChange}
            value={values.lifeSupport}
          >
            <FormControlLabel
              value="yes"
              control={
                <Radio
                  classes={{ root: classes.radio, checked: classes.checked }}
                  color="primary"
                />
              }
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={
                <Radio
                  classes={{ root: classes.radio, checked: classes.checked }}
                  color="primary"
                />
              }
              label="No"
            />
          </RadioGroup>
        </>
      )}
    />
  );
};
