export class ErrorModel {
  constructor(errorName, errorStack, errorMessage, creationTime = new Date()) {
    this.creationTime = `Created at ${creationTime}`;
    this.errorMessage = `Error message ${errorMessage}`;
    this.errorName = `Error name ${errorName}`;
    this.errorStack = `ErrorStack ${errorStack}`;
  }
}
