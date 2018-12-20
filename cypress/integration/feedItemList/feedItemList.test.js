describe('Feed List', function() {
    it('Sees ten posts from /r/Funny', function() {
        cy.homepage();
        cy.get('#feedList').find('.feedItem').should('have.length', 10);
        cy.getFeed('funny', 'hot', 0, 10).then((response)=>{
            let posts = response.body.posts;
            cy.checkPostTitleByIndex(0, posts[0].title);
            cy.checkPostTitleByIndex(1, posts[1].title);
        });
    });
    it('Can see more posts from /r/Funny', ()=>{
        cy.getMorePosts();
        cy.get('#feedList').find('.feedItem').should('have.length', 20);
        cy.getFeed('funny', 'hot', 10, 10).then((response)=>{
            let posts = response.body.posts;
            cy.checkPostTitleByIndex(10, posts[0].title);
        });
    });
});