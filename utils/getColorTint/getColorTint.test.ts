import { getColorTint } from "./getColorTint";
import { HEX } from "../../types";

describe("getColorTint works correctly with HEX input", () => {
    const mainColorHex: HEX = { type: "hex", value: "#ed2939" };
    test("getColorTint produces correct 10% tint for hex color input", () => {
        expect(getColorTint(mainColorHex, 10)).toEqual({ type: "hex", value: "#ef3e4d" });
    });
    test("getColorTint produces correct 20% tint for hex color input", () => {
        expect(getColorTint(mainColorHex, 20)).toEqual({ type: "hex", value: "#f15461" });
    });
    test("getColorTint produces correct 30% tint for hex color input", () => {
        expect(getColorTint(mainColorHex, 30)).toEqual({ type: "hex", value: "#f26974" });
    });
    test("getColorTint produces correct 40% tint for hex color input", () => {
        expect(getColorTint(mainColorHex, 40)).toEqual({ type: "hex", value: "#f47f88" });
    });
    test("getColorTint produces correct 50% tint for hex color input", () => {
        expect(getColorTint(mainColorHex, 50)).toEqual({ type: "hex", value: "#f6949c" });
    });
    test("getColorTint produces correct 60% tint for hex color input", () => {
        expect(getColorTint(mainColorHex, 60)).toEqual({ type: "hex", value: "#f8a9b0" });
    });
    test("getColorTint produces correct 70% tint for hex color input", () => {
        expect(getColorTint(mainColorHex, 70)).toEqual({ type: "hex", value: "#fabfc4" });
    });
    test("getColorTint produces correct 80% tint for hex color input", () => {
        expect(getColorTint(mainColorHex, 80)).toEqual({ type: "hex", value: "#fbd4d7" });
    });
    test("getColorTint produces correct 90% tint for hex color input", () => {
        expect(getColorTint(mainColorHex, 90)).toEqual({ type: "hex", value: "#fdeaeb" });
    });
    test("getColorTint produces white (100%) for hex color input", () => {
        expect(getColorTint(mainColorHex, 100)).toEqual({ type: "hex", value: "#ffffff" });
    });
});
