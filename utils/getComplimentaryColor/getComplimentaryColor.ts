import { ColorType } from "../../types";
import { hexToRGB } from "../toRGB/hexToRGB";
import { isValidHexColor } from "../isValidHexColor";

// TODO: Add meaningful name - functions gets complimentary color code value
const hexDigitVal = (hexDigit: number): string => {
    const processing = 255 - hexDigit;
    return processing.toString(16).length === 2
        ? processing.toString(16)
        : `${processing.toString(16) + processing.toString(16)}`;
};

export function getComplimentaryColor(color: ColorType): ColorType {
    // hex case
    if (color.type === "hex") {
        const rgbColor = hexToRGB(color);
        const processedValues = `#${hexDigitVal(rgbColor.value.red)}${hexDigitVal(
            rgbColor.value.green
        )}${hexDigitVal(rgbColor.value.blue)}`;

        if (isValidHexColor(processedValues))
            return {
                type: color.type,
                value: processedValues,
            };
    }
    /* Ideally this code is unreachable - serves for debugging purposes in case of calculation error */
    throw new Error(`Bad input: ${color}`);
}
