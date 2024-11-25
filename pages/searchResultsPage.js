// searchResultsPage.js

class SearchResultsPage {
    constructor(page) {
      this.page = page;
      this.productSelector = '.s-result-item'; // Sélecteur générique pour les produits affichés
      this.firstProduct = this.productSelector + ':first-of-type'; // Sélecteur pour le premier produit
    }
  
    async selectProduct(productIndex) {
      const products = await this.page.$$(this.productSelector); // Récupère tous les produits
      if (products.length > 0 && productIndex < products.length) {
        await products[productIndex].click(); // Clique sur le produit spécifié par l'index
      } else {
        throw new Error('Le produit sélectionné n\'existe pas.');
      }
    }
  
    async verifySearchResults(keyword) {
      const resultsText = await this.page.textContent('body');
      if (!resultsText.includes(keyword)) {
        throw new Error(`Les résultats de recherche ne contiennent pas "${keyword}".`);
      }
    }
  }
  
  module.exports = SearchResultsPage;
  