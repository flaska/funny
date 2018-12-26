let indexOfTestPost;
let testPost;

describe('Post Action Bar - Source - Test', function() {
    before(function() {
        cy.homepage();
        cy.switchToFeed('Funny');
        cy.findPostByType('funny', 'hot', 'image').then((result)=>{
            indexOfTestPost = result.index;
            testPost = result.post;
        });
    });

    it('Source button opens a new tab', function() {
        cy.openPostCommentsByIndex(indexOfTestPost);
        cy.window().then((w)=>{
            const spy = cy.spy(w, 'open').withArgs('https://www.reddit.com' + testPost.permalink, '_blank').as('openExternalUrl');
            cy.get('.post').eq(indexOfTestPost).find('.comments_openSource').click().then(() => {
                expect(spy).to.be.called;
            });
        });
    });
});