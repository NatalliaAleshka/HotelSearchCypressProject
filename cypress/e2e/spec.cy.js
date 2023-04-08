///<reference types ="Cypress"/>
describe('test cypress io examples page', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
cy.url().should("eq", 'https://example.cypress.io/' )

  })
})