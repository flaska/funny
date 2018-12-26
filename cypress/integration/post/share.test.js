describe('Share Post Test', function() {
    it('Can share "image" post from /r/Funny', function() {
        // cy.on('window:prompt', ()=>true);

        cy.homepage();
        cy.findPostByType('funny', 'hot', 'image').then((result)=>{
            cy.checkOpenPostContentTypeByIndex(result.index, 'image');
            cy.document().then((document) => {
                const spy = cy.spy(document, 'execCommand').withArgs('copy').as('document.execCommand(copy)');
                window.prompt = ()=>true;
                cy.get('.post').eq(result.index).find('.bottomActionBar').find('.postActions_share').click().then(()=>{
                    expect(spy).to.be.called;
                });
                cy.contains('Link copied to clip-board...');
            });
        });
    });
});