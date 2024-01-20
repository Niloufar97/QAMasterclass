import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/styled/calculator');
  await page.getByRole('heading', { name: 'Simple Calculator' }).click();
});