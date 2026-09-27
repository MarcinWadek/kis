import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';
import { userSessionPathAnna, userSessionPathMarcin, userSessionPathMarcinW, userSessionPathMichalina, userSessionPathPiotr } from '../playwright.config';
const comment = faker.lorem.words(2);


test('SETUP', async ({ page }) => {
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
});

test.describe('MarcinW', () => {
  test.use({
    storageState: userSessionPathMarcinW,
  });
  test('sprawdza powiadomienie', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment)
    ).toBeVisible();
  });
});
test.describe('Piotr', () => {
  test.use({
    storageState: userSessionPathPiotr,
  });
  test('sprawdza powiadomienie', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment)
    ).toBeVisible();
  });
});
test.describe('Anna', () => {
  test.use({
    storageState: userSessionPathAnna,
  });
  test('sprawdza powiadomienie', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment)
    ).toBeVisible();
  });
});
test.describe('Michalina', () => {
  test.use({
    storageState: userSessionPathMichalina,
  });
  test('sprawdza powiadomienie', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment)
    ).toBeVisible();
  });
});
test.describe('Marcin', () => {
  test.use({
    storageState: userSessionPathMarcin,
  });
  test('sprawdza powiadomienie', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment)
    ).toBeVisible();
  });
});