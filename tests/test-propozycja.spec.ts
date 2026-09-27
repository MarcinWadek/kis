import { expect, test } from '@playwright/test';
import { userSessionPath } from '../playwright.config';
import { faker } from '@faker-js/faker';

test.use({
  storageState: userSessionPath
});
test('test', async ({ page }) => {
  const comment = faker.lorem.words(2);
  await test.step('Login', async () => {
  await page.goto('https://kislist.com/lists');
  await page.getByRole('link', { name: 'PROJEKT REKRUTACJA' }).click();
  await page.getByRole('link', { name: 'Listy', exact: true }).click();
  await page.getByRole('link', { name: 'KOSZTORYS' }).click();
  await page.locator('.form-checkbox').first().click();
  await expect (page.locator('.my-auto > div:nth-child(3) > svg > use')).toBeVisible();
  await page.getByTitle('Utwórz propozycję dla klienta').click();
  await expect (page.getByRole('textbox', { name: 'Adres(y) email' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Adres(y) email' }).clear();
  await page.getByRole('textbox', { name: 'Adres(y) email' }).fill("marcinwadek+7@gmail.com");
  await expect (page.getByRole('textbox', { name: 'Adres(y) email' })).toHaveValue("marcinwadek+7@gmail.com");
  await page.getByRole('textbox', { name: 'Tytuł np: "Propozycja wyposaż' }).fill('tytul PW');
  await page.getByRole('button', { name: 'Wyślij' }).click();
});
await test.step('klient', async () => {
  await page.goto('https://kislist.com/proposal/preview/YoseKpqt75yBAoO5craTHOE24dBUHTYtL6LX?lang=pl&rk=jCuWkgJJDmJXZlg9Ex2bM8VAVJVwvZqA');
  await page.locator('#item_MDQT1SHTXGVQuvSe').getByRole('button', { name: 'Napisz komentarz' }).click();
  await page.getByRole('textbox').fill(comment);
  await page.getByRole('button', { name: 'Wyślij' }).click();
});
await test.step('weryfikacja powiadomienia', async () => {
  await page.goto('https://kislist.com/lists');
  await page.getByRole('button', { name: 'Pokaż powiadomienia' }).click();
  await expect (page.locator('#notifications-base').getByText(comment)).toBeVisible();
});
});