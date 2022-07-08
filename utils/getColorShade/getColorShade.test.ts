import { getColorShade } from "./getColorShade";
import { HEX } from "../../types";

describe("getColorShade works correctly with HEX input", () => {
    const mainColorHex: HEX = { type: "hex", value: "#ed2939" };
    test("getColorShade produces correct 10% shade for hex color input", () => {
        expect(getColorShade(mainColorHex, 10)).toEqual({ type: "hex", value: "#d52533" });
    });
    test("getColorShade produces correct 20% shade for hex color input", () => {
        expect(getColorShade(mainColorHex, 20)).toEqual({ type: "hex", value: "#be212e" });
    });
    test("getColorShade produces correct 30% shade for hex color input", () => {
        expect(getColorShade(mainColorHex, 30)).toEqual({ type: "hex", value: "#a61d28" });
    });
    test("getColorShade produces correct 40% shade for hex color input", () => {
        expect(getColorShade(mainColorHex, 40)).toEqual({ type: "hex", value: "#8e1922" });
    });
    test("getColorShade produces correct 50% shade for hex color input", () => {
        expect(getColorShade(mainColorHex, 50)).toEqual({ type: "hex", value: "#77151d" });
    });
    test("getColorShade produces correct 60% shade for hex color input", () => {
        expect(getColorShade(mainColorHex, 60)).toEqual({ type: "hex", value: "#5f1017" });
    });
    test("getColorShade produces correct 70% shade for hex color input", () => {
        expect(getColorShade(mainColorHex, 70)).toEqual({ type: "hex", value: "#470c11" });
    });
    test("getColorShade produces correct 80% shade for hex color input", () => {
        expect(getColorShade(mainColorHex, 80)).toEqual({ type: "hex", value: "#2f080b" });
    });
    test("getColorShade produces correct 90% shade for hex color input", () => {
        expect(getColorShade(mainColorHex, 90)).toEqual({ type: "hex", value: "#180406" });
    });
    test("getColorShade produces black (100%) for hex color input", () => {
        expect(getColorShade(mainColorHex, 100)).toEqual({ type: "hex", value: "#000000" });
    });
});
