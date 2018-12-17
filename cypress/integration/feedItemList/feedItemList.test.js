describe('Feed List', function() {
    it('Sees ten posts from /r/Funny', function() {
        cy.homepage();
        cy.get('#feedList').find('.feedItem').should('have.length', 10);
        cy.request('https://www.reddit.com/r/funny/hot.json').then((response)=>{
            let redditData = response.body.data;
            cy.get('#feedList .feedItem').first().contains(redditData.children[1].data.title);
            cy.get('#feedList .feedItem').eq(1).contains(redditData.children[2].data.title);
        });
    });
    it('Can see more posts from /r/Funny', ()=>{
        cy.contains('More Fun').click();
        cy.get('#feedList').find('.feedItem').should('have.length', 20);

        cy.request('https://www.reddit.com/r/funny/hot.json').then((response)=>{
            let redditData = response.body.data;
            cy.get('#feedList .feedItem').eq(10).contains(redditData.children[11].data.title);
        });
    });
});