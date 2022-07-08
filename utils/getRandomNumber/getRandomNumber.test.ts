import { getRandomNumber } from "./getRandomNumber";

describe("getRandomNumber works correctly", () => {
    test("Function works correctly with default arguments: 0/255", () => {
        const randomNumber = getRandomNumber();
        expect(randomNumber).toBeGreaterThanOrEqual(0);
        expect(randomNumber).toBeLessThan(255);
    });

    test("Function works correctly with custom range: 15/400", () => {
        const lowerBound = 15;
        const upperBound = 400;
        const randomNumber = getRandomNumber(lowerBound, upperBound);
        expect(randomNumber).toBeGreaterThanOrEqual(lowerBound);
        expect(randomNumber).toBeLessThan(upperBound);
    });
    test("Function works correctly with custom range: 15/400", () => {
        const lowerBound = 15;
        const upperBound = 400;
        const randomNumber = getRandomNumber(lowerBound, upperBound);
        expect(randomNumber).toBeGreaterThanOrEqual(lowerBound);
        expect(randomNumber).toBeLessThan(upperBound);
    });
    //    TODO: add negative numbers test
});
