describe('OrangeHRM Login Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    it.only('Deve fazer o login com sucesso e acessar o Dashboard', () => {
        
        const user = 'Admin';
        const password = 'admin123';

        cy.get('input[name="username"]').type(user);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/dashboard/index');
        cy.contains('Dashboard').should('be.visible');
    });
});