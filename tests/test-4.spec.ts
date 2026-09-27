import { expect, test } from '@playwright/test';
import { userSessionPath } from '../playwright.config';

test.use({
  storageState: userSessionPath
});

test('test', async ({ page }) => {
await test.step('Login', async () => {
  await page.goto('https://kislist.com/lists');
  await page.getByRole('link', { name: 'PROJEKT REKRUTACJA' }).click();
  await page.getByRole('link', { name: 'Listy', exact: true }).click();
  await page.getByRole('link', { name: 'KOSZTORYS' }).click();
  await page.locator('.initials-circle > svg').first().click();
  await page.locator('div').filter({ hasText: 'Zmień ustawienia udostę' }).first().click();
  await page.getByRole('textbox', { name: 'Adres(y) email' }).fill('marcinwadek+1@gmail.com');
  await page.getByRole('button', { name: 'Wyślij i udostępnij' }).click();
  await page.getByTitle('Twój profil').nth(1).click();
});
await test.step('klient', async () => {
  await page.goto('https://kislist.com/list-preview/268ioxIozPw1rIzO468weJ6MTYmUrPQmPNRM?lang=pl');
  await page.locator('#item_MDQT1SHTXGVQuvSe').getByRole('button', { name: 'Napisz komentarz' }).click();
  await page.getByRole('textbox').fill('komentarz testowy PW');
  await page.getByRole('textbox').press('ControlOrMeta+c');
  await page.getByRole('button', { name: 'Wyślij' }).click();
});
await test.step('weryfikacja powiadomienia', async () => {
  await page.goto('https://kislist.com/lists');
  await page.getByRole('button', { name: 'Pokaż powiadomienia' }).click();
  await expect (page.locator('#notifications-base').getByText('Wszystko przeczytane, wszystko ogarnięte.Masz chwilę ciszy – korzystaj!')).not.toBeVisible();
});
});