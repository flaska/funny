describe('Post Contents', function() {
    it('Can view "image"', function() {
        cy.homepage();
        cy.findPostByType('funny', 'hot', 'image').then((result)=>{

        });
    });
});