describe('Switch Channel Test', function() {
    before(function() {
        cy.homepage();
        cy.switchToFeed('funny');
        cy.getMorePosts();
        cy.getMorePosts();
    });

    it('Can switch to Top / Week', function() {
        cy.switchChannelTo('topWeek');
    });

});