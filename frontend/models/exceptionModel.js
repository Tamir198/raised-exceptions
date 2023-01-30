export class ExceptionModel {
  constructor(
    errorName,
    errorStack,
    errorMessage,
    creationTime,
    detailedCreationTime
  ) {
    this.errorName = errorName;
    this.errorStack = errorStack;
    this.errorMessage = errorMessage;
    this.creationTime = creationTime;
    this.detailedCreationTime = detailedCreationTime;
  }
}
