import { render } from "@testing-library/react";
import RangeSlider from "./RangeSlider";

test('renders RangeSlider component', () => {
  render(
    <RangeSlider
      min={0}
      max={1000}
      step={1}
      value={0}
      onChange={(value) => console.log(value)}
    />
  );
});
