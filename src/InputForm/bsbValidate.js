import axios from "axios";

export const asyncBsbValidation = async (
  bsb,
  callbacks,
  validationUrl = "https://digital.api.odcdn.com.au/api/v1/tests/bank"
) => {
  const body = {
    bsb: bsb ? bsb.replace("-", "") : "",
    accountNumber: "123456" // Just a dummy account number (length should be between 6 to 9), as the api needs account number to be passed,
    // We are just validating the BSB as part of this api call.
  };
  return axios
    .post(validationUrl, body)
    .then(response => response.data.data.isValid);
};
