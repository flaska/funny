let topActionBar = (i)=>cy.get('.post').eq(i).find('.topActionBar');
let bottomActionBar = (i)=>cy.get('.post').eq(i).find('.bottomActionBar');
let indexOfTestPost;
let firstComment;

describe('Post Action Bar - Comments - Test', function() {
    before(function() {
        cy.homepage();
        cy.switchToFeed('Funny');
        cy.findPostByType('funny', 'hot', 'image').then((result)=>{
            indexOfTestPost = result.index;
            cy.getComments(result.post.id).then((response)=>{
                firstComment = response.body.replies[0].body;
            });
        });
    });

    it('Bottom action bar opens comments', ()=>{
        cy.openPostByIndex(indexOfTestPost);
        bottomActionBar(indexOfTestPost).find('.postActions_openComments').click();
        cy.checkPostCommentsByIndex(indexOfTestPost, firstComment);
    });

    it('Bottom action bar closes comments', ()=>{
        bottomActionBar(indexOfTestPost).contains('Close');
        bottomActionBar(indexOfTestPost).find('.postActions_openComments').click();
        cy.get('.post').eq(indexOfTestPost).contains(firstComment).should('not.exist');
    });

});