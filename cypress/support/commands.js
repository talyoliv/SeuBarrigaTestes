// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('preencherCadastro', (nome, email, senha) => { 

    if (nome) {
        cy.get('[name="nome"]').type(nome)
    } else {
        cy.get('[name="nome"]').should('be.empty')
    }

    cy.get('[name="email"]').type(email)
    cy.get('[name="senha"]').type(senha)
    cy.get('input.btn').click()
})
 
Cypress.Commands.add('login', (email, senha) => { 
    
    cy.get('[name="email"]').type(email)
    cy.get('[name="senha"]').type(senha)
    cy.get('button.btn').click()

})

Cypress.Commands.add('criarConta', (email, senha, nomeConta) => { 

    // Realiza o Login
    cy.login(email, senha)
    cy.get('div.alert').should('contain', 'Bem vindo')

    // Cria Conta
    cy.visit('https://seubarriga.wcaquino.me/addConta')

    if (nomeConta) {
        cy.get('[name="nome"]').type(nomeConta)
    } else {
        cy.get('[name="nome"]').should('be.empty')
    }

    cy.get('button.btn').click()

})




