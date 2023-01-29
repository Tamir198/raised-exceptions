import fs from "fs";
import path from "path";

export const writeToFile = async (fileName, newLog) => {
  try {
    // const filePath = path.join("db/logs/", fileName);
    //TODO check how I can save this file into the logs directory

    await fs.promises.appendFile(`${fileName}.txt`, newLog + "\n\n");
    return "Error log added successfully";
  } catch (err) {
    console.log(err);
    return "Something went wrong";
  }
};
