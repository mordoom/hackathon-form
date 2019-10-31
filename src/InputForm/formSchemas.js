import { object, string, ref } from "yup";

export const step1Schema = object({
  name: string("Enter a name").required("Name is required"),
  email: string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
  confirmPassword: string("Enter your password")
    .required("Confirm your password")
    .oneOf([ref("password")], "Password does not match")
});