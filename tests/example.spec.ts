/*import { test, expect } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
}); */

//example.spec.ts
import { test, expect } from '@playwright/test';
import { ExampleClass } from '../pages/example.page';
test('Navigate to Google', async ({ page }) => {
  await page.goto('https://google.com/');
  const url = await page.url();
  expect(url).toContain('google');
});
test('Search for Playwright', async ({ page }) => {
  await page.goto('https://google.com/');
  let exampletest = new ExampleClass(page);
  await exampletest.typeSearchText();
  await exampletest.pressEnter();
  const text = await exampletest.searchResult();
  await console.log(text);
  expect(text).toContain('Playwright: Fast and reliable');
});