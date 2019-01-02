describe('Share Post Test', function() {
    it('Can share "image" post from /r/Funny', function() {
        cy.homepage();
        cy.findPostByType('funny', 'hot', 'image').then((result)=>{
            cy.checkOpenPostContentTypeByIndex(result.index, 'image');
            cy.get('.post').eq(result.index).find('.topActionBar').find('.cy_actionBar_sharePost').click();
            cy.contains('Share - ' + result.post.title);
            cy.contains('https://www.4slack.com/sh/' + result.post.id);
        });
    });
    it('Can copy link to clip-board', function() {
        cy.document().then((document) => {
            const spy = cy.spy(document, 'execCommand').withArgs('copy').as('document.execCommand(copy)');
            window.prompt = ()=>true;
            cy.get('.cy_shareDialog_copyLink').click().then(()=>{
                expect(spy).to.be.called;
            });
            cy.contains('Link copied to clip-board...');
            cy.get('.cy_shareDialog_close').click();
        });
    });
});