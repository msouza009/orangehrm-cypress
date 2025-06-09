import { faker } from "@faker-js/faker";
import 'cypress-file-upload';

describe('Orange HRM Create User', () => {
    beforeEach(() => {
        cy.login();

    });

    it('Acessa o menu e cria um usuário', () => {
        const nome = faker.person.firstName();
        const nomeMeio = faker.person.middleName();
        const sobrenome = faker.person.lastName();
        const id = faker.string.numeric(3);

        cy.contains('PIM').click().should('be.visible');
        cy.contains('Add').click().should('be.visible');

        cy.fixture('img/dog.png', 'base64').then((imgBase64) => {
        cy.get('.employee-image').invoke( 'attr', 'src', `data:image/png;base64,${imgBase64}`)
    });
        cy.get('input[name="firstName"]').should('be.visible').type(nome);
        cy.get('input[name="middleName"]').should('be.visible').type(nomeMeio);
        cy.get('input[name="lastName"]').should('be.visible').type(sobrenome);
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type(id);
        cy.contains('Save').click().should('be.visible');
        
    });
});