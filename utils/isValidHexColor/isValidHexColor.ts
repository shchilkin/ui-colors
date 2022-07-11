import { ColorType } from "../../types";

export function isValidHexColor(color: ColorType): boolean {
    const hexRegularExpression = /^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/;
    if (color.type === "hex") return hexRegularExpression.test(color.value);
    return false;
}
