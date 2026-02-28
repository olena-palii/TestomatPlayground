import { test, expect } from '@playwright/test'

test.describe.skip("Skipped Tests in Run @Sf57254d0", () => {
    test('Test 1 (10 seconds) @Tc46ac865', async () => {
        console.log('Test 1 (10 seconds) started: ' + new Date().toLocaleString());
        await new Promise(resolve => setTimeout(resolve, 10000));
        expect(1 + 1).toBe(2)
        console.log('Test 1 (10 seconds) finished: ' + new Date().toLocaleString());
    });
    test('Test 2 (110 seconds) @T749e3932', async () => {
        console.log('Test 2 (110 seconds) started: ' + new Date().toLocaleString());
        await new Promise(resolve => setTimeout(resolve, 110000));
        expect(1 + 1).toBe(2)
        console.log('Test 2 (110 seconds) finished: ' + new Date().toLocaleString());
    });
    test('Test 3 (120 seconds) @T9684852f', async () => {
        console.log('Test 3 (120 seconds) started: ' + new Date().toLocaleString());
        await new Promise(resolve => setTimeout(resolve, 120000));
        expect(1 + 1).toBe(2)
        console.log('Test 3 (120 seconds) finished: ' + new Date().toLocaleString());
    });
    test('Test 4 (150 seconds) @Tafbe9b00', async () => {
        console.log('Test 4 (150 seconds) started: ' + new Date().toLocaleString());
        await new Promise(resolve => setTimeout(resolve, 150000));
        expect(1 + 1).toBe(2)
        console.log('Test 4 (150 seconds) finished: ' + new Date().toLocaleString());
    });
});