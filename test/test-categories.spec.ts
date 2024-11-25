// TEST NUMERO 7 DE NOTRE PDF GHERKIN (voir pdf)
//TEST VERIFIER LE FONCTIONNEMENT DES CATEGORIES

const { test, expect } = require('@playwright/test');

test.describe('Navigation dans les catégories', () => {
  test('Accéder à une catégorie de produits depuis la page d\'accueil', async ({ page }) => {
    
    await page.goto('https://www.amazon.fr/');

    //Sélectionner la catégorie "Bricolage"
    await page.selectOption('#searchDropdownBox', 'search-alias=diy');

    await page.click('#nav-search-submit-button');

    //Attendre que la page se charge parce qu'on a eu énormément de bugs
    await page.waitForTimeout(2000);

    // verification de la page  
    const pageContent = await page.content();
    expect(pageContent).toContain('Bricolage');
  });
});