# Testomat Playground

A project for reproducing and debugging [Testomat.io](https://testomat.io) bugs, built with [Playwright](https://playwright.dev/).

## Prerequisites

- Node.js 22+
- A [Testomat.io](https://testomat.io) account

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```
2. Copy the example env file and replace `tstmt_xxx` with your actual token

   ```bash
   cp .env.example .env
   ```

3. Connect GitHub to Testomat.io for CI integration:

   * [GitHub CI setup guide](https://docs.testomat.io/integrations/continuous-integration/github/)
   * Enable grep, run and testomatio input variables

## Usage

### Run Playwright tests locally

```bash
npm run test
```

### Sync tests with Testomat.io

```bash
npm run sync
```
