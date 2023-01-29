import { useEffect } from "react";
import { logCurrentExceptions } from "../services/exceptionLoggerService.js";

export const useLoggerExceptions = (errors) => {
  useEffect(() => {
    console.log(errors);
    if (errors && errors.length > 0) {
      logCurrentExceptions(errors);
    }
  }, [errors]);
};
