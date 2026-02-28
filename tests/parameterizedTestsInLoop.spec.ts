import { test, expect } from '@playwright/test'

type FruitsType = "apple" | "banana" | "orange";

test.describe("Parameterized Tests in Loop @S49731617", () => {
    const testValues1: Array<FruitsType> = ["apple", "banana", "orange"];
    for (const testValue of testValues1) {
        const fruitName = testValue.toUpperCase();
        test(`API 1.0 - TestA - ${fruitName} @Tf14fa20d`, async () => {
            expect(1 + 1).toBe(2);
        });
        test(`API 1.0 - TestB - ${fruitName} @T14e9c507`, async () => {
            expect(1 + 1).toBe(2);
        });
    }
    const testValues2 = ["CAR", "BIKE", "BUS"];
    for (const testValue of testValues2) {
        test(`API 2.0 - TestA - ${testValue} @Tfc05ed0d`, async () => {
            expect(1 + 1).toBe(2);
        });
        test(`API 2.0 - TestB - ${testValue} @T54cb7790`, async () => {
            expect(1 + 1).toBe(2);
        });
    }
});