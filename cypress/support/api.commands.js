
Cypress.Commands.add('findPostByType', (subreddit, feed, type)=>{
    cy.getFeed(subreddit, feed, 0, 20).then((response)=>{
        let result;
        response.body.posts.forEach((postData, index)=>{
            if (postData.type === type && !result) result  = {post: postData, index: index};
        });
        return result;
    });
});

Cypress.Commands.add('getFeed', (subreddit, feed, from, size)=>{
    return cy.request(`http://localhost:4000/api/reddit/feed?subreddit=${subreddit}&channel=${feed}&from=${from}&size=${size}`);
});


Cypress.Commands.add('getComments', (postId)=>{
    return cy.request(`http://localhost:4000/api/reddit/comments?postId=${postId}`);
});