import { expect, test } from '@playwright/test';
import { userSessionPathAnna, userSessionPathMarcin, userSessionPathMarcinW, userSessionPathMichalina, userSessionPathPiotr } from '../playwright.config';
import { comment } from './test-data';



test.describe('MarcinW', () => {
  test.use({
    storageState: userSessionPathMarcinW,
  });
  test('TC-06 Marcin W (administrator) widzi komentarz w propozycji', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment).first()
    ).toBeVisible();
  });
});
test.describe('Piotr', () => {
  test.use({
    storageState: userSessionPathPiotr,
  });
  test('TC-07 Piotr (użytkownik) widzi komentarz w propozycji', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment).first()
    ).toBeVisible();
  });
});
test.describe('Anna', () => {
  test.use({
    storageState: userSessionPathAnna,
  });
  test('TC-08 Anna (użytkownik) widzi komentarz w propozycji', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment).first()
    ).toBeVisible();
  });
});
test.describe('Michalina', () => {
  test.use({
    storageState: userSessionPathMichalina,
  });
  test('TC-09 Michalina (użytkownik) widzi komentarz w propozycji', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment).first()
    ).toBeVisible();
  });
});
test.describe('Marcin', () => {
  test.use({
    storageState: userSessionPathMarcin,
  });
  test('TC-10 Marcin (użytkownik) widzi komentarz w propozycji', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText(comment).first()
    ).toBeVisible();
  });
}); 
