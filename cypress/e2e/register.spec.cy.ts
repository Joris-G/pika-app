describe('Register E2E tests', () => {
  beforeEach(() => {
    // cy.viewport('iphone-6+');
    cy.visit('/register');
    cy.url().should('include', '/register');
  });
  it('submit new user', () => {
    // cy.contains('app is running!');
    cy.get('form').should('be.visible');
    // cy.get('ion-button[type="submit"]').should('be.disabled');
    cy.get('[formcontrolname="firstname"]')
      .type('Joris');
    cy.get('[formcontrolname="lastname"]')
      .type('Grangier');
    cy.get('[formcontrolname="team"]')
      .type('METHODE');
    cy.get('[formcontrolname="password"]')
      .type('test03');
    cy.get('[formcontrolname="controlPassword"]')
      .type('test03');
    // cy.get('button[type="submit"]').should('be.enabled');
    cy.get('form').submit();
    cy.url()
      .should('include', '/login');
  });

  it('existing user', () => {
    // cy.contains('app is running!');
    cy.get('form').should('be.visible');
    // cy.get('ion-button[type="submit"]').should('be.disabled');
    cy.get('[formcontrolname="firstname"]')
      .type('Joris');
    cy.get('[formcontrolname="lastname"]')
      .type('Grangier');
    cy.get('[formcontrolname="team"]')
      .type('METHODE');
    cy.get('[formcontrolname="password"]')
      .type('test03');
    cy.get('[formcontrolname="controlPassword"]')
      .type('test03');
    // cy.get('button[type="submit"]').should('be.enabled');
    cy.get('form').submit();
  });
});


describe('Register E2E tests', () => {
  beforeEach(() => {
    // cy.viewport('iphone-6+');
    cy.visit('/register');
    cy.url().should('include', '/register');
  });
  it('submit new user', () => {
    // cy.contains('app is running!');
    cy.get('form').should('be.visible');
    // cy.get('ion-button[type="submit"]').should('be.disabled');
    cy.get('[formcontrolname="firstname"]')
      .type('Joris');
    cy.get('[formcontrolname="lastname"]')
      .type('Grangier');
    cy.get('[formcontrolname="team"]')
      .type('METHODE');
    cy.get('[formcontrolname="password"]')
      .type('test03');
    cy.get('[formcontrolname="controlPassword"]')
      .type('test03');
    // cy.get('button[type="submit"]').should('be.enabled');
    cy.get('form').submit();
  });

  it('existing user', () => {
    // cy.contains('app is running!');
    cy.get('form').should('be.visible');
    // cy.get('ion-button[type="submit"]').should('be.disabled');
    cy.get('[formcontrolname="firstname"]')
      .type('Joris');
    cy.get('[formcontrolname="lastname"]')
      .type('Grangier');
    cy.get('[formcontrolname="team"]')
      .type('METHODE');
    cy.get('[formcontrolname="password"]')
      .type('test03');
    cy.get('[formcontrolname="controlPassword"]')
      .type('test03');
    // cy.get('button[type="submit"]').should('be.enabled');
    cy.get('form').submit();
  });
});
