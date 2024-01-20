import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/styled/calculator');
  await page.locator('#number1').click();
  await page.locator('#number1').fill('num');
  await page.locator('#number2').click();
  await page.locator('#function').selectOption('divide');
  await page.locator('#number2').click();
  await page.locator('#number2').fill('10');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.locator('#answer')).toContainText('ERR');
});