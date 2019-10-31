import { Step1 } from "./step-1";
import { Step2 } from "./step-2";
import { Step3 } from "./step-3";
import { step1Schema, step2Schema, step3Schema } from "./formSchemas";

export const formConfig = [
  {
    step: 1,
    component: Step1,
    validationSchema: step1Schema,
    progress: { from: 0, to: 61 },
    values: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      lifeSupport: "",
    }
  },
  {
    step: 2,
    component: Step2,
    validationSchema: step2Schema,
    progress: { from: 61, to: 91 },
    values: {
      billsAndLetters: "email",
      billing: ""
    }
  },
  {
    step: 3,
    component: Step3,
    validationSchema: step3Schema,
    progress: { from: 91, to: 99 }
  }
];
