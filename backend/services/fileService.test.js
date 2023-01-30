import fs from "fs";
import { writeToFile } from "./filesService";
import { jest } from "@jest/globals";

describe("writeToFile", () => {
  const testFilePath = "logs/test.txt";
  const testFile = "test";
  afterEach(() => {
    fs.promises.unlink(testFilePath).catch(() => {});
  });

  it("writes the log to the file", async () => {
    await writeToFile(testFile, "This is a test log");

    const logFile = await fs.promises.readFile(testFilePath, "utf-8");
    expect(logFile).toBe("This is a test log\n\n");
  });

  it("returns 'Something went wrong' if an error occurs", async () => {
    fs.promises.unlink = jest.fn().mockRejectedValueOnce(new Error());

    const result = await writeToFile("test", "This is a test log");
    expect(result).toBe("Something went wrong");
  });
});
