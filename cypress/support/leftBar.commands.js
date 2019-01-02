Cypress.Commands.add('switchToFeed', (feedTag)=>{
    cy.scrollTo(0);
    cy.get('#openLeftMenu').click();
    cy.get('#leftMenu').find('#leftMenu_changeSourceLink_' + feedTag).click({force: true});
});