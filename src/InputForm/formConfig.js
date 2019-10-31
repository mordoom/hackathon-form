import { Step1 } from './step-1';
import { step1Schema } from './formSchemas';

export const formConfig = [
  {
    step: 1,
    component: Step1,
    validationSchema: step1Schema
  }
];
