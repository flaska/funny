describe('Post Contents', function() {
    it('Can view "image"', function() {
        cy.homepage();
        cy.switchToFeed('Funny');
        cy.findPostByType('funny', 'hot', 'image').then((result)=>{
            cy.checkPostContentTypeByIndex(result.index, 'image')
        });
    });

    it('Can view "hosted:video"', function() {
        cy.switchToFeed('Funny');
        cy.findPostByType('funny', 'hot', 'hosted:video').then((result)=>{
            if (result.index>9) cy.getMorePosts();
            cy.checkPostContentTypeByIndex(result.index, 'hosted:video');
        });
    });
    //
    // it('Can view "rich:video"', function() {
    //     cy.switchToFeed('Videos');
    //     cy.findPostByType('videos', 'hot', 'rich:video').then((result)=>{
    //         cy.checkPostContentTypeByIndex(result.index, 'rich:video');
    //     });
    // });
    //
    // it('Can view "link"', function() {
    //     cy.switchToFeed('Videos');
    //     cy.findPostByType('videos', 'hot', 'rich:video').then((result)=>{
    //         cy.checkPostContentTypeByIndex(result.index, 'rich:video');
    //     });
    // });
    //
    // it('Can view "self"', function() {
    //     cy.switchToFeed('Videos');
    //     cy.findPostByType('videos', 'hot', 'rich:video').then((result)=>{
    //         cy.checkPostContentTypeByIndex(result.index, 'rich:video');
    //     });
    // });

});