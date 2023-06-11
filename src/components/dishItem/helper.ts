// Private: This means that these properties are only accessible within the Helper
// class and cannot be accessed directly from outside the class.

export class starTypesCount {
  private starWholeCount: number;
  private starhalfCount: number;
  private starNullCount: number;

  constructor(starCount: number) {
    this.starWholeCount = Math.floor(starCount);
    this.starhalfCount = starCount - this.starWholeCount ? 1 : 0;
    this.starNullCount = 5 - this.starWholeCount - this.starhalfCount;
  }

  getStarWholeCount(): number {
    return this.starWholeCount;
  }

  getStarHalfCount(): number {
    return this.starhalfCount;
  }

  getStarNullCount(): number {
    return this.starNullCount;
  }
}
