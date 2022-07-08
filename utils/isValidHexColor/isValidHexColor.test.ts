import { isValidHexColor } from "./isValidHexColor";

describe("isValidHexColor works correctly", () => {
    test("Return true for a valid six digit hexadecimal color with #", () => {
        expect(isValidHexColor("#ed2939")).toEqual(true);
    });
    test("Return true for a valid three digit hexadecimal color with #", () => {
        expect(isValidHexColor("#ed2")).toEqual(true);
    });
    test("Return false for a valid six digit hexadecimal color without #", () => {
        expect(isValidHexColor("ed2939")).toEqual(false);
    });
    test("Return false for a valid three digit hexadecimal color without #", () => {
        expect(isValidHexColor("ed2")).toEqual(false);
    });
    test("Return false for an invalid hexadecimal color", () => {
        expect(isValidHexColor("#ed293")).toEqual(false);
    });
});
