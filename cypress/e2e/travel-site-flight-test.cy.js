///<reference types ="Cypress"/>
describe('The flight tab test will ferify functionality', () => {
  const flights_tab = ('[data-cy="Flight"]')
  // const origin_placeholder = ('[placeholder="City or airport"][name="origin"]');
  const origin_placeholder = ('[name="origin"]');
  const destination_placeholder = ('[name="destination"]');
  const checkin = '#input-start-2';
  const checkout = '#input-end-2';
  const business_radio_button =  '[id="business"]'
  const economy_radio_button =  '[id="economy"]'
  const first_class_radio_button =  '[id="f_class"]'

  before(() => {
    cy.visit('http://localhost:3000/')
  })
  beforeEach(() => {
    cy.get(flights_tab).click()
  })
  after(() => {
    cy.log("after all")
  })
  afterEach(() => {
    cy.log("after each")
  })

  it('Navigate to the flights tab', () => {
    cy.get(origin_placeholder).should("be.visible")
    cy.get(flights_tab).invoke('attr', 'aria-expanded').should('eq', 'true')
    cy.get(flights_tab).invoke('text').should('eq', 'flight')
  })

  it('Populates origin and destination', () => {
    cy.get(origin_placeholder).type("Paris").invoke("val").should("eq", "Paris")
    cy.get(destination_placeholder).type("London").invoke("val").should("eq", "London")

    // cy.get(origin_placeholder ).invoke("val").should("eq", "Paris")
    // cy.get(destination_placeholder ).invoke("val").should("eq", "London")
  })


  it('Populates check-in and check-out dates', () => {
    cy.get(checkin).clear();
    cy.get(checkin).type('10/10/2025').invoke("val").should("eq", "10/10/2025")
    cy.get(checkout).clear();
    cy.get(checkout).type('10/10/2026').invoke("val").should("eq", "10/10/2026")


  })

  it('check radio buttons', () => {
    cy.get(business_radio_button).click().should("be.checked")
    cy.get(economy_radio_button).click().should("be.checked")
    cy.get(first_class_radio_button).click().should("be.checked")

  })

 

})