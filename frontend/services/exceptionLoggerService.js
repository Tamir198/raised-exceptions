import { Api } from "./api/api";
import { API_URLS } from "../constants/url";

import { deleteItem } from "../utils/localStorageUtil";
import { VALUES } from "../constants/values";
export const logCurrentExceptions = async (errors) => {
  try {
    const res = await Api.post(API_URLS.SERVER_EXCEPTION_ENDPOINT, {
      errors,
    });

    deleteItem(VALUES.LOCAL_STORAGE_ERR_KEY);

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
