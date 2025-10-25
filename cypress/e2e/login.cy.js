/// <reference types="cypress"/>

describe('Funcionalidade 02: Login', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
    })

    afterEach(() => {
        cy.screenshot()
    })

    // OK
    it('CT-01 - Não Deve fazer o login com email case sensitive', () => {

        cy.login('Anelise@email.com.br', 'Teste456@')
        cy.get('div.alert').should('contain', 'Problemas com o login do usuário')
    
    })

    // OK
    it('CT-02 - Não Deve fazer o login com e-mail incorreto', () => {
      
        cy.login('nelise@email.com.br', 'Teste456@')
        cy.get('div.alert').should('contain', 'Problemas com o login do usuário')
    
    })
    
    // OK
    it('CT-03 - Não Deve fazer o login com e-mail preenchidos com espaço', () => {
      
        cy.login('    ', 'Teste456@')
        cy.get('div.alert').should('contain', 'Email é um campo obrigatório')
    
    })
  
    // OK
    it('CT-06 - Deve fazer o login com dados corretos', () => { 
      
      cy.login('anelise@email.com.br', 'Teste456@')
      cy.get('div.alert').should('contain', 'Bem vindo, Anelise!')

    })
})