import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kislist.com/list-preview/268ioxIozPw1rIzO468weJ6MTYmUrPQmPNRM?lang=pl');
  await page.locator('#item_MDQT1SHTXGVQuvSe').getByRole('button', { name: 'Napisz komentarz' }).click();
  await page.getByRole('textbox').fill('komentarz testowy');
  await page.getByRole('button', { name: 'Wyślij' }).click();
});