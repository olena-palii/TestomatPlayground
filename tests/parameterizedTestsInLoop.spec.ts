import { test, expect } from '@playwright/test'

test.describe("Parameterized Tests in Loop @S49731617", () => {
    const testValues = ["APPLE", "BANANA", "ORANGE"];
    for (const testValue of testValues) {
        test(`Test 1 - ${testValue} @Tf14fa20d`, async () => {
            expect(1 + 1).toBe(2);
        });
        test(`Test 2 - ${testValue} @T14e9c507`, async () => {
            expect(1 + 1).toBe(2);
        });
    }
});