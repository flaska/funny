Cypress.Commands.add('openPostByIndex', (index)=>{
    cy.get('#feedList .feedItem .postTitle').eq(index).click();
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

Cypress.Commands.add('checkPostTitleByIndex', (index, title)=>{
    cy.get('#feedList .feedItem').eq(index).contains(title);
});

Cypress.Commands.add('checkPostCommentsByIndex', (index, comment)=>{
    cy.openPostByIndex(index);
    cy.get('#feedList .feedItem').eq(index).find('.commentsContainer').contains(comment);
});