import { ColorType } from "../../types";
import { toRGB } from "../toRGB";

/**
 * Color luminance formula
 *
 * if coefficient is greater than 0.5 - color is light,
 * otherwise the color is dark
 *
 * @param {[ColorType]} color Object
 * @returns {[number]} Color luminance value in range between 0 and 1
 * */
export function getLuminance(color: ColorType): number {
    if (color.type === "rgb") {
        const { red, green, blue } = color.value;
        return (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
    }
    const { red, green, blue } = toRGB(color).value;
    return (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
}
