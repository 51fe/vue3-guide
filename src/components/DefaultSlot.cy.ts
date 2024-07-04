import DefaultSlot from './DefaultSlot.vue'

describe('<DefaultSlot />', () => {
  it('renders', () => {
    cy.mount(DefaultSlot, {
      slots: {
        default: 'Hello there!'
      }
    })
    cy.get('div.content').should('have.text', 'Hello there!')
  })
})
