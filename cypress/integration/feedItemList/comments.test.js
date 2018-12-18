describe('Comments', function() {
    it('Can see top comments for first post', function() {
        cy.homepage();
        cy.get('#feedList').find('.feedItem').should('have.length', 10);
        cy.request('https://www.reddit.com/r/funny/hot.json').then((response)=>{
            let redditData = response.body.data;
            let postId = redditData.children[1].data.id;
            let commentsUrl = `https://www.reddit.com/r/funny/comments/${postId}.json?sort=top`;
            cy.request(commentsUrl).then((response)=>{
                let postData = response.body[1].data;
                cy.get('#feedList .feedItem .postTitle').first().click();
                let firstComment = postData.children[0].data.body;
                cy.get('#feedList .feedItem').first().contains(firstComment);
            });
        });
    });
});