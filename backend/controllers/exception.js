import { addErrorToLogs } from "../db/dbApi.js";

export const saveExceptions = async (req, res) => {
  const exceptions = req.body.errors;

  try {
    //TODO check why I am getting this once as array and once as {exceptions: []}
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
    console.log("Whyyyyyyyy ");
    console.log(error);
  }

  res.status(200).send("Logs added");
};
