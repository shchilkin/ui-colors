import { ColorType, HEX } from "../../types";

export const toHex = (color: ColorType): HEX => {
    if (color.type === "hex") return color;
    if (color.type === "rgb") {
        return {
            type: "hex",
            value: `#${
                // TODO: use more precise convertion
                // eslint-disable-next-line no-bitwise
                ((1 << 24) + (color.value.red << 16) + (color.value.green << 8) + color.value.blue)
                    .toString(16)
                    .slice(1)
            }`,
        };
    }
    throw new Error(`Bad input: ${color}`);
};
