import { ColorType, RGB } from "../../types";
import { toRGB } from "../toRGB";
import { toHex } from "../toHEX";

export function getComplimentaryColor<T extends ColorType>(color: T): T {
    if (color.type === "hex") {
        const rgbColor = toRGB(color);
        const complimentaryRGB: RGB = {
            type: "rgb",
            value: {
                red: 255 - rgbColor.value.red,
                green: 255 - rgbColor.value.green,
                blue: 255 - rgbColor.value.blue,
            },
        };
        return toHex(complimentaryRGB) as T;
    }
    if (color.type === "rgb") {
        const rgbColor: RGB = {
            type: "rgb",
            value: {
                red: 255 - color.value.red,
                green: 255 - color.value.green,
                blue: 255 - color.value.blue,
            },
        };
        return rgbColor as T;
    }
    throw new Error(`Bad color input: ${color}`);
}
