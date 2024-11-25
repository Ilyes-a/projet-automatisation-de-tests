// registerPage.js

class RegisterPage {
  constructor(page) {
    this.page = page;
    this.nameInput = '#ap_customer_name'; // Sélecteur pour le champ nom
    this.emailInput = '#ap_email'; // Sélecteur pour le champ email
    this.passwordInput = '#ap_password'; // Sélecteur pour le champ mot de passe
    this.confirmPasswordInput = '#ap_password_check'; // Sélecteur pour le champ de confirmation du mot de passe
    this.createAccountButton = '#continue'; // Bouton pour créer le compte
    this.emailError = '.a-alert-content'; // Sélecteur pour le message d'erreur si l'email est déjà utilisé
  }

  async createAccount(name, email, password) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.fill(this.confirmPasswordInput, password);
    await this.page.click(this.createAccountButton);
  }

  async checkEmailAlreadyExists() {
    const errorVisible = await this.page.isVisible(this.emailError);
    return errorVisible;
  }
}

module.exports = RegisterPage;