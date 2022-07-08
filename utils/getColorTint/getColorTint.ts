import { RGB, HEX } from "../../types";
import { toRGB } from "../toRGB/toRGB";

export function colorValueTint(rgbValue: number, percent = 0): number {
    const tint = rgbValue + (255 - rgbValue) * (percent / 100);
    return tint > 255 ? 255 : Math.round(tint);
}

// TODO: any color could be passed instead of only RGB
export const getColorTint = (color: HEX | RGB, percent = 0): HEX | RGB => {
    if (color.type === "hex") {
        const { red, green, blue } = toRGB(color).value;
        return {
            type: "hex",
            // TODO: Add rgb to hex convertor
            value: `#${colorValueTint(red, percent).toString(16)}${colorValueTint(
                green,
                percent
            ).toString(16)}${colorValueTint(blue, percent).toString(16)}`,
        };
    }
    // RGB
    return {
        type: "rgb",
        value: {
            red: colorValueTint(color.value.red, percent),
            green: colorValueTint(color.value.green, percent),
            blue: colorValueTint(color.value.blue, percent),
        },
    };
};
