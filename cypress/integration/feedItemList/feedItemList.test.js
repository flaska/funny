// const slack = require('../shared/4slack.lib');

describe('Feed List', function() {
    it('Sees ten posts', function() {
        cy.homepage();
        cy.get('#feedList').find('.feedItem').should('have.length', 10);
    });
    it('Can see more posts', ()=>{
        cy.contains('More Fun').click();
        cy.get('#feedList').find('.feedItem').should('have.length', 20)
    });
});