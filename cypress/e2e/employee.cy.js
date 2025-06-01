describe('OrangeHRM Testes de funcionário', () => {
    beforeEach(() => {
        cy.login();
    })

    it.only('Acessa o menu e busca um funcionário pelo nome', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.contains('Employee Name')    
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').should('be.visible').type('John')
        cy.wait(1000);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.wait(500);
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(1000);
    });

    it.only('Acessa o menu e busca um funcionário pelo nome completo', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.contains('Employee Name')    
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').should('be.visible').type('Max Verstappen')
        cy.wait(1000);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.wait(500);
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(1000);
    });

    it.only('Acessa o menu e busca um funcionário pelo ID', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.contains('Employee Id')
        cy.get(':nth-child(2) > .oxd-input').should('be.visible').type('761');
        cy.wait(1000);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.wait(500);
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(1000);
    })

    it.only('Acessa o menu e busca um funcionário pelo job title', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.contains('Job Title')
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown')
        .should('contain', 'QA Engineer')
        .contains('QA Engineer')
        .click();
        cy.wait(500);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(1000);
    });

    it.only('Acesse o menu e busca funcionário pela situação de emprego', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.contains('Employment Status')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown')
        .should('contain', 'Freelance')
        .contains('Freelance')
        .click();
        cy.wait(500);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(1000);
    })

    it.only('Acessa o menu e busca um funcionário pelo incluir', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.contains('Include')
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown')
        .should('contain', 'Current and Past Employees')
        .contains('Current and Past Employees')
        .click();
        cy.wait(500);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(1000);
    })

    it.only('Acessa o menu e  busca um funcionário pela suburnidade', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.contains('Supervisor Name')    
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown')
        .should('contain', 'Administration')
        .contains('Administration')
        .click();
        cy.wait(500);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(1000);
    })

    it.only('Acessa o menu e  busca um funcionário pelo emprego e situação do emprego', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.contains('Job Title')
        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown')
        .should('contain', 'Software Engineer')
        .contains('Software Engineer')
        .click();
        cy.contains('Employment Status')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        cy.get('.oxd-select-dropdown')
        .should('contain', 'Full-Time Permanent')
        .contains('Full-Time Permanent')
        .click();
        cy.wait(500);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible').click();
        cy.url().should('include', '/viewPersonalDetails');
        cy.get('.oxd-text--h6').should('contain', 'Personal Details');
        cy.wait(1000);
    })
    
    it.only('Busca nome inexistente', () => {
        cy.contains('PIM').click().should('be.visible');
        cy.contains('Employee Name')    
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').should('be.visible').type('Henrique Fantasma')
        cy.wait(500);
        cy.get('.oxd-form-actions > .oxd-button--secondary').click();
        cy.contains('No Records Found').should('be.visible');
    })
});