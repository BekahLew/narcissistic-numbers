const narcissistic = require('./narcissistic.js');

describe('Checks whether a number is equal to itself when each digit is raised to the total number of digits.', () => {
    test('The input 371 should return true - 3^3 + 7^3 + 1^3 = 371', () => {
        expect(narcissistic(371)).toEqual(true);
    });
    test('The input 333 should return false - 3^3 + 3^3 + 3^3 = 81', () => {
        expect(narcissistic(333)).toEqual(false);
    });
    test('A single digit number should always return true - 4^1 = 4', () => {
        expect(narcissistic(4)).toEqual(true);
    });
    test('Negative numbers will always be false. The digits split into [ "-", "3", "7", "1" ]', () => {
        expect(narcissistic(-371)).toEqual(false);
    });
});