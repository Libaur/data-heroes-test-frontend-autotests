describe('looking for Rick', () => {
  it('passes', () => {
    cy.visit('https://libaur.github.io/data-heroes-test/')

    cy.contains('Критерии').click({force: true});

    cy.contains('По имени').click();

    cy.get('#input-0').type('Rick');

    cy.contains('Применить').click();
  })
})