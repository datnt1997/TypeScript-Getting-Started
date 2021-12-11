class Utility{
  getInputValue(elementID: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
  }
}