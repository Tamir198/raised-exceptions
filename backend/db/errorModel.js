export class ErrorModel {
  constructor(errorName, errorStack, errorMessage, creationTime = new Date()) {
    this.creationTime = creationTime;
    this.errorMessage = errorMessage;
    this.errorName = errorName;
    this.errorStack = errorStack;
  }
}
