import { test, expect } from '@playwright/test';

/* Test Case 09 - Verify Login Functionality*/
test('TC 09 - Verify Login Functionality', async ({ page }) => {
  
  /*  Navigate to Wiley Online Library Page */
  await page.goto('https://onlinelibrary.wiley.com');

  /* Login */
  await page.click('text="Login"');

  /* Fill Login Credentials */
  await page.fill('#email', 'test@example.com');
  await page.fill('#password', 'password123');

  /* Click to Login */
  await page.click('#loginButton');

  /* Verify the User Login */ 
  await expect(page.locator('.user-profile')).toBeVisible();
});
