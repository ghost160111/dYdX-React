declare global {
  interface RangeSliderProps {
    min: number;
    max: number;
    step: number;
    value: number;
    showItOnPercentage?: boolean;
    showPopup?: boolean;
    delayEffect?: boolean;
    computedAfterValue?: ReactNode | string;
    className?: string;
    onChange: (value: string | number) => void;
  }

  interface RangeSliderState {
    rangePopupIsActive: boolean;
    rangeValue: number | string;
  }
}

export {}
