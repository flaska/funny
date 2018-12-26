Cypress.Commands.add('switchToFeed', (feedName)=>{
    cy.scrollTo(0);
    cy.get('#openLeftMenu').click();
    cy.get('#leftMenu').contains(feedName).click({force: true});
});