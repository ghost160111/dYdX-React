import { render } from "@testing-library/react";
import Select from "./Select";

test("renders Select component", () => {
  render(
    <Select
      selected={{
        id: "item1",
        tKey: "nav.aboutProject",
      }}
      list={[
        { id: "item1", tKey: "nav.aboutProject" },
        { id: "item2", tKey: "nav.btnTitle" },
        { id: "item3", tKey: "nav.news" },
      ]}
    />
  );
});
