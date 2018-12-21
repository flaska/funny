let topActionBar = (i)=>cy.get('.post').eq(i).find('.topActionBar');
let bottomActionBar = (i)=>cy.get('.post').eq(i).find('.bottomActionBar');
let indexOfTestPost ;

describe('Post Action Bar Test', function() {
    before(function() {
        cy.homepage();
        cy.switchToFeed('Funny');
    });


    it('Has top action bar', function() {
        topActionBar(0).contains('Open');
        topActionBar(0).contains('Source');
    });

    it('Top action bar opens content', ()=>{
        cy.findPostByType('funny', 'hot', 'image').then((result)=>{
            indexOfTestPost = result.index;
            topActionBar(indexOfTestPost).find('.postActions_openContent').click();
            cy.checkPostContentTypeByIndex(indexOfTestPost, 'image');
        });
    });

    it('Same button changes to close and closes', function() {
        topActionBar(indexOfTestPost).contains('Close');
        topActionBar(indexOfTestPost).find('.postActions_openContent').click();
        cy.get('.post').eq(indexOfTestPost).find('.postContent').should('not.exist');
    });
});