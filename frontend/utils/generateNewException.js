import { VALUES } from "../constants/values.js";
import { addItem } from "./localStorageUtil.js";

import { ExceptionModel } from "../models/exceptionModel.js";

export const generateNewException = async () => {
  try {
    //DO NOT REMOVE, THIS GENERATE ERROR AS IT SHOULD DO
    console.log(setState());
  } catch (error) {
    const { name, message, stack } = error;
    const fullDate = new Date();
    const shortDate = fullDate.toDateString().replaceAll(" ", "-");

    const newException = new ExceptionModel(
      name,
      stack,
      message,
      shortDate,
      fullDate
    );

    await addItem(VALUES.LOCAL_STORAGE_ERR_KEY, newException);
  }
};
