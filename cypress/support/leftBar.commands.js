Cypress.Commands.add('switchToFeed', (feedName)=>{
    cy.get('#openLeftMenu').click();
    cy.wait(500);
    cy.get('#leftMenu').contains(feedName).click();
});