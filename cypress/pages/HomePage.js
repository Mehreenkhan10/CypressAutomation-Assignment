class HomePage {
  verifyOnHomePage() {
    cy.url().should('include', '/inventory.html');
  }

  clickFirstProduct() {
    cy.get('.inventory_item_name').first().click();
  }

  addToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  openMenu() {
    cy.get('#react-burger-menu-btn').click();
  }

  clickLogout() {
    cy.get('#logout_sidebar_link').click();
  }

  verifyLoggedOut() {
    cy.url().should('eq', 'https://www.saucedemo.com/');
  }
}

export default new HomePage();

