describe('Science - Content Test', function() {
    before(function() {
        cy.homepage();
        cy.switchToFeed('Science');
        cy.getMorePosts();
    });

    it('Has thumbnails', function() {
        cy.get('#feedList .feedItem').eq(0).find('img');
    });

    it('Can view "link"', function() {
        cy.findPostByType('science', 'hot', 'link').then((result)=>{
            cy.checkPostExternalContentOpenByIndex(result.index, result.post.url);
        });
    });

});