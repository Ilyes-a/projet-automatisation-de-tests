// TEST NUMERO 9 DE NOTRE PDF GHERKIN (voir pdf)
// Vérifier la feature de sélection de version d'un produit 

import { test, expect } from '@playwright/test';

test('Vérifier les options pour un produit', async ({ page }) => {
    await page.goto('https://www.amazon.fr/KOORUI-Écran-PC-Incurvé-lInclinaison/dp/B0CWTY9FXT');

    await page.click('#size_name_2');

    const pageContent = await page.content();

    expect(pageContent).toContain('27 Pouces');
});
