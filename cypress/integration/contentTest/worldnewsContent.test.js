describe('World News - Content Test', function() {
    before(function() {
        cy.homepage();
        cy.switchToFeed('World News');
        cy.getMorePosts();
    });

    it('Can view "link"', function() {
        cy.findPostByType('worldnews', 'hot', 'link').then((result)=>{
            cy.checkPostExternalContentOpenByIndex(result.index, result.post.url);
        });
    });

});