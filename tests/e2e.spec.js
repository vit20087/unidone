import {test, expect} from "@playwright/test";
import path from "path";

test('Перевірка main сторінки UniDone',async ({page}) => {
    const filePath = `file://${path.resolve('index.html')}`;

    await page.goto(filePath);

    await expect(page).toHaveTitle(/UniDone/);

    const mainHeading = page.locator('h1');
    await expect(mainHeading).toHaveText('Мої завдання');
})