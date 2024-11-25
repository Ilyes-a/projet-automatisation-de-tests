// TEST NUMERO 3 DE NOTRE PDF GHERKIN (voir pdf)
// TEST HOMEPAGE
const { test, expect } = require('@playwright/test');
const Homepage = require('../pages/homeppage'); 

test.describe('Page d\'accueil', () => {
  let homepage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    await page.goto('https://www.amazon.fr');
  });

  test('Vérification du contenu de la page d\'accueil', async () => {
    await homepage.verifyHomePageContent(); 
    
  });
});
