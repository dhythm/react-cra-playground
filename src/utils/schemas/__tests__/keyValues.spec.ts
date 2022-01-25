import { KeyValues } from "../keyValues";

it("keyValues", () => {
  expect(() =>
    KeyValues.parse([
      { key: "1", value: "1" },
      { key: "2", value: "2" },
      { key: "3", value: "3" },
      { key: "1", value: "4" },
    ])
  ).not.toThrowError();
});
