describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  it('locate the input for searching pokemons ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').should('exist')
    cy.wait(2000);
  });

  it('type in the search bar for a pokemon in this case pikachu ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('pikachu')

  });

})