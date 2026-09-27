import { expect, test } from '@playwright/test';
import { userSessionPathAnna, userSessionPathMarcin, userSessionPathMarcinW, userSessionPathMichalina, userSessionPathPiotr } from '../playwright.config';
import { comment } from './test-data';



test.describe('MarcinW', () => {
  test.use({
    storageState: userSessionPathMarcinW,
  });
  test(' Marcin W (administrator) widzi komentarz na liście', async ({ page }) => {
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
  test('Piotr (użytkownik) widzi komentarz na liście', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment)
    ).toBeVisible();
});
test.describe('Anna', () => {
  test.use({
    storageState: userSessionPathAnna,
  });
  test('Anna (użytkownik) widzi komentarz na liście', async ({ page }) => {
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
  test('Michalina (użytkownik) widzi komentarz na liście', async ({ page }) => {
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
  test('Marcin (użytkownik) widzi komentarz na liście', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment)
    ).toBeVisible();
  });
});
});