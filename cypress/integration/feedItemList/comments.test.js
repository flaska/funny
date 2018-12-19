describe('Comments', function() {
    it('Can see top comments for first post', function() {
        cy.homepage();
        cy.get('#feedList').find('.feedItem').should('have.length', 10);
        cy.getFeed('funny', 'hot', 0, 10).then((response)=>{
            debugger;
            cy.getComments(response.body.posts[0].id).then((response)=>{
                let firstComment = response.body.replies[0].body;
                cy.get('#feedList .feedItem .postTitle').first().click();
                cy.get('#feedList .feedItem').first().contains(firstComment);
            });
        });
    });
});