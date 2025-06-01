describe('OrangeHRM Testes de funcionário', () => {
    beforeEach(() => {
        cy.login();
    })

    it.only('Acessa o menu e busca um funcionário pelo nome', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').should('be.visible').type('John')
        cy.wait(1200);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.wait(1000);
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row', { timeout: 10000 }).should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(2000);
    });

    it.only('Acessa o menu e busca um funcionário pelo nome completo', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').should('be.visible').type('Max Verstappen')
        cy.wait(1200);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.wait(1000);
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row', { timeout: 10000 }).should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(2000);
    });

    it.only('Acessa o menu e busca um funcionário pelo ID', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.get(':nth-child(2) > .oxd-input').should('be.visible').type('761');
        cy.wait(1200);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.wait(1000);
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row', { timeout: 10000 }).should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(2000);
    })
});