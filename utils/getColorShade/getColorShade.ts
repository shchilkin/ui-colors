import { HEX, RGB } from "../../types";
import { hexToRGB } from "../toRGB/hexToRGB";

export const colorValueShade = (color: number, percent: number = 100): number =>
    Math.round(color * (percent / 100));

export const getColorShade = (color: HEX | RGB, percent = 0): HEX | RGB => {
    if (color.type === "hex") {
        const { red, green, blue } = hexToRGB(color).value;
        return {
            type: "hex",
            // TODO: Add rgb to hex convertor
            value: `#${colorValueShade(red, percent).toString(16)}${colorValueShade(
                green,
                percent
            ).toString(16)}${colorValueShade(blue, percent).toString(16)}`,
        };
    }
    // RGB
    return {
        type: "rgb",
        value: {
            red: colorValueShade(color.value.red, percent),
            green: colorValueShade(color.value.green, percent),
            blue: colorValueShade(color.value.blue, percent),
        },
    };
};
