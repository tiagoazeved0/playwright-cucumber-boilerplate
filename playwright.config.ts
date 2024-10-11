import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "e2e/tests/features/*.feature",
  steps: "e2e/tests/features/steps/*.ts",
});

export default defineConfig({
  testDir,
  reporter: [
    ['html'],
    ['junit', { outputFile: 'playwright-report/results.xml' }]
  ],
  use: {
    screenshot: "on",
    trace: "on",
    video: "on-first-retry",
  },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  timeout: 30000,
  forbidOnly: !!process.env.CI,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
