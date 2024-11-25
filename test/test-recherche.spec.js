// TEST NUMERO 4 DE NOTRE PDF GHERKIN (voir pdf)
// TEST SEARCH TV DANS LA BARRE DE RECHERCHE
const { test, expect } = require('@playwright/test');
const Homepage = require('../pages/homeppage');
const SearchResultsPage = require('../pages/searchResultsPage'); 

test.describe('Recherche de produit', () => {
  let homepage;
  let searchResultsPage;

  test.beforeEach(async ({ page }) => {
    homepage = new Homepage(page);
    searchResultsPage = new SearchResultsPage(page);
    await page.goto('https://www.amazon.fr'); // Remplace par l'URL réelle de la page d'accueil d'Amazon
  });

  test('Rechercher un produit et vérifier les résultats', async () => {
    const keyword = 'TV'; // Le mot-clé à rechercher
    await homepage.searchProduct(keyword); // Utilise la méthode pour rechercher le produit
    await searchResultsPage.verifySearchResults(keyword); // Vérifie que les résultats contiennent le mot-clé
  });
});
