import { test, expect } from "@playwright/test";

test("Test navigation pages", async ({ page }) => {
  // Go to main page
  await page.goto("/", { waitUntil: "networkidle" });
  // Open TV shows page
  await page.click("a.navigation-2");
  expect(page.url()).toBe("http://localhost:3000/tvshows");
  // Go back to home page
  await page.click("a.navigation-1");
  expect(page.url()).toBe("http://localhost:3000/");
  // Go to Genres page with all param
  await page.click("a.navigation-3");
  expect(page.url()).toBe("http://localhost:3000/genres?genre=All");
  // Go back to home page
  await page.click("a.navigation-1");
  expect(page.url()).toBe("http://localhost:3000/");
});
