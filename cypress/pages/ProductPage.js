class ProductPage {
  verifyProductPage() {
    cy.url().should('include', '/inventory-item.html');
    cy.get('.inventory_details_name').should('exist');
  }
}

export default new ProductPage();