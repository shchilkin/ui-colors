/**
 * * Check is hex color valid
 * @param color {string} a hexadecimal triplet we want to check
 * @returns {boolean} True or False
 * */
export function isValidHexColor(color: string): boolean {
    const hexRegularExpression = /^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/;
    return hexRegularExpression.test(color);
}
