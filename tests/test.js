import { expect, test } from '@playwright/test';

test('A página deve ter um <title>', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/cia do fusca/i);
});

test("Deve ter um <h1>", async ({ page }) => {
  await page.goto('/');
  await expect(getByRole('heading', { name: "BEM-VINDO A CIA DO FUSCA" })).toBeVisible();
});

test('Have a cta button', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Confira Nossos Modelos' }).isVisible();
});