
import { expect, test } from '@playwright/test';
import { userSessionPath } from '../playwright.config';
import { env } from '../env';

test('test', async ({ page }) => {
  await page.goto('https://kislist.com/pl');
  await page.getByRole('link', { name: 'Zaloguj się' }).click();
  await page.getByTestId('email-input').fill(env.kissEmail);
  await page.getByTestId('password-input').fill(env.kissPassword);
  await page.getByTestId('login-button').click();
  await expect(page).toHaveURL('https://kislist.com/lists', {
    timeout: 30_000,
  });
  await page.context().storageState({ path: userSessionPath });
});
