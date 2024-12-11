export const TESTING_STATE = (text: string) => {
  return {
    test: text ?? "TESTING",
    index: 0,
    dots: "...",
  }
}
