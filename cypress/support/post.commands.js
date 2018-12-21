Cypress.Commands.add('openPostByIndex', (index)=>{
    return cy.get('#feedList .feedItem .postTitle').eq(index).click();
});

Cypress.Commands.add('checkPostContentTypeByIndex', (index, type)=>{
    if (type === 'image') {
        cy.openPostByIndex(index);
        cy.get('#feedList .feedItem').eq(index).find('.feedItemContent').find('img');
    }
    if (type === 'hosted:video') {
        cy.openPostByIndex(index);
        cy.get('#feedList .feedItem').eq(index).find('.feedItemContent').find('video');
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
    cy.get('#feedList .feedItem').eq(index).contains(title);
});

Cypress.Commands.add('checkPostCommentsByIndex', (index, comment)=>{
    cy.openPostByIndex(index);
    let commentContainer = cy.get('#feedList .feedItem').eq(index).find('.commentsContainer');
    let commentLines = comment.split('\n').filter(line=>line!="");
    commentLines.forEach((line)=>{
        commentContainer.contains(line);
    });
});