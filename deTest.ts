import { test, expect } from '@playwright/test';

type DeFixtures = {
    deLog: {
        logStart: () => void;
        logFinish: () => void;
    };
    deWaiter: {
        waitSeconds: (n: number) => Promise<void>;
        waitMinutes: (n: number) => Promise<void>;
    };
};

export const deTest = test.extend<DeFixtures>({
    deWaiter: async ({}, use) => {
        await use({
            waitSeconds: (n: number) => new Promise(resolve => setTimeout(resolve, n * 1000)),
            waitMinutes: (n: number) => new Promise(resolve => setTimeout(resolve, n * 60 * 1000)),
        });
    },
    deLog: async ({ }, use, testInfo) => {
        await use({
            logStart: () => console.log(`[${new Date().toISOString()}] "${testInfo.title}"started`),
            logFinish: () => console.log(`[${new Date().toISOString()}] "${testInfo.title}" finished`),
        });
    },
});

export const deExpect = expect.extend({});
