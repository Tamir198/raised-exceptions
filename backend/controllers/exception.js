import { addErrorToLogs } from "../db/dbApi.js";

export const saveExceptions = async (req, res) => {
  const exceptions = req.body.errors;

  await exceptions.forEach(
    ({ errorName, errorStack, errorMessage, creationTime }) => {
      addErrorToLogs(errorName, errorStack, errorMessage, creationTime);
    }
  );

  res.status(200).send("Logs added");
};
