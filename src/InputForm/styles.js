import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";

export const useStyles = makeStyles(theme =>
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
      marginRight: "32px",
      fontSize: "16px",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "rgb(179, 0, 0)",
        boxShadow: "none"
      },
      "&:disabled": {
        backgroundColor: "rgb(248, 173, 173)",
        color: "white"
      }
    },
    secondaryButton: {
      color: "rgb(236, 0, 0)",
      backgroundColor: "white",
      padding: theme.spacing(2),
      borderRadius: 0,
      textTransform: "none",
      fontSize: "16px",
      boxShadow: "none",
      border: "1px solid rgb(236, 0, 0)",
      "&:hover": {
        backgroundColor: "rgb(179, 0, 0)",
        boxShadow: "none",
        color: "white"
      },
      "&:disabled": {
        backgroundColor: "rgb(248, 173, 173)",
        color: "white"
      }
    },
    formLabel: { textAlign: "left" },
    radio: {
      "&$checked": {
        color: "#ffb432"
      }
    },
    checked: {}
  })
);
