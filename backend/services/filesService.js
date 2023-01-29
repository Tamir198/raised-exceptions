import fs from "fs";
import path from "path";

export const writeToFile = async (fileName, newLog) => {
  try {
    // const filePath = path.join("db/logs/", fileName);
    await fs.promises.appendFile("testing.js", JSON.stringify(newLog) + "\n");
    return "Error log added successfully";
  } catch (err) {
    console.log(err);
    return "Something went wrong";
  }
};
