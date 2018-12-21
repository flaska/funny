let topActionBar = (i)=>cy.get('.post').eq(i).find('.topActionBar');
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
        cy.window().then((w)=>{
            const spy = cy.spy(w, 'open').withArgs('https://www.reddit.com' + testPost.permalink, '_blank').as('openExternalUrl');
            topActionBar(indexOfTestPost).find('.postActions_openSource').click().then(() => {
                expect(spy).to.be.called;
            });
        });
    });
});