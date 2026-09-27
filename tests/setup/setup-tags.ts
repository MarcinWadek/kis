import test, { expect } from "@playwright/test";

test('Tagi członków zespołu', async ({ page }) => {
  await page.goto('https://kislist.com/lists');
  await page.getByRole('link', { name: 'PROJEKT REKRUTACJA' }).click();
  await page.locator('button.dashboard-sidebar-item').first().click();

  const textbox = page.getByRole('textbox');

  await textbox.pressSequentially('@Piotr');
  await page.keyboard.press('Enter');
  await expect(textbox).toContainText('@Piotr');

  await textbox.pressSequentially('@Anna');
  await page.keyboard.press('Enter');
  await expect(textbox).toContainText('@Anna');

  await textbox.pressSequentially('@Marcin');
  await page.keyboard.press('Enter');
  await expect(textbox).toContainText('@Marcin');

  await textbox.pressSequentially('@Michalina');
  await page.keyboard.press('Enter');
  await expect(textbox).toContainText('@Michalina');

  await page.getByRole('button', { name: 'Wyślij' }).click();
});