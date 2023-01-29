export class ErrorModel {
  constructor(
    errorName,
    errorStack,
    errorMessage,
    creationTime = new Date(),
    detailedCreationTime
  ) {
    this.creationTime = creationTime;
    this.errorMessage = errorMessage;
    this.errorName = errorName;
    this.errorStack = errorStack;
    this.detailedCreationTime = detailedCreationTime;
  }
}
