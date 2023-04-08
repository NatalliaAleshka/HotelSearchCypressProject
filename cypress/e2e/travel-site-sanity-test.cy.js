///<reference types ="Cypress"/>
describe('The sanity test suit for travel site', () => {
  it('Navigate to the main page', () => {
    cy.visit('http://localhost:50432/')
    cy.url().should("eq", "http://localhost:50432/")
  })

  it('Verify tabs of the page', () => {
    cy.visit('http://localhost:50432/')
    cy.get('[data-cy="Hotels"]').should("be.visible")
    cy.get('[data-cy="Car"]').should("be.visible")
    cy.get('[data-cy="Flight"]').should("be.visible")

  })

  it('Verify text of tabs of the page', () => {
    cy.visit('http://localhost:50432/')
    cy.get('[data-cy="Hotels"]').should("have.text", "hotels")
    cy.get('[data-cy="Car"]').should("have.text", "car")
    cy.get('[data-cy="Flight"]').should("have.text", "flight")

  })

  it('Verify elements of Hotel page', () => {
    cy.visit('http://localhost:50432/')
    cy.get('[data-cy="flight_chk"]').should("be.visible")
    cy.get('[data-cy="cars_chk"]').should("be.visible")
    // cy.get('#tab1 > form > .btn-submit').should("be.visible")
    // cy.contains("search").should("be.visible")
cy.get('[type="submit"]').should("be.visible")

  })

})