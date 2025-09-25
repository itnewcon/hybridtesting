const { test, expect } = require('@playwright/test');
const { loginViaApi } = require('../utils/auth');
const path = require('path');

test('Hybrid UI + API test with token-based login', async ({ page }) => {
  // 1. Login via API and get token
  const token = await loginViaApi();

  // 2. Set token in localStorage before visiting page
  await page.goto('about:blank');
  await page.waitForTimeout(2000);

  await page.addInitScript((token) => {
    localStorage.setItem('auth_token', token);
  }, token);
  await page.waitForTimeout(2000);


  // 3. Navigate to dashboard
  const fileUrl = 'file://' + path.resolve(__dirname, '../pages/dashboard.html');
  await page.goto(fileUrl);
  await page.waitForTimeout(2000);

  // 4. Validate the user UI
  await expect(page.locator('#username')).toHaveText('John Doe');
  await page.waitForTimeout(2000);

});
