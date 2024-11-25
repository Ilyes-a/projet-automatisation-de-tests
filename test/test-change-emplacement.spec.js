// TEST NUMERO 10 DE NOTRE PDF GHERKIN (voir pdf)
// VERIFICATION DE LA FEATURE CHANGER D'EMPLACEMENT

import { test, expect } from '@playwright/test';
import Homepage from '../pages/homeppage'; 

test.describe('Mise à jour de l\'emplacement', () => {
  test('Modifier l\'emplacement de livraison', async ({ page }) => {
    const homePage = new Homepage(page);

    // Accéder à la page d'accueil
    await page.goto('https://www.amazon.fr');

    // Cliquer sur l'icône d'emplacement
    await homePage.clickLocationIcon();

    // Saisir le nouveau code postalll
    await homePage.enterPostalCode('75001');

    // Validerr la mise à jour
    await homePage.submitLocation();
    await homePage.clickLocationIcon();
    const locationInputValue = await page.inputValue('input#GLUXZipUpdateInput');
    expect(locationInputValue).toBe('75001');
  });
});
