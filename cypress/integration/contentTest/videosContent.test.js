describe('Videos - Content Test', function() {
    before(function() {
        cy.homepage();
        cy.switchToFeed('Videos');
        cy.getMorePosts();
        cy.getMorePosts();
    });

    it('Can view "rich:video"', function() {
        cy.switchToFeed('Videos');
        cy.findPostByType('videos', 'hot', 'rich:video').then((result)=>{
            cy.checkPostContentTypeByIndex(result.index, 'rich:video');
        });
    });

});