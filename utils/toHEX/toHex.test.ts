import { RGB } from "../../types";
import { toHex } from "./toHex";

describe("toHex function works correctly", () => {
    test("works correctly with valid RGB object", () => {
        const validRGB: RGB = { type: "rgb", value: { red: 244, green: 100, blue: 124 } };
        expect(toHex(validRGB)).toEqual({ type: "hex", value: "#f4647c" });
    });
});
