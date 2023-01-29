import { Api } from "./api/api";
import { API_URLS } from "../constants/url";

export const logCurrentExceptions = async (errors) => {
  try {
    const res = await Api.post(`api/exceptions`, {
      errors,
    });

    console.log("This is res");
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
