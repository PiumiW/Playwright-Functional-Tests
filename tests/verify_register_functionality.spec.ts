import { test, expect } from '@playwright/test';

/* Test Case 09 - Verify Login Functionality*/
  test('TC 10 - Verify Register Functionality', async ({ page }) => {

    /*  Navigate to Wiley Online Library Page */
    await page.goto('https://onlinelibrary.wiley.com');

    /* Click Register */ 
    await page.click('text="Register"');

    /* Click 'Sign in with Google' to sign in to the Wiley Online Library */ 
    await page.click('text="Sign in with Google"');

    /* Successfully Register */ 
    await expect(page.locator('.registration-success')).toBeVisible();
  });
