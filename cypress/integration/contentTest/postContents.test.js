describe('Post Contents', function() {
    it('Can view "image"', function() {
        cy.homepage();
        cy.findPostByType('funny', 'hot', 'image').then((result)=>{
            cy.checkPostContentTypeByIndex(result.index, 'image')
        });
    });

    it('Can view "rich:video"', function() {
        cy.switchToFeed('Videos');
        cy.findPostByType('videos', 'hot', 'rich:video').then((result)=>{
            cy.checkPostContentTypeByIndex(result.index, 'rich:video');
        });
    });


});