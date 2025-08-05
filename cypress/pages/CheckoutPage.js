class CheckoutPage {
  fillCustomerInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
  }

  clickContinue() {
    cy.get('[data-test="continue"]').click();
  }

  verifyOverviewPage() {
    cy.url().should('include', 'checkout-step-two.html');
  }

  finishCheckout() {
    cy.get('[data-test="finish"]').click();
  }

  verifySuccessMessage() {
    cy.get('.complete-header').should('contain', 'Thank you');
  }
}

export default new CheckoutPage();