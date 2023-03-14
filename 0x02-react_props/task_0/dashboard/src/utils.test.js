import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("function returns current year", () => {
  const year = getFullYear();
  expect(year).toBe(2023);
});

test("returns correct string when boolean arg is true", () => {
  const str = getFooterCopy(true);
  expect(str).toBe("Holberton School");
});

test("returns correct string when boolean arg is false", () => {
  const str = getFooterCopy(false);
  expect(str).toBe("Holberton School main dashboard");
});

test("returns dict containing string value", () => {
  const str = getLatestNotification();
  expect(str).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
