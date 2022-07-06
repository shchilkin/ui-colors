export interface RGBColor {
    red: number;
    green: number;
    blue: number;
}

export interface Color {
    type: "hex" | "rgb" | "hsl";
    // TODO: add HSL
    value: string | RGBColor;
}

export interface RGB extends Omit<Color, "value" | "type"> {
    type: "rgb";
    value: RGBColor;
}

export interface HEX extends Omit<Color, "value" | "type"> {
    type: "hex";
    value: string;
}

export type ColorType = RGB | HEX;
