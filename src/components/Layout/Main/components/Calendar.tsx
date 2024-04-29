import React from 'react'

export interface CalendarProps {
}

class Calendar extends React.Component {
  constructor(props: CalendarProps) {
    super(props);
  }

  state: Readonly<{}> = {}

  render(): React.ReactNode {
    return (
      <>
        <h2>This is your Calendar react component!</h2>
      </>
    );
  }
}

export default Calendar;
