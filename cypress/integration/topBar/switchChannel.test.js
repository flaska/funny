describe('Switch Channel Test', function() {
    before(function() {
        cy.homepage();
        cy.switchToFeed('funny');
        cy.getMorePosts();
        cy.getMorePosts();
    });

    it('Can switch to Funny / Top/Week', function() {
        cy.switchChannelTo('topWeek');
        cy.getFeed('funny', 'topweek', 0, 10).then((response)=>{
            let posts = response.body.posts;
            cy.checkPostTitleByIndex(0, posts[0].title);
            cy.checkPostTitleByIndex(1, posts[1].title);
        });
    });

    it('Can switch to Funny / Top/Month', function() {
        cy.switchChannelTo('topMonth');
        cy.getFeed('funny', 'topmonth', 0, 10).then((response)=>{
            let posts = response.body.posts;
            cy.checkPostTitleByIndex(0, posts[0].title);
            cy.checkPostTitleByIndex(1, posts[1].title);
        });
    });

    it('Can switch to Aww / Top/Week', function() {
        cy.switchToFeed('aww');
        cy.switchChannelTo('topWeek');
        cy.getFeed('aww', 'topweek', 0, 10).then((response)=>{
            let posts = response.body.posts;
            cy.checkPostTitleByIndex(0, posts[0].title);
            cy.checkPostTitleByIndex(1, posts[1].title);
        });
    });
});