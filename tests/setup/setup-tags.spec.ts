import test, { expect, type Page } from '@playwright/test';

async function tagUser(page: Page, userName: string) {
  const editor = page.locator('[contenteditable="true"][role="textbox"]');
  await editor.click();
  await editor.pressSequentially('@', { delay: 500 });
  await expect(editor.locator('.suggestion')).toBeVisible();
  const option = page.getByText(userName, { exact: true });
  await expect(option).toBeVisible({ timeout: 5000 });
  await option.click();
}
// TODO: to be enhanced, tags input is a bit flaky
test('Tagi członków zespołu', async ({ page }) => {
  await page.goto('https://kislist.com/lists');
  await page.getByRole('link', { name: 'PROJEKT REKRUTACJA' }).click();
  await page.locator('button.dashboard-sidebar-item').first().click();

  await tagUser(page, 'Piotr');
  await tagUser(page, 'Anna');
  await tagUser(page, 'Marcin');
  await tagUser(page, 'Michalina');

  await page.getByRole('button', { name: 'Wyślij' }).click();
});
