// cartPage.js

class CartPage {
    constructor(page) {
      this.page = page;
      this.productQuantitySelector = '.a-dropdown-container .a-dropdown-prompt'; // Sélecteur pour afficher la quantité d'un produit
      this.removeProductButton = '.a-button-delete'; // Sélecteur pour le bouton de suppression d'un produit
      this.emptyCartMessage = '.a-row.sc-your-amazon-cart-is-empty'; // Sélecteur pour le message de panier vide
    }
  
    async verifyProductQuantity(productName, expectedQuantity) {
      // Vérifie la quantité d'un produit spécifique dans le panier
      const quantityElement = await this.page.$(`text=${productName} >> ${this.productQuantitySelector}`);
      if (!quantityElement) {
        throw new Error(`Le produit "${productName}" n'est pas dans le panier.`);
      }
  
      const quantityText = await this.page.textContent(quantityElement);
      const quantity = parseInt(quantityText);
      if (quantity !== expectedQuantity) {
        throw new Error(`La quantité du produit "${productName}" est ${quantity} au lieu de ${expectedQuantity}.`);
      }
    }
  
    async removeProduct(productName) {
      const removeButton = await this.page.$(`text=${productName} >> ${this.removeProductButton}`);
      if (removeButton) {
        await removeButton.click(); // Clique sur le bouton de suppression du produit
        await this.page.waitForTimeout(2000); // Attendre un moment pour que l'animation de suppression soit terminée
      } else {
        throw new Error(`Le produit "${productName}" n'est pas trouvé dans le panier.`);
      }
    }
  
    async isCartEmpty() {
      const emptyMessageVisible = await this.page.isVisible(this.emptyCartMessage);
      return emptyMessageVisible; 
    }
  }
  
  module.exports = CartPage;
  