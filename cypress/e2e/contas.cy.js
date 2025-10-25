/// <reference types="cypress"/>

describe('Funcionalidade 03: Contas', () => {
    let conta = `Aluguel${Date.now()}`

    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
    })
  
    afterEach(() => {
        cy.screenshot()
    })

  // OK
  it('CT-01- Deve fazer a criação de conta', () => {    
    
    cy.criarConta('anelise@email.com.br', 'Teste456@', conta)
    cy.get('div.alert').should('contain', 'Conta adicionada com sucesso!')

  })

   // OK
  it('CT-05- Não Deve fazer a criação de conta sem preencher o campo Nome', () => {
    
    cy.criarConta('anelise@email.com.br', 'Teste456@', '')
    cy.get('div.alert').should('contain', 'Informe o nome da conta')

  })

  // OK
  it('CT-06- Não Deve fazer a criação de conta com nome de conta já cadastrado', () => {    
    
    cy.criarConta('anelise@email.com.br', 'Teste456@', 'Luz')
    cy.get('div.alert').should('contain', 'Já existe uma conta com esse nome!')

  })

})