describe('Comments', function() {
    it('Can see top comments for first post', function() {
        cy.homepage();
        cy.get('#feedList').find('.feedItem').should('have.length', 10);
        cy.getFeed('funny', 'hot', 0, 10).then((response)=>{
            cy.getComments(response.body.posts[0].id).then((response)=>{
                let firstComment = response.body.replies[0].body;
                cy.openPostByIndex(0);
                cy.checkPostCommentsByIndex(0, firstComment);
            });
        });
    });
});