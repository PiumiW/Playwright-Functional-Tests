import { test, expect } from '@playwright/test';

test.describe('Wiley Online Library Functional Tests', () => {

  /* Test Case 01 - Verify Homepage Load Of Wiley Online Library */
  test('TC 01 - Verify Homepage Load Of Wiley Online Library', async ({ page }) => {
    
    /* Navigate to the Wiley Online Library Page */
    await page.goto('https://onlinelibrary.wiley.com'); //Fixed URL

    /* Verify the page URL - Fixed URL */
    await expect(page).toHaveURL('https://onlinelibrary.wiley.com/');

    /* Verify the visibility of specific elements */
    await expect(page.locator('nav')).toBeVisible(); // Check if the navigation bar is visible
    await expect(page.locator('input[type="search"]')).toBeVisible(); // Check if the search input is visible
    await expect(page.locator('section.featured')).toBeVisible(); // Check if the featured section is visible
  });
});
