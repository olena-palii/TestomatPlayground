import { deTest, deExpect } from '../deTest'

type FruitsType = "apple" | "banana" | "orange" | "grape" | "kiwi";

deTest.describe("Parameterized Tests in Loop @S49731617", () => {
    const testValues1: Array<FruitsType> = ["apple", "banana", "orange", "grape", "kiwi"];
    for (const testValue of testValues1) {
        const fruitName = testValue.toUpperCase();
        deTest(`API 1.0 - TestA - ${fruitName} @Tf14fa20d`, async () => {
            deExpect(1 + 1).toBe(2);
        });
        deTest(`API 1.0 - TestB - ${fruitName} @T14e9c507`, async () => {
            deExpect(1 + 1).toBe(2);
        });
    }
    const testValues2 = ["CAR", "BIKE", "BUS"];
    for (const testValue of testValues2) {
        deTest(`API 2.0 - TestA - ${testValue} @Tfc05ed0d`, async () => {
            deExpect(1 + 1).toBe(2);
        });
        deTest(`API 2.0 - TestB - ${testValue} @T54cb7790`, async () => {
            deExpect(1 + 1).toBe(2);
        });
    }
});