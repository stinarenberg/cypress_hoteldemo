/// <reference types="cypress" />

//This is a testsuite
describe ('Regression test suite', function() {

    //This is  a test case
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview') //assertion för tester01/02?
        //cy.get('.user > .btn').click()
    })

    it('Create new room', function(){
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('double')
        cy.get(':nth-child(2) > input').type('202')
        cy.get(':nth-child(3) > input').type ('2')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('2000')
        cy.get(':nth-child(6) > select').select(['balcony', 'sea_view'])
        cy.get('.blue').click()
        cy.contains('Floor 2, Room 202')
        cy.get(':nth-child(3) > :nth-child(2) > .features > :nth-child(1)').contains('balcony')
    })

    it('Delete a room', function(){
        cy.get(':nth-child(3) > .action').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Floor 2, Room 202').should('not.exist')

    })

})