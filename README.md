# KIS-ATF

KIS Automated Testing Framework built with Playwright.

## Setup

```bash
npm install
npx playwright install chromium
```

## Environment variables

Copy `.env.example` to `.env.qa` and set the values for your test account. The
default environment is `qa`; Playwright loads `.env.qa` before the config and
tests run. Environment variables already provided by the shell or CI take
precedence over values in the file.

To use another environment file, set `TEST_ENV` before running Playwright:

PowerShell:

```powershell
$env:TEST_ENV = "staging"
npm test
```

The corresponding file is `.env.staging`.

## Run tests

```bash
npm test
```

To run tests with the browser visible:

```bash
npm run test:headed
```
