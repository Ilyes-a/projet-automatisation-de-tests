// TEST NUMERO 8 DE NOTRE PDF GHERKIN (voir pdf)
// test la feature AVIS / REVIEW
import { test, expect } from '@playwright/test';

test('Vérifier l\'affichage des avis clients pour un produit', async ({ page }) => {
    await page.goto('https://www.amazon.fr/Simplissime-light-livre-cuisine-facile/dp/2011356423');

    await page.click('#acrCustomerReviewLink');

    const reviewsSection = await page.isVisible('#customerReviews');
    expect(reviewsSection).toBeTruthy();
});

