import { render } from "@testing-library/react";
import CheckboxSVG from "./CheckboxSVG";

test('renders CheckboxSVG component', () => {
  render(<CheckboxSVG isChecked={true} />);
});
