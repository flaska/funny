Cypress.Commands.add('openPostByIndex', (index)=>{
    return cy.get('#feedList .post .postTitle').eq(index).click();
});

Cypress.Commands.add('checkPostContentTypeByIndex', (index, type)=>{
    if (type === 'image') {
        cy.openPostByIndex(index);
        cy.get('#feedList .post').eq(index).find('.postContent').find('img');
    }
    if (type === 'hosted:video') {
        cy.openPostByIndex(index);
        cy.get('#feedList .post').eq(index).find('.postContent').find('video');
    }
});


Cypress.Commands.add('checkPostExternalContentOpenByIndex', (index, url)=>{
    cy.window().then((w)=>{
        const spy = cy.spy(w, 'open').withArgs(url, '_blank').as('openExternalUrl');
        cy.openPostByIndex(index).then(() => {
            expect(spy).to.be.called;
        });
    });

});


Cypress.Commands.add('checkPostTitleByIndex', (index, title)=>{
    cy.get('#feedList .post').eq(index).contains(title);
});

Cypress.Commands.add('checkPostCommentsByIndex', (index, comment)=>{
    cy.openPostByIndex(index);
    let commentContainer = cy.get('#feedList .post').eq(index).find('.commentsContainer');
    let commentLines = comment.split('\n').filter(line=>line!="");
    commentLines.forEach((line)=>{
        commentContainer.contains(line);
    });
});