import { writeToFile } from "../services/filesService.js";
import { ErrorModel } from "./errorModel.js";

export const addErrorToLogs = (
  errorName,
  errorStack,
  errorMessage,
  creationTime
) => {
  const error = new ErrorModel(
    errorName,
    errorStack,
    errorMessage,
    creationTime
  );
  writeToFile(creationTime, error);
};
