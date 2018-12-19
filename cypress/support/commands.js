// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('homepage', ()=>{
    cy.visit('http://localhost:4001');
});

Cypress.Commands.add('getFeed', (subreddit, feed, from, size)=>{
    return cy.request(`http://localhost:4000/api/reddit/feed?subreddit=${subreddit}&channel=${feed}&from=${from}&size=${size}`);
});


Cypress.Commands.add('getComments', (postId)=>{
    return cy.request(`http://localhost:4000/api/reddit/comments?postId=${postId}`);
});

Cypress.Commands.add('checkPostContentTypeByIndex', (index, type)=>{
    // cy.get('#feedList .feedItem').eq(index).contains(comment);
});

Cypress.Commands.add('checkPostTitleByIndex', (index, title)=>{
    cy.get('#feedList .feedItem').eq(index).contains(title);
});

Cypress.Commands.add('checkPostCommentsByIndex', (index, comment)=>{
    cy.get('#feedList .feedItem').eq(index).find('.commentsContainer').contains(comment);
});

Cypress.Commands.add('findPostByType', (subreddit, feed, type)=>{
    cy.getFeed(subreddit, feed, 0, 10).then((response)=>{
        let result;
        response.body.posts.forEach((postData, index)=>{
            if (postData.type === type && !result) result  = {post: postData, index: index};
        });
        return result;
    });
});

Cypress.Commands.add('openPostByIndex', (index)=>{
    cy.get('#feedList .feedItem .postTitle').eq(index).click();
});
