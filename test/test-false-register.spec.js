// TEST NUMERO 2 DE NOTRE PDF GHERKIN (voir pdf)
// TEST REGISTER AVEC EMAIL DEJA PRIS
const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/registerPage');

test.describe('Création de compte', () => {
  let registerPage;

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    await page.goto('https://www.amazon.fr/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.fr%2F%3F_encoding%3DUTF8%26ref_%3Dnav_em_hd_re_signin&prevRID=3Z3MCB47BSTABAN0MDW5&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=frflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=frflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0'); // Assurez-vous que l'URL est correcte
  });

  test('Création de compte avec un email déjà utilisé', async ({ page }) => {
    const name = 'monsieur X';
    const email = 'test@example.com';
    const password = 'SecurePassword123'; 

    await registerPage.createAccount(name, email, password);


    const errorVisible = await registerPage.checkEmailAlreadyExists();
    expect(errorVisible).toBe(false);
  });
});
