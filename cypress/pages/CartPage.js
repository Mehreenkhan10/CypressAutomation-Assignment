class CartPage {
  openCart() {
    cy.get('.shopping_cart_link').click();
  }

  verifyCartPage() {
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('exist');
  }

  clickCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default new CartPage();