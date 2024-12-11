import { render } from "@testing-library/react";
import MarkdownToJsx from "./Markdown";

const markdownText: string = `
  # React Component

  This is react component

  - Item 1
  - Item 2
`;

test("renders Markdown component", () => {
  render(<MarkdownToJsx>{markdownText}</MarkdownToJsx>);
});
