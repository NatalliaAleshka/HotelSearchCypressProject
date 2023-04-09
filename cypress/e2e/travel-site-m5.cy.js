///<reference types ="Cypress"/>
describe('Verify elements on the tab', () => {
  it('Navigate to the main page', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should("eq", "http://localhost:3000/")
  })

  it('Verify the address/going to box', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Going to").should("be.visible")
    cy.get('[name ="address"]').should("be.visible")
    cy.get('[placeholder ="Destination, hotel name"]').should("be.visible")

  })
  it('Verify the check-in box', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("check-in").should("be.visible")
    cy.get('[name ="check-in"]').should("be.visible")
    cy.get('[placeholder ="mm/dd/yyyy"]').should("be.visible")
  })

  it('Verify the  check-out box', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("check-out").should("be.visible")
    cy.get('[name ="check-out"]').should("be.visible")
    cy.get('[placeholder ="mm/dd/yyyy"]').should("be.visible")
  })

  it('Verify  the travelers list', () => {
    cy.visit('http://localhost:3000/')
    cy.get(':nth-child(3) > .label').should("be.visible").and("have.text", "travellers")
    cy.get('[name ="traveller"]').should("be.visible")
    cy.get('[value ="1 Adult, 0 Children, 1 Room"]').should("be.visible")

  })

  it('Verify  the add a flight checkbox', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.checkbox-row > .m-r-45').should("be.visible")


  })

  it('Verify  the add a car checkbox', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.checkbox-row > :nth-child(2)').should("be.visible")

  })

  it('Verify  the search button', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("search").should("be.visible")
    cy.get('#tab1 > form > .btn-submit').should("be.visible").should('have.text', 'search')

  })
})



