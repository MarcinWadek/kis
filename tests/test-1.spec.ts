import { test } from '@playwright/test';
import { userSessionPath } from '../playwright.config';

test.use({
  storageState: userSessionPath
});

test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'PROJEKT REKRUTACJA' }).click();
  await page.getByRole('link', { name: 'Listy', exact: true }).click();
  await page.getByRole('link', { name: 'KOSZTORYS' }).click();
  await page.locator('.initials-circle > svg').first().click();
  await page.locator('div').filter({ hasText: 'Zmień ustawienia udostę' }).first().click();
  await page.getByRole('textbox', { name: 'Adres(y) email' }).fill('marcinwadek+1@gmail.com');
  await page.getByRole('button', { name: 'Wyślij i udostępnij' }).click();
  await page.getByTitle('Twój profil').nth(1).click();
  await page.getByRole('link', { name: 'Wyloguj się' }).click();
});
