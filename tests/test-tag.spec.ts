import { expect, test } from '@playwright/test';
import { userSessionPath } from '../playwright.config';
import { faker } from '@faker-js/faker';

test.use({
  storageState: userSessionPath
});

test('test', async ({ page }) => {
await test.step('weryfikacja powiadomienia', async () => {
const tags = '@Piotr @Anna @Marcin @Michalina';
await page.goto('https://kislist.com/lists');
await page.getByRole('link', { name: 'PROJEKT REKRUTACJA' }).click();
await page.getByRole('button', { name: 'wiadomości' }).click();
await page.locator('#project-comments-body').getByRole('textbox').fill(tags);
await page.getByRole('button', { name: 'Wyślij' }).click();
await page.locator('.kis-dialog-head-cta > .kis-icon').click();
});

await test.step('weryfikacja powiadomienia', async () => {
  await page.goto('https://kislist.com/lists');
  await page.getByRole('button', { name: 'Pokaż powiadomienia' }).click();});
});