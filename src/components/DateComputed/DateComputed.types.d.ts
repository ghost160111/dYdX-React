declare global {
  interface DateComputedProps {
    className?: string;
    date: Date;
    order?:
      | "day/month/year"
      | "year/month/day"
      | "year/day/month";
    orderStyle?: string;
    includeTime?: boolean;
    timeOrder?:
      | "hours:minutes"
      | "hours:minutes:seconds"
      | "hours:minutes:seconds:milliseconds";
    updateEverySecond?: boolean;
  }

  interface DateComputedState {
    date: Date;
  }
}

export {}
