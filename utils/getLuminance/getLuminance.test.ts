import { getLuminance } from "./getLuminance";

describe("getLuminance works correctly", () => {
    test("works correct with black color", () => {
        expect(getLuminance({ type: "hex", value: "#000" })).toEqual(0);
    });
    test("works correct with white color", () => {
        expect(getLuminance({ type: "hex", value: "#FFF" })).toEqual(1);
    });
    test("works correct with bright color", () => {
        expect(getLuminance({ type: "hex", value: "#FF0" })).toBeGreaterThanOrEqual(0.5);
    });
    test("works correct with dark color", () => {
        expect(getLuminance({ type: "hex", value: "#585858" })).toBeLessThanOrEqual(0.5);
    });
});
