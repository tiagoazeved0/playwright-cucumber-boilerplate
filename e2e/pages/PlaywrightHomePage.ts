// import { expect } from "@playwright/test";
// import { Given, When, Then } from "./fixtures";

// // Define the Page Object Model (POM) class
// class PlaywrightHomePage {
//   constructor(private page) {}

//   async goto() {
//     await this.page.goto("https://playwright.dev");
//   }

//   async clickLink(name: string) {
//     await this.page.getByRole("link", { name }).click();
//   }

//   async expectTitle(text: string) {
//     await expect(this.page).toHaveTitle(new RegExp(text));
//   }
// }

// // Create a fixture to instantiate the POM class
// let playwrightHomePage: PlaywrightHomePage;
// Given("I am on Playwright home page", async ({ page }) => {
//   playwrightHomePage = new PlaywrightHomePage(page);
//   await playwrightHomePage.goto();
// });

// // Use the POM methods in your test steps
// When("I click link {string}", async (_, name: string) => {
//   await playwrightHomePage.clickLink(name);
// });

// Then("I see in title {string}", async (_, text: string) => {
//   await playwrightHomePage.expectTitle(text);
// });