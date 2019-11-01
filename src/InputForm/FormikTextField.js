import React from "react";
import TextField from "@material-ui/core/TextField";

export const FormikTextField = ({
  label,
  fieldName,
  values,
  textField,
  errors,
  touched,
  handleChange,
  setFieldTouched,
  handleBlur,
  ...props
}) => (
  <TextField
    id={fieldName}
    name={fieldName}
    helperText={touched[fieldName] ? errors[fieldName] : ""}
    error={touched[fieldName] && Boolean(errors[fieldName])}
    label={label}
    value={values[fieldName]}
    onChange={handleChange}
    onBlur={e => {
      setFieldTouched(fieldName, true, false);
      handleBlur(e);
    }}
    variant="filled"
    fullWidth
    className={textField}
    {...props}
  />
);
