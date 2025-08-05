/// <reference types="cypress" />
//working on cypress
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('SauceDemo Full POM Tests', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('❌ Wrong login shows error', () => {
    cy.login('wrong_user', 'wrong_pass');
    LoginPage.getErrorMessage().should('contain', 'Username and password do not match');
  });

  it('✅ Successful login', () => {
    cy.login('standard_user', 'secret_sauce');
    HomePage.verifyOnHomePage();
  });

  it('🛒 Add product to cart and checkout', () => {
    cy.login('standard_user', 'secret_sauce');
    HomePage.addToCart();
    CartPage.openCart();
    CartPage.verifyCartPage();
    CartPage.clickCheckout();
    CheckoutPage.fillCustomerInfo('Ali', 'Zuberi', '12345');
    CheckoutPage.clickContinue();
    CheckoutPage.verifyOverviewPage();
    CheckoutPage.finishCheckout();
    CheckoutPage.verifySuccessMessage();
  });

  it('🔍 Click product and verify product page', () => {
    cy.login('standard_user', 'secret_sauce');
    HomePage.clickFirstProduct();
    ProductPage.verifyProductPage();
  });

  it('🚪 Logout from app', () => {
    cy.login('standard_user', 'secret_sauce');
    HomePage.openMenu();
    HomePage.clickLogout();
    HomePage.verifyLoggedOut();
  });
});