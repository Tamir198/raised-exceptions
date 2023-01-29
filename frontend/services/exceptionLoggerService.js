import { Api } from "./api/api";
import { API_URLS } from "../constants/url";

export const logCurrentExceptions = async (errors) => {
  try {
    const res = await Api.post(API_URLS.SERVER_EXCEPTION_ENDPOINT, {
      errors,
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
