import react from 'react';
import {act} from 'react-dom/test-utils';
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";


test("function getFullYear returns current year", () => {
  expect(getFullYear()).toBe(2023);
});

test(" function getFooterCopy returns corect string when true", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
});

test("function getFooterCopy returns correct string when false", () => {
  
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});
test("returns dict containing string value", () => {
  const str = getLatestNotification();
  expect(str).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
