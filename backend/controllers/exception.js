import { addErrorToLogs } from "../db/dbApi.js";

export const saveExceptions = async (req, res) => {
  const exceptions = req.body.errors;

  if (exceptions.length == 0) {
    res.send("No new logs were sent");
  }

  await exceptions.forEach(
    ({ errorName, errorStack, errorMessage, creationTime }) => {
      addErrorToLogs(errorName, errorStack, errorMessage, creationTime);
    }
  );

  res.send(req.body.errors);
};
