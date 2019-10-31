import React from "react";
import TextField from "@material-ui/core/TextField";
export const FormikTextField = ({ label, fieldName, values, textField, errors, touched, handleChange, setFieldTouched, ...props }) => (<TextField id={fieldName} name={fieldName} helperText={touched[fieldName] ? errors[fieldName] : ""} error={touched[fieldName] && Boolean(errors[fieldName])} label={label} value={values[fieldName]} onChange={handleChange} onBlur={() => setFieldTouched(fieldName, true, false)} variant="filled" fullWidth className={textField} {...props} />);
