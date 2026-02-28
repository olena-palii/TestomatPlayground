# Testomat Playground

A project for experimenting with [Testomat.io](https://testomat.io), built with [Playwright](https://playwright.dev/).

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
   * Add PAT as GH_TOKEN to GitHub repository > Settings > Secret and variables > Actions > Repository secrets
   * Enable grep, run and testomatio input variables

## Usage

### Sync tests with Testomat.io

```bash
npm run sync
```

### Run Playwright tests locally

```bash
npm run test
```

### Run tests locally and push results to Testomat

```bash
npm run test-run
```
