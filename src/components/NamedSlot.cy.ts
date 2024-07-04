import NamedSlot from './NamedSlot.vue'

describe('<NamedSlot />', () => {
  it('renders', () => {
    const slots = {
      header: 'my header',
      footer: 'my footer'
    }
    cy.mount(NamedSlot, {
      slots
    })
    cy.get('header').should('have.text', 'my header')
    cy.get('footer').should('have.text', 'my footer')
  })
})
