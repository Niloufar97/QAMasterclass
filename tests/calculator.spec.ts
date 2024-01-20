import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/styled/calculator');
  await page.locator('#number1').click();
  await page.locator('#number1').fill('5');
  await page.locator('#number2').click();
  await page.locator('#number2').fill('6');
  await page.getByRole('button', { name: 'Calculate' }).click();
  await expect(page.locator('#answer')).toContainText('11');
});