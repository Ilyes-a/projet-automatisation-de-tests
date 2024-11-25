// TEST NUMERO 5 DE NOTRE PDF GHERKIN (voir pdf)
// TEST ADD TO CART
const { test, expect } = require('@playwright/test');
const CartPage = require('../pages/cartPage'); 

test.describe('Ajout au panier', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
    await page.goto('https://www.amazon.fr/gp/product/1712419005/ref=sw_img_1?smid=A1X6FK5RDHNB96&psc=1');
  });

  test('Ajouter un produit au panier depuis l\'URL', async ({ page }) => { 
    
    await page.click('text=Ajouter au panier');

    // Vérifie que le message "Ajouté au panier" est visible
    const addedToCartMessage = await page.waitForSelector('text=Ajouté au panier', { timeout: 5000 });
    expect(await addedToCartMessage.isVisible()).toBeTruthy();
  });
});
