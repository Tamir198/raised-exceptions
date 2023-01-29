import { Api } from "./api/api";
import { API_URLS } from "../constants/url";

export const logCurrentExceptions = async (errors) => {
  try {
    Api.post(`${API_URLS.SERVER_EXCEPTION_ENDPOINT}`, { errors });
  } catch (error) {
    console.log(error);
  }
};
