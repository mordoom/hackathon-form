import { Step1 } from "./step-1";
import { Step2 } from "./step-2";
import { step1Schema, step2Schema } from "./formSchemas";

export const formConfig = [
  {
    step: 1,
    component: Step1,
    validationSchema: step1Schema,
    progress: { from: 0, to: 61 }
  },
  {
    step: 2,
    component: Step2,
    validationSchema: step2Schema,
    progress: { from: 61, to: 91 }
  }
];
