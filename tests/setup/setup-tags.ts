import test, { expect } from "@playwright/test";


test('klient', async ({ page }) => {
const tags = '@Piotr @Anna @Marcin @Michalina';
await page.goto('https://kislist.com/lists');
await page.getByRole('link', { name: 'PROJEKT REKRUTACJA' }).click();
await page.getByRole('button', { name: 'wiadomości' }).click();
await page.getByRole('textbox').fill('@Piotr');
await page.keyboard.press('Enter');
await page.getByRole('textbox').pressSequentially('@Anna');
await page.keyboard.press('Enter');
await page.getByRole('textbox').pressSequentially('@Marcin');
await page.keyboard.press('Enter');
await page.getByRole('textbox').pressSequentially('@Michalina');
await page.keyboard.press('Enter');
await page.getByRole('button', { name: 'Wyślij' }).click();
});
