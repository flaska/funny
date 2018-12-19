describe('Post Contents', function() {
    it('Can view "image"', function() {
        cy.homepage();
        cy.findPostByType('funny', 'hot', 'image').then((result)=>{
            cy.openPostByIndex(result.index);
            cy.checkPostContentTypeByIndex(result.index, 'image')
        });
    });

    it('Can view "rich:video"', function() {
        cy.switchToFeed('Videos');
        cy.findPostByType('funny', 'hot', 'rich:video').then((result)=>{
            cy.openPostByIndex(result.index);
            cy.checkPostContentTypeByIndex(result.index, 'rich:video');
        });
    });


});