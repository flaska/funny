Cypress.Commands.add('getMorePosts', ()=>{
    cy.contains('More Fun').click();
});

