import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    textField: {
      marginBottom: theme.spacing(4),
      "& label.Mui-focused": {
        color: "rgb(63, 117, 198)"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "rgb(63, 117, 198)"
      }
    },
    button: {
      backgroundColor: "rgb(236, 0, 0)",
      padding: theme.spacing(2),
      borderRadius: 0,
      textTransform: "none",
      fontSize: "16px",
      "&:hover": {
        backgroundColor: "rgb(179, 0, 0)"
      },
      "&:disabled": {
        backgroundColor: "rgb(248, 173, 173)",
        color: "white"
      }
    },
    formLabel: { legend: { textAlign: "left" } },
    radio: {
      "&$checked": {
        color: "#ffb432"
      }
    }
  })
);

const FormikTextField = ({
  label,
  fieldName,
  values,
  textField,
  errors,
  touched,
  handleChange,
  setFieldTouched,
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
    onBlur={() => setFieldTouched(fieldName, true, false)}
    variant="filled"
    fullWidth
    className={textField}
    {...props}
  />
);

export const Step1 = props => {
  const classes = useStyles();
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  return (
    <>
      <FormikTextField
        label="First name"
        fieldName="firstName"
        values={values}
        textField={classes.textField}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        setFieldTouched={setFieldTouched}
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
  );
};
