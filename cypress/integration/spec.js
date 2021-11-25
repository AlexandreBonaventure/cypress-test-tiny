/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.intercept(
      {
        url: /test/,
      },
      req => {
        req.continue(res => {
          res.delay = 3000;
          res.send();
        });
      },
    );
    cy.visit('http://localhost:8080')
    cy.document().its('body').should('have.class', 'hello')
  })
})
