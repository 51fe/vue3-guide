// see: https://on.cypress.io/mounting-vue
import Stepper from './Stepper.vue'

describe('<Stepper />', () => {
  it('stepper should default to 0', () => {
    cy.mount(Stepper)
    cy.get('span').should('have.text', '0')
  })

  it('stepper should default to 0', () => {
    cy.mount(Stepper)
    cy.get('[data-cy=counter]').should('have.text', '0')
  })

  it('supports a "count" prop to set the value', () => {
    cy.mount(Stepper, { props: { count: 100 } })
    cy.get('[data-cy=counter]').should('have.text', '100')
  })

  it('when the increment button is pressed, the counter is incremented', () => {
    cy.mount(Stepper)
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=counter]').should('have.text', '1')
  })

  it('when the decrement button is pressed, the counter is decremented', () => {
    cy.mount(Stepper)
    cy.get('[data-cy=decrement]').click()
    cy.get('[data-cy=counter]').should('have.text', '-1')
  })

  it('clicking + fires a change event with the incremented value', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(Stepper, { props: { onChange: onChangeSpy } })
    cy.get('[data-cy=increment]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', 1)
  })
})
