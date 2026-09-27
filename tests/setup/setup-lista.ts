import test from "@playwright/test";
import { comment } from "../test-data";


test('Komenatrz klienta do listy', async ({ page }) => {
  await page.goto('https://kislist.com/list-preview/268ioxIozPw1rIzO468weJ6MTYmUrPQmPNRM?lang=pl');
  await page.getByRole('button', { name: 'Napisz komentarz' }).nth(3).click();
    await page.getByRole('textbox').fill(comment);
  await page.getByRole('button', { name: 'Wyślij' }).click();
});

