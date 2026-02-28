import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  outputDir: 'playwright-results',
  fullyParallel: true,
  workers: 4,
  timeout: 300000,
  globalTimeout: 3600000,
  retries: process.env.CI ? 1 : 0,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['@testomatio/reporter/playwright', {
      apiKey: process.env.TESTOMATIO,
    }]
  ],
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-all-retries',
  },
  expect: {
    timeout: 5000,
  },
})