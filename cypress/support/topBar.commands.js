Cypress.Commands.add('switchChannelTo', (desiredChannel)=>{
    cy.scrollTo(0);
    cy.get('#topBar').find('#cy_topBar_channelSelect').click();
    cy.get('#cy_topBar_channel_' + desiredChannel).click();
});