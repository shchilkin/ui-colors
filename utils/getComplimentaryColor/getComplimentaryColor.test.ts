import { getComplimentaryColor } from "./getComplimentaryColor";
import { HEX, RGB } from "../../types";
import { toRGB } from "../toRGB";

describe("getComplimntaryColor works correctly", () => {
    const hexColor: HEX = { type: "hex", value: "#ed2939" };
    const rgbColor: RGB = { type: "rgb", value: { red: 240, green: 113, blue: 64 } };
    test("works correctly with HEX input", () => {
        expect(getComplimentaryColor(hexColor)).toEqual({ type: "hex", value: "#12d6c6" });
    });
    test("works correctly with RGB input", () => {
        expect(getComplimentaryColor(rgbColor)).toEqual({
            type: "rgb",
            value: { red: 15, green: 142, blue: 191 },
        });
    });
    test("sum of complimentary color values is equal to 255 for each color channel", () => {
        expect({
            red: toRGB(hexColor).value.red + toRGB(getComplimentaryColor(hexColor)).value.red,
            green: toRGB(hexColor).value.green + toRGB(getComplimentaryColor(hexColor)).value.green,
            blue: toRGB(hexColor).value.blue + toRGB(getComplimentaryColor(hexColor)).value.blue,
        }).toEqual({ red: 255, green: 255, blue: 255 });
    });
});
