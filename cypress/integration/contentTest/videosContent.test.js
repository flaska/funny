// describe('Videos - Content Test', function() {
//     before(function() {
//         cy.homepage();
//         cy.switchToFeed('Videos');
//         cy.getMorePosts();
//         cy.getMorePosts();
//     });
//
//     it('Can view "rich:video"', function() {
//         cy.switchToFeed('Videos');
//         cy.findPostByType('videos', 'hot', 'link').then((result)=>{
//             cy.checkPostExternalContentOpenByIndex(result.index, result.post.url);
//         });
//     });
//
// });