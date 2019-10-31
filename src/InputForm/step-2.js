import React from "react";
import TextField from "@material-ui/core/TextField";

export const Step2 = props => {
  const {
    values: { name, email, password, confirmPassword },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
    <>
      <div>hi</div>
    </>
  );
};
