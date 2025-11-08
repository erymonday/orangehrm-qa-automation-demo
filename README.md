
# OrangeHRM Playwright Demo

This repository is a minimal Playwright + TypeScript E2E test framework and demo for the OrangeHRM demo site.

## What's included
- Test cases (Excel) stored alongside the repo.
- Playwright config supporting Chromium, Firefox, and WebKit.
- Example tests covering Login and Search (valid and negative cases).
- CI-friendly retries and HTML reporting.

## How to run (local)
1. Install dependencies:
```bash
npm install
npx playwright install
```
2. Run tests:
```bash
npm test
```
To run headed:
```bash
npm run test:headed
```

## Design rationale
- **Cross-browser**: `projects` include Chromium, Firefox, WebKit.
- **Modular**: tests live in `tests/`. Add page objects in `src/pages/`.
- **CI/CD**: Use `npx playwright test --reporter=html` in GitHub Actions or Jenkins. Retries enabled when `CI` env var is set.
- **Configurable**: baseURL and timeouts defined in `playwright.config.ts`.
- **Reporting**: Built-in Playwright HTML reporter and traces for failures.

## Extending the framework
- Add Page Object Model under `src/pages/`.
- Add API tests using Playwright's `request` fixture or a separate `tests/api` folder.
- Integrate performance checks with Playwright tracing or a dedicated tool.



## CI (GitHub Actions)

A sample workflow `.github/workflows/ci.yml` is included. On push or PR to `main` the workflow:

- checks out code
- installs Node and Playwright browsers
- runs tests
- uploads the Playwright HTML report as an artifact

Adjust node version and workflow triggers as needed.
