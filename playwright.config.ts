import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "features/*.feature",
  steps: "features/steps/*.ts",
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter("junit", {
      outputFile: "playwright-report/report.xml",
      suiteName: "My Suite",
    }),
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
