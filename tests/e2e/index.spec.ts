import { test, expect } from "@playwright/test";

/* test("Test navigation pages", async ({ page }) => {
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
}); */

test('Test color mode switcher', async ({ page }) => {
    // Go to main page
    await page.goto('/', { waitUntil: 'networkidle' });
    
    // Click the color mode switcher button
    await page.click('button.color-mode-switcher');
    
    // Get the current theme by checking the class on the <html> tag
    const initialHtmlClass = await page.getAttribute('html', 'class');
  
    // Click the color mode switcher button
    await page.click('button.color-mode-switcher');
  
    // Wait for the theme change to take effect
    await page.waitForTimeout(500); // Adjust based on actual UI behavior
  
    // Get the updated class attribute
    const updatedHtmlClass = await page.getAttribute('html', 'class');
  
    // Check if the theme has toggled between light and dark
    if (initialHtmlClass?.includes('light')) {
      // If the initial theme was light, check for dark
      expect(updatedHtmlClass).toContain('dark');
    } else if (initialHtmlClass?.includes('dark')) {
      // If the initial theme was dark, check for light
      expect(updatedHtmlClass).toContain('light');
    } 
  });


