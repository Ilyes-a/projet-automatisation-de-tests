// homepage.js

class Homepage {
  constructor(page) {
    this.page = page;
    this.searchInput = 'input#twotabsearchtextbox'; // Sélecteur pour la barre de recherche
    this.searchButton = 'input#nav-search-submit-button';
    this.locationIcon = '#nav-global-location-popover-link'; // Sélecteur pour l'icône d'emplacement
    this.postalCodeInput = 'input#GLUXZipUpdateInput'; // Sélecteur pour le champ de code postal
    this.updateButton = '#GLUXZipUpdate .a-button-input'; // Sélecteur du bouton de mise à jour
    this.applyLocationButton = '#GLUXConfirmClose'; // Sélecteur pour appliquer le changement
    this.locationDisplay = '#glow-ingress-line2'; // Sélecteur pour l'affichage de l'emplacement
  }

  async searchProduct(productName) {
    await this.page.fill(this.searchInput, productName);
    await this.page.click(this.searchButton);
  }

  async navigateToCategory(categoryName) {
    // Méthode pour accéder à une catégorie spécifique
    await this.page.click(`text=${categoryName}`);
  }

  async verifyHomePageContent() {
    await this.page.waitForSelector('text=Meilleures ventes');
    await this.page.waitForSelector('text=Amazon Basics');
 
  }


  async clickLocationIcon() {
    await this.page.click(this.locationIcon);
  }

  async enterPostalCode(code) {
    await this.page.fill(this.postalCodeInput, code);
  }

  async submitLocation() {
    await this.page.click(this.updateButton);
  }

  async getLocationText() {
    return this.page.textContent(this.locationDisplay);
  }
}

module.exports = Homepage;
