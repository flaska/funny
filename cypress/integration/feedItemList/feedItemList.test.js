describe('Feed List', function() {
    it('Sees ten posts from /r/Funny', function() {
        cy.homepage();
        cy.get('#feedList').find('.feedItem').should('have.length', 10);
        cy.getFeed('funny', 'hot', 0, 10).then((response)=>{
            let posts = response.body.posts;
            cy.get('#feedList .feedItem').eq(0).contains(posts[0].title);
            cy.get('#feedList .feedItem').eq(1).contains(posts[1].title);
        });
    });
    it('Can see more posts from /r/Funny', ()=>{
        cy.contains('More Fun').click();
        cy.get('#feedList').find('.feedItem').should('have.length', 20);
        cy.getFeed('funny', 'hot', 10, 10).then((response)=>{
            let posts = response.body.posts;
            cy.get('#feedList .feedItem').eq(10).contains(posts[0].title);
        });
    });
});