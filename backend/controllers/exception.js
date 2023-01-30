import { addErrorToLogs } from "../db/dbApi.js";

export const saveExceptions = async (req, res) => {
  const exceptions = req.body.errors;

  try {
    await exceptions.forEach(
      ({
        errorName,
        errorStack,
        errorMessage,
        creationTime,
        detailedCreationTime,
      }) => {
        addErrorToLogs(
          errorName,
          errorStack,
          errorMessage,
          creationTime,
          detailedCreationTime
        );
      }
    );
  } catch (error) {
    console.log(error);
  }

  res.status(200).send("Logs added");
};
