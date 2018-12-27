describe('Left Menu Settings', function() {
    it('Has left menu & sees only default feeds', function() {
        cy.homepage();
        cy.get('#openLeftMenu').click();
        cy.hasTextsIn(['Funny','Aww','Facepalm','Comics'], '#leftMenu');
        cy.hasNoTextsIn(['Science','World News'], '#leftMenu');
    });

    it('Has left menu settings dialog', ()=>{
        cy.get('#openLeftMenuSettings').click();
        cy.hasTextsIn(['Funny','Aww','Facepalm','Comics', 'Science','World News'], '#leftMenuSettingDialog');
    });

    it('Appropriate checkboxes are checked', ()=>{
        let checked = ['funny', 'aww', 'comics', 'facepalm'];
        checked.forEach(tag=>{
            cy.get('#leftMenuSettings_'+tag).should('be.checked');
        });
        let unchecked = ['science', 'worldnews', 'todayilearned'];
        unchecked.forEach(tag=>{
            cy.get('#leftMenuSettings_'+tag).should('not.be.checked');
        });
    });

    it('Should be able to select science', ()=>{
        cy.get('#leftMenuSettings_science').click();
        cy.get('#leftMenuSettings_science').should('be.checked');
        cy.get('#leftMenuSettings_save').click();
    });

    it('Should save and update feed options', ()=>{
        cy.hasTextsIn(['Funny','Aww','Facepalm', 'Comics', 'Science'], '#leftMenu');
    });

    it('Should show science feed', ()=>{
        cy.get('#leftMenu').contains('Science').click();
    });

    it('Can view "link"', function() {
        cy.findPostByType('science', 'hot', 'link').then((result)=>{
            cy.checkPostExternalContentOpenByIndex(result.index, result.post.url);
        });
    });
});