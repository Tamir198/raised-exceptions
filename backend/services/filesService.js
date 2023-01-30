import fs from "fs";
import path from "path";
import { TEXTS } from "../constants/texts.js";

export const writeToFile = async (fileName, newLog) => {
  try {
    const logsDirectory = TEXTS.LOGS_DIRECTORY_NAME;
    const filePath = path.join(logsDirectory, `${fileName}.txt`);

    await fs.promises.mkdir(logsDirectory, { recursive: true });
    const fd = await fs.promises.open(filePath, "a");
    await fs.promises.appendFile(fd, newLog + "\n\n");
  } catch (err) {
    return "Something went wrong";
  }
};
