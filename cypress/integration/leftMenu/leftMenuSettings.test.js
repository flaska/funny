describe('Left Menu Settings', function() {
    it('Has left menu & sees only default feeds', function() {
        cy.homepage();
        cy.get('#openLeftMenu').click();
        cy.hasTextsIn(['Funny','Aww', 'History'], '#leftMenu');
        cy.hasNoTextsIn(['Pics'], '#leftMenu');
    });

    it('Has left menu settings dialog', ()=>{
        cy.get('#openLeftMenuSettings').click();
        cy.hasTextsIn(['Funny','Aww', 'History', 'Pics'], '#leftMenuSettingDialog');
    });

    it('Appropriate checkboxes are checked', ()=>{
        let checked = ['funny', 'aww', 'history'];
        checked.forEach(tag=>{
            cy.get('#leftMenuSettings_'+tag).should('be.checked');
        });
        let unchecked = ['pics'];
        unchecked.forEach(tag=>{
            cy.get('#leftMenuSettings_'+tag).should('not.be.checked');
        });
    });

    it('Should be able to select pics', ()=>{
        cy.get('#leftMenuSettings_pics').click();
        cy.get('#leftMenuSettings_pics').should('be.checked');
        cy.get('#leftMenuSettings_save').click();
    });

    it('Should save and update feed options', ()=>{
        cy.hasTextsIn(['Funny','Aww', 'Pics'], '#leftMenu');
    });

    it('Should show pics feed', ()=>{
        cy.get('#leftMenu').find('#leftMenu_changeSourceLink_pics').click({force: true});
    });

});