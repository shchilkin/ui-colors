/**
 * Returns a number in range between lower and upper bounds including the bounds numbers
 *
 * @param {number} minimum - A lower bound (default: 0)
 * @param {number} maximum - An upper bound (default: 255)
 * @return {number}        - in range between lower and upper bounds
 */
export const getRandomNumber = (minimum = 0, maximum = 255): number =>
    Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
