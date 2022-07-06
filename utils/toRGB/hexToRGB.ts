import { HEX, RGB } from "../../types";

export const hexToRGB = (color: HEX): RGB => {
    const hexWithoutHash = color.value[0] === "#" ? color.value.slice(1) : color.value; // remove #
    if (hexWithoutHash.length === 3) {
        const parsedValues = Array.from(hexWithoutHash).map((item) => parseInt(item + item, 16));
        return {
            type: "rgb",
            value: {
                red: parsedValues[0],
                green: parsedValues[1],
                blue: parsedValues[2],
            },
        };
    }
    if (hexWithoutHash.length === 6) {
        const parsedValues = [
            hexWithoutHash[0] + hexWithoutHash[1],
            hexWithoutHash[2] + hexWithoutHash[3],
            hexWithoutHash[4] + hexWithoutHash[5],
        ].map((item) => parseInt(item, 16));
        return {
            type: "rgb",
            value: { red: parsedValues[0], green: parsedValues[1], blue: parsedValues[2] },
        };
    }
    throw new Error(`Bad color input: ${color}`);
};
