// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 30_000,
  workers: 3, // Parallel execution (default is # of cores)
  reporter: [[ 'html', {open: 'html '}]],
  use: {
    baseURL: 'http://localhost:5500',
    headless: false,
  },
  webServer: {
    command: 'npx http-server . -p 5500',
    port: 5500,
    reuseExistingServer: !process.env.CI, // Reuse locally, start fresh in CI
    timeout: 120 * 1000, // Wait up to 2 minutes
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },


  ],
});


