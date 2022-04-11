import { capitalize } from "../capitalize";

describe("Test helper: capitalize", () => {
  test("Given string value, it will return the string in capitalized format", () => {
    expect(capitalize("testing capitalize")).toEqual("Testing capitalize");
  });

  test("Given undefined value, it will return empty string", () => {
    const text = undefined;
    expect(capitalize(text as unknown as string)).toEqual("");
  });
});
