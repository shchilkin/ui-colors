import { ColorType } from "../../types";
import { getLuminance } from "../getLuminance";
import { getColorShade } from "../getColorShade";
import { getColorTint } from "../getColorTint";

export function getFontColor<T extends ColorType>(color: T): T {
    return getLuminance(color) > 0.5
        ? (getColorShade(color, 90) as T)
        : (getColorTint(color, 90) as T);
}
