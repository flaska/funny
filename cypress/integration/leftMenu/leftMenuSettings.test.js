describe('Left Menu Settings', function() {
    it('Has left menu & sees only default feeds', function() {
        cy.homepage();
        cy.get('#openLeftMenu').click();
        cy.hasTextsIn(['Funny','Aww','Videos','Pics','Gaming'], '#leftMenu');
        cy.hasNoTextsIn(['Science','World News'], '#leftMenu');
    });

    it('Has left menu settings dialog', ()=>{
        cy.get('#openLeftMenuSettings').click();
        cy.hasTextsIn(['Funny','Aww','Videos','Pics','Gaming', 'Science','World News'], '#leftMenuSettingDialog');
    });

    it('Appropriate checkboxes are checked', ()=>{
        let checked = ['funny', 'aww', 'pics', 'videos'];
        checked.forEach(tag=>{
            cy.get('#leftMenuSettings_'+tag).should('be.checked');
        });
        let unchecked = ['science', 'worldnews', 'todayilearned'];
        unchecked.forEach(tag=>{
            cy.get('#leftMenuSettings_'+tag).should('not.be.checked');
        });
    });
});