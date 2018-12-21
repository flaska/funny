Cypress.Commands.add('switchToFeed', (feedName)=>{
    cy.get('#openLeftMenu').click();
    cy.get('#leftMenu').contains(feedName).click();
});