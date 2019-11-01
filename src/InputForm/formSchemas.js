import { object, string } from "yup";
import { asyncBsbValidation } from "./bsbValidate";

export const NUMERIC_PATTERN = new RegExp(/\d+/);
export const NON_NUMERIC_PATTERN = new RegExp(/\D+/);
const phoneRegExp = /(?:^0[2378][0-9]{8})$|(?:^04\d{8}$)/;
const dobRegExp = /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;

export const step1Schema = object({
  // address: string().required("Address is required"),
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

export const VISA_PATTERN = /^4/;
export const MASTERCARD_PATTERN = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)/;
export const BSB_PATTERN = new RegExp(/^\d{3}-?\d{3}$/);

export const step2Schema = object({
  billing: string().required("Please select a billing preference"),
  cardNumber: string().when("billing", {
    is: "creditCard",
    then: string()
      .matches(MASTERCARD_PATTERN, "This is an invalid credit card number")
      .min(16)
      .required("Please enter your credit card number"),
    otherwise: string()
  }),
  expiry: string().when("billing", {
    is: "creditCard",
    then: string()
      .min(5)
      .required("Please enter your credit card expiry"),
    otherwise: string()
  }),
  cvv: string().when("billing", {
    is: "creditCard",
    then: string()
      .min(3)
      .matches(NUMERIC_PATTERN)
      .required("Please enter your credit card CVV"),
    otherwise: string()
  }),
  accountName: string().when("billing", {
    is: "bankAccount",
    then: string().required("Please enter your bank account name"),
    otherwise: string()
  }),
  bsb: string().when("billing", {
    is: "bankAccount",
    then: string()
      .required("Please enter your bank BSB")
      .min(7)
      .matches(BSB_PATTERN, "This is in invalid BSB")
      .test("valid BSB", "API says this is invalid", value => asyncBsbValidation(value), true),
    otherwise: string()
  }),
  accountNumber: string().when("billing", {
    is: "bankAccount",
    then: string()
      .min(8)
      .matches(NUMERIC_PATTERN)
      .required("Please enter your bank account number"),
    otherwise: string()
  }),
  billsAndLetters: string().required("Please select a billing preference")
});

export const step3Schema = object({}).test('async', () =>
  new Promise(resolve => setTimeout(() => resolve(true), 1000)));
