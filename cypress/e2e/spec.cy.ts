import { createYield } from "typescript"


describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get ('[data-cy="output"]').contains('1')
    cy.get ('[data-cy="decrement"]').click()
    cy.get ('[data-cy="decrement"]').click()
    cy.get ('[data-cy="output"]').contains(-1)
    cy.get ('[data-cy="increment"]').click()
    cy.get ('[data-cy="increment"]').click()
    cy.get ('[data-cy="output"]').contains(1) 
    cy.get ('[data-cy="reset"]').click()
    cy.get ('[data-cy="output"]').contains(0) 

    cy.get ('[data-cy="input"]').clear()
    cy.get ('[data-cy="input"]').type ("8")
    cy.get ('[data-cy="increment"]').click()
    cy.get ('[data-cy="increment"]').click()
    cy.get ('[data-cy="output"]').contains ('16')
  })
})