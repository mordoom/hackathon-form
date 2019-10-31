import { object, string } from "yup";

const phoneRegExp = /(?:^0[2378][0-9]{8})$|(?:^04\d{8}$)/;
const dobRegExp = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

export const step1Schema = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Enter your phone number"),
  dateOfBirth: string()
    .matches(dobRegExp, "Please enter date in format DD/MM/YYYY")
    .required("Enter your date of birth"),
  lifeSupport: string().required("Please select a life support option")
});

export const step2Schema = object({
  billing: string().required("Please select a billing preference"),
  billsAndLetters: string().required("Please select a billing preference")
});
