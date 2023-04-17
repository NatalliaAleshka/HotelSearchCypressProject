describe('The Car tab test will ferify the cars functionality', () => {
    const cars_tab = '[data-cy="Car"]'
    const location_input = '[name=location]'
    const drop_off_input = '[name=dropoff]'
    const car_group_list = '[name="car-group"]'
    const driver_age_list = '[name="driver-age"]'



    before(() => {
        cy.visit('http://localhost:3000/')
    })

    beforeEach(() => {
        cy.get('[data-cy="Car"]').click()
    })

    it('Chooses location', () => {
        cy.get('[name=location]').type('Toronto').should('have.value', 'Toronto')

    })

    it('Chooses drop off', () => {
        cy.get(drop_off_input).clear()
        cy.get(drop_off_input).type('06/08/2024').should('have.value', '06/08/2024')

    })


    it('Chooses list of cars', () => {
        cy.get(car_group_list).should("be.visible")
        cy.get(car_group_list).select("Group 1", { force: true })
        cy.get('[title="Group 1"]').should("be.visible")

        cy.get(car_group_list).select("Group 2", { force: true })
        cy.get('[title="Group 2"]').should("be.visible")

        cy.get(car_group_list).select("Group 3", { force: true })
        cy.get('[title="Group 3"]').should("be.visible")
    })
    it('Chooses list of driver age', () => {
        cy.get(driver_age_list).should("be.visible")
        cy.get(driver_age_list).select("23", { force: true }).should("have.value", '23')
        cy.get(driver_age_list).select("24", { force: true }).should("have.value", '24')
        cy.get(driver_age_list).select("25", { force: true }).should("have.value", '25')
        cy.get(driver_age_list).select("26", { force: true }).should("have.value", '26')
    })
})