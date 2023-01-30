import { useEffect } from "react";

import { logCurrentExceptions } from "../services/exceptionLoggerService.js";
import { getItem } from "../utils/localStorageUtil.js";

import { VALUES } from "../constants/values.js";

export const useIntervalLogger = (intervalTime) => {
  useEffect(() => {
    const interval = setInterval(async () => {
      let errors = await getItem(VALUES.LOCAL_STORAGE_ERR_KEY);
      if (errors) {
        logCurrentExceptions(errors);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);
};
