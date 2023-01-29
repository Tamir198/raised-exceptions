import { useEffect } from "react";
import { logCurrentExceptions } from "../services/exceptionLoggerService.js";

export const useLoggerExceptions = (errors) => {
  useEffect(() => {
    if (errors.length > 0) {
      logCurrentExceptions(errors);
    }
  }, []);
};
