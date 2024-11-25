// productPage.js

class ProductPage {
    constructor(page) {
      this.page = page;
      this.addToCartButton = '#add-to-cart-button'; // Sélecteur pour le bouton "Ajouter au panier"
      this.cartConfirmationMessage = '#huc-v2-order-row-confirm-text'; // Sélecteur pour le message de confirmation d'ajout au panier
    }
  
    async addToCart() {
      await this.page.click(this.addToCartButton); 
      await this.page.waitForSelector(this.cartConfirmationMessage, { timeout: 5000 }); // Attend que le message de confirmation apparaisse
    }
  
    async verifyProductAddedToCart() {
      const confirmationVisible = await this.page.isVisible(this.cartConfirmationMessage);
      if (!confirmationVisible) {
        throw new Error('Le produit n\'a pas été ajouté au panier.');
      }
    }
  }
  
  module.exports = ProductPage;
  