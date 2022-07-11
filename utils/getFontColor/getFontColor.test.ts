import { getFontColor } from "./getFontColor";
import { RGB } from "../../types";

describe("getFontColor works correctly", () => {
    test("get light text color for dark background (dark blue)", () => {
        const originalColor: RGB = { type: "rgb", value: { red: 43, green: 45, blue: 66 } };
        expect(getFontColor(originalColor).value.red).toBeGreaterThan(originalColor.value.red);
        expect(getFontColor(originalColor).value.green).toBeGreaterThan(originalColor.value.green);
        expect(getFontColor(originalColor).value.blue).toBeGreaterThan(originalColor.value.blue);
    });
    test("get dark text color for light background (yellow)", () => {
        const originalColor: RGB = { type: "rgb", value: { red: 248, green: 245, blue: 37 } };
        expect(getFontColor(originalColor).value.red).toBeLessThan(originalColor.value.red);
        expect(getFontColor(originalColor).value.green).toBeLessThan(originalColor.value.green);
        expect(getFontColor(originalColor).value.blue).toBeLessThan(originalColor.value.blue);
    });
});
