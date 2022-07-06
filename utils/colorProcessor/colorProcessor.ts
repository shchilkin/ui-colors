import { Color } from "../../types";
import { hexToRGB } from "../toRGB/hexToRGB";

interface colorManipulationActions {}

export const colorProcessor = (color: Color, actions: colorManipulationActions): Color => {
    console.log(color, actions);
    // TODO: Step one - convert to RGB
    const { red, green, blue } = hexToRGB(color);

    // TODO: Create convertor

    // TODO: Step two - Process depening on needs
    return { type: "hex", value: "#FFF" };
};
