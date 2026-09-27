import test from "@playwright/test";
import { comment } from "../test-data";


test('Komentarz klienta do propozycji', async ({ page }) => {
  await page.goto('https://kislist.com/proposal/preview/YoseKpqt75yBAoO5craTHOE24dBUHTYtL6LX?lang=pl&rk=jCuWkgJJDmJXZlg9Ex2bM8VAVJVwvZqA');
  await page.locator('#item_MDQT1SHTXGVQuvSe').getByRole('button', { name: 'Napisz komentarz' }).click();
  await page.getByRole('textbox').fill(comment);
  await page.getByRole('button', { name: 'Wyślij' }).click();
});

