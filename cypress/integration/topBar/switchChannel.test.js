describe('Switch Channel Test', function() {
    before(function() {
        cy.homepage();
        cy.switchToFeed('funny');
        cy.getMorePosts();
        cy.getMorePosts();
    });

    it('Can switch to Top / Week', function() {
        cy.switchChannelTo('topWeek');
        cy.getFeed('funny', 'topweek', 0, 10).then((response)=>{
            let posts = response.body.posts;
            cy.checkPostTitleByIndex(0, posts[0].title);
            cy.checkPostTitleByIndex(1, posts[1].title);
        });
    });

});