Cypress.Commands.add('switchToFeed', (feedName)=>{
    cy.get('#openLeftMenu').click();
    cy.get('#leftMenu').contains(feedName).click();
    cy.get('body').click(300,300);
});