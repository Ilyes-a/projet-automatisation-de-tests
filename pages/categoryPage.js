// categoryPage.js

class CategoryPage {
    constructor(page) {
      this.page = page;
      this.filterButton = '.a-button-filter'; // Sélecteur générique pour les boutons de filtre
      this.productsSelector = '.s-result-item'; // Sélecteur générique pour les produits affichés
    }
  
    async applyFilter(filterName) {
      // Clique sur le bouton de filtre spécifié par son nom
      const filterElement = await this.page.$(`text=${filterName} >> ${this.filterButton}`);
      if (filterElement) {
        await filterElement.click(); // Applique le filtre
        await this.page.waitForTimeout(2000); // Attendre que les produits soient filtrés
      } else {
        throw new Error(`Le filtre "${filterName}" n'est pas disponible.`);
      }
    }
  
    async verifyProductsDisplayed() {
      const products = await this.page.$$(this.productsSelector); // Récupère tous les produits affichés
      if (products.length === 0) {
        throw new Error('Aucun produit affiché dans la catégorie.');
      }
      return products.length; // Retourne le nombre de produits affichés
    }
  }
  
  module.exports = CategoryPage;
  