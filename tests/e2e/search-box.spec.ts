import { test, expect } from "@playwright/test";

test("Test search box", async ({ browser }) => {
  const context = await browser.newContext();
  // Create a new page inside context.
  const page = await context.newPage();
  await page.goto("/");

  // Fill input with search text
  await page.fill("div.search-bar input", "marvel");
  // Wait until request is OK
  await page.waitForResponse(
    (response) =>
      response
        .url()
        .includes("http://localhost:3000/api/movies/search?q=marvel") &&
      response.status() === 200
  );
  // Find search results
  const searchResults = page.locator(
    "div.search-bar-results-container a.search-result"
  );

  const resultsCount = await searchResults.count();
  // There should be at least 2 results
  expect(resultsCount).toBeGreaterThanOrEqual(2);

  // Open page to see the result
  await Promise.all([
    searchResults.nth(1).click(),
    page.waitForURL(/http:\/\/localhost:3000\/tvshows\/\d+/),
  ]);
});
