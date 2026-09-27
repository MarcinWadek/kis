import { expect, test } from '@playwright/test';
import { userSessionPath } from '../playwright.config';
test.use({
  storageState: userSessionPath
});

test('test', async ({ page }) => {
  await page.goto('https://kislist.com/lists');
  await page.getByRole('button', { name: 'Pokaż powiadomienia' }).click();
  await expect (page.locator('#notifications-base').getByText('Wszystko przeczytane, wszystko ogarnięte.Masz chwilę ciszy – korzystaj!')).not.toBeVisible();
  
});