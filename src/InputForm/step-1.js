import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { ConnectionAddress } from "@origin-digital/originate";
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
          {/* <ConnectionAddress
            name="address"
            addressTranslationApiEndPoint="https://addresstranslation-api-staging.api.origindigital-pac.com.au/api/v1/sap-addressId"
            addressReverseLookupApiEndPoint="https://addresstranslation-api-staging.api.origindigital-pac.com.au/api/v1/sap-address"
            addressTranslationApiKey="RTkOXSBckW5e8FYrU3vOp6KgJeUBasuI274eBAAz"
            qasAuthToken="fb133c5e-c7e9-477f-8a62-f24d498866e0"
            addressId="CRM0039955306"
            onChange={address =>
              console.log("ConnectionAddressObject:", address)
            }
          /> */}
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
              control={<Radio className={classes.radio} color="primary" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio className={classes.radio} color="primary" />}
              label="No"
            />
          </RadioGroup>
        </>
      )}
    />
  );
};
