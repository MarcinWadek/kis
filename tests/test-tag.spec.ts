import { expect, test } from '@playwright/test';
import { userSessionPathAnna, userSessionPathMarcin, userSessionPathMarcinW, userSessionPathMichalina, userSessionPathPiotr } from '../playwright.config';


// TODO: to be enhanced, tags input is a bit flaky
test.describe('MarcinW', () => {
  test.use({
    storageState: userSessionPathMarcinW,
  });
  test('TC-11 Marcin W dostaje powiadomienie kiedy jest otagowany', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText("@Marcin Wądek").first()
    ).toBeVisible();
  });
});
test.describe('Piotr', () => {
  test.use({
    storageState: userSessionPathPiotr,
  });
  test('TC-12 Piotr dostaje powiadomienie kiedy jest otagowany', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText("@Piotr").first()
    ).toBeVisible();
  });
});
test.describe('Anna', () => {
  test.use({
    storageState: userSessionPathAnna,
  });
  test('TC-13 Anna dostaje powiadomienie kiedy jest otagowana', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText("@Anna").first()
    ).toBeVisible();
  });
});
test.describe('Michalina', () => {
  test.use({
    storageState: userSessionPathMichalina,
  });
  test('TC-14 Michalina dostaje powiadomienie kiedy jest otagowana', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText("@Michalina").first()
    ).toBeVisible();
  });
});
test.describe('Marcin', () => {
  test.use({
    storageState: userSessionPathMarcin,
  });
  test('TC-15 Marcin nie dostaje powiadomienie kiedy nie jest otagowany', async ({ page }) => {
    await page.goto('https://kislist.com/lists');
    await page
      .getByRole('button', { name: 'Pokaż powiadomienia' })
      .click();
    await expect(
      page.locator('#notifications-base').getByText('Wszystko przeczytane,')
    ).toBeVisible();
  });
});
