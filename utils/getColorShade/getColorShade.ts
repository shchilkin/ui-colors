import { HEX, RGB } from "../../types";
import { toRGB } from "../toRGB";
import { toHex } from "../toHEX";

export const colorValueShade = (color: number, percent: number = 100): number =>
    Math.round(color * (1 - percent / 100));

export const getColorShade = (color: HEX | RGB, percent = 0): HEX | RGB => {
    if (color.type === "hex") {
        const { red, green, blue } = toRGB(color).value;
        return toHex({
            type: "rgb",
            value: {
                red: colorValueShade(red, percent),
                green: colorValueShade(green, percent),
                blue: colorValueShade(blue, percent),
            },
        });
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
