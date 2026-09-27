import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kislist.com/pl');
  await page.getByRole('link', { name: 'Zaloguj się' }).click();
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('');
  await page.getByTestId('email-input').press('Tab');
  await page.getByTestId('password-input').fill('');
  await page.getByTestId('login-button').click();
  await expect(page).toHaveURL('https://kislist.com/2fa');
  await page.context().storageState({ path: 'USER_0_SESSION_PATH' });
});