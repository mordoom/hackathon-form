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
        backgroundColor: "#ec0000",
        padding: theme.spacing(2),
        borderRadius: 0,
        textTransform: "none",
        fontSize: "16px",
        "&:hover": {
          backgroundColor: "rgb(179, 0, 0);"
        },
        "&:disabled": {
          backgroundColor: "rgb(248, 173, 173)",
          color: "white"
        }
      },
      formLabel: {  textAlign: "left" },
      radio: {
        "& .MuiRadio-colorPrimary.Mui-checked": {
          color: "#ffb432"
        }
      }
    })
  );