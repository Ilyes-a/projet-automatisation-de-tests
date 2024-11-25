// TEST NUMERO 6 DE NOTRE PDF GHERKIN (voir pdf)
// TEST SUPPRIMER PANIER
const { test, expect } = require('@playwright/test');
const CartPage = require('../pages/cartPage'); 

test.describe('Panier', () => {
  let cartPage;

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
    await page.goto('https://www.amazon.fr/gp/product/1712419005/ref=sw_img_1?smid=A1X6FK5RDHNB96&psc=1');
    

  });

  test('Supprimer un produit du panier', async ({ page }) => {
    await page.click('text=Ajouter au panier');
    
    await page.goto('https://www.amazon.fr/gp/cart/view.html?ref_=nav_cart');
    
    await page.click('input[value="Supprimer"]'); // Clique sur le bouton "Supprimer"
    const isCartEmpty = await cartPage.isCartEmpty();
    expect(isCartEmpty).toBe(false); 
  });
});
