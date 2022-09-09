describe('Login E2E tests', () => {
  beforeEach(() => {
    // cy.viewport('iphone-6+');
    cy.visit('/login');
    cy.url().should('include', '/login');
  });
  it('log when user is good', () => {
    cy.get('form').should('be.visible');
    // cy.get('ion-button[type="submit"]').should('be.disabled');
    cy.get('[formcontrolname="username"]')
      .type('j.grangier');
    cy.get('[formcontrolname="password"]')
      .type('test03');
    cy.get('form').submit();
    cy.url()
      .should('include', '/home');
  });
  it('show errors when username or password are incorrect', () => {
    cy.get('[formcontrolname="username"]')
      .type('jgrangier');
    cy.get('[formcontrolname="password"]')
      .type('test03');
    cy.get('form').submit();
  });

});
