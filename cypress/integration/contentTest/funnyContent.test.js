describe('Funny - Content Test', function() {
    before(function() {
        cy.homepage();
        cy.switchToFeed('Funny');
        cy.getMorePosts();
        cy.getMorePosts();
    });

    it('Can view "image"', function() {
        cy.findPostByType('funny', 'hot', 'image').then((result)=>{
            cy.checkPostContentTypeByIndex(result.index, 'image')
        });
    });

    it('Can view "hosted:video"', function() {
        cy.findPostByType('funny', 'hot', 'hosted:video').then((result)=>{
            cy.checkPostContentTypeByIndex(result.index, 'hosted:video');
        });
    });

});