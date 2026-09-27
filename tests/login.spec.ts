
import { expect, test } from '@playwright/test';
import { env } from '../env';
import { userSessionPathAnna, userSessionPathMarcin, userSessionPathMarcinW, userSessionPathMichalina, userSessionPathPiotr } from '../playwright.config';

test('login MarcinW', async ({ page }) => {
  await page.goto('https://kislist.com/pl');
  await page.getByRole('link', { name: 'Zaloguj się' }).click();
  await page.getByTestId('email-input').fill(env.kissMarcinW);
  await page.getByTestId('password-input').fill(env.kissPassword);
  await page.getByTestId('login-button').click();
  await expect(page).toHaveURL('https://kislist.com/lists', {
    timeout: 30_000,
  });
  await page.context().storageState({ path: userSessionPathMarcinW });
});
test('Login Piotr', async ({ page }) => {
  await page.goto('https://kislist.com/pl');
  await page.getByRole('link', { name: 'Zaloguj się' }).click();
  await page.getByTestId('email-input').fill(env.kissPiotr);
  await page.getByTestId('password-input').fill(env.kissPassword);
  await page.getByTestId('login-button').click();
  await expect(page).toHaveURL('https://kislist.com/lists', {
    timeout: 30_000,
  });
  await page.context().storageState({ path: userSessionPathPiotr });
    });

test('Login Anna', async ({ page }) => {
  await page.goto('https://kislist.com/pl');
  await page.getByRole('link', { name: 'Zaloguj się' }).click();
  await page.getByTestId('email-input').fill(env.kissAnna);
  await page.getByTestId('password-input').fill(env.kissPassword);
  await page.getByTestId('login-button').click();
  await expect(page).toHaveURL('https://kislist.com/lists', {
    timeout: 30_000,
  });
  await page.context().storageState({ path: userSessionPathAnna });
});
test('Login Michalina', async ({ page }) => {
  await page.goto('https://kislist.com/pl');
  await page.getByRole('link', { name: 'Zaloguj się' }).click();
  await page.getByTestId('email-input').fill(env.kissMichalina);
  await page.getByTestId('password-input').fill(env.kissPassword);
  await page.getByTestId('login-button').click();
  await expect(page).toHaveURL('https://kislist.com/lists', {
    timeout: 30_000,
  });
  await page.context().storageState({ path: userSessionPathMichalina });
});
test('Login Marcin', async ({ page }) => {
  await page.goto('https://kislist.com/pl');
  await page.getByRole('link', { name: 'Zaloguj się' }).click();
  await page.getByTestId('email-input').fill(env.kissMarcin);
  await page.getByTestId('password-input').fill(env.kissPassword);
  await page.getByTestId('login-button').click();
  await expect(page).toHaveURL('https://kislist.com/lists', {
    timeout: 30_000,
  });
  await page.context().storageState({ path: userSessionPathMarcin });
});
