declare global {
  interface TestingStateProps {
    test?: string;
  }

  interface TestingStateState {
    dots: string;
    test: string;
    index: number;
  }
}

export {}
