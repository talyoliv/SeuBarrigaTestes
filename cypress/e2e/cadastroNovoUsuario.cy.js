/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade 01: Cadastrar Novo Usuário', () => {
  let email;
  let nome;
  let senha;

  beforeEach(() => {
    cy.visit('/')
    email = faker.internet.email().toLowerCase();
    nome = faker.person.firstName();
    senha = faker.internet.password();
  })

  afterEach(() => {
    cy.screenshot()
  })  
  
  // OK
  it('CT-01 - Deve fazer o cadastro com todos os campos válidos', () => {    
    
    cy.preencherCadastro(nome, email, senha)
    cy.get('div.alert').should('contain', 'Usuário inserido com sucesso')

  })

  // OK
  it('CT-02 - Não Deve fazer o cadastro de e-mail inválido sem @', () => {
    
    cy.preencherCadastro(nome, 'adao.com.br', senha)
    
    // Verifica se aparece um div com a mensagem - "Inclua um "@" no endereço de e-mail. "adao.com.b" está com um "@" faltando."
    cy.get('form div:nth-child(3)').should('be.visible')

    // verifica mensagens nativas do browser 
    cy.get('[name="email"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false
      expect($input[0].validationMessage).to.contain('@')
    })    

  })

  // OK
  it('CT-03 - Não Deve fazer o cadastro de e-mail com caracteres inválidos', () => {

    cy.preencherCadastro(nome, 'Adão@teste.com.br', senha)

    // Verifica se aparece um div com a mensagem - Uma parte seguida por "@" não deve conter o símbolo "ã".
    cy.get('form div:nth-child(3)').should('be.visible')

    // verifica mensagens nativas do browser
    cy.get('[name="email"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false
      expect($input[0].validationMessage).to.contain('ã')
    })  
    
  })

  //FALHA - BUG Conhecido - Erro - Está fazendo o Cadastro
  it('CT-04 - BUG conhecido - Não Deve fazer o cadastro de e-mail sem domínio (.com)', () => {

    cy.preencherCadastro(nome,`nome${Date.now()}@teste`, senha)
    cy.get('div.alert').should('not.contain', 'Usuário inserido com sucesso')

  })

  //OK
  it('CT-05 - Não Deve fazer o cadastro com e-mail já cadastrado', () => {
 
    cy.preencherCadastro('Anelise', 'anelise@email.com.br', 'Teste456@')
    cy.get('div.alert').should('contain', 'Endereço de email já utilizado')  
    
  })

  // OK
  it('CT-06 - Não Deve fazer o cadastro com nome em branco', () => {

    cy.preencherCadastro('', email, senha)
    cy.get('div.alert').should('contain', 'Nome é um campo obrigatório')

  })

  //FALHA - BUG Conhecido -  Erro - Está fazendo o Cadastro
  it('CT-07 - BUG conhecido - Não Deve fazer o cadastro dos campos Nome e Senha preenchidos com espaços', () => {

    cy.preencherCadastro('    ', email, '    ')
    cy.get('div.alert').should('not.contain', 'Usuário inserido com sucesso')

  })

  //FALHA - BUG Conhecido -  Erro - Está fazendo o Cadastro
  it('CT-08 - BUG conhecido - Não Deve fazer o cadastro com caractere especial no campo Nome', () => {
  
    cy.preencherCadastro('Fernando_123@', email, senha)
    cy.get('div.alert').should('not.contain', 'Usuário inserido com sucesso')

  })

  //FALHA - BUG Conhecido -  Erro - Está fazendo o Cadastro
  it('CT-11 - BUG conhecido - Não Deve fazer o cadastro com senha fraca', () => {

    cy.preencherCadastro(nome, email, '1234')
    cy.get('div.alert').should('not.contain', 'Usuário inserido com sucesso')

  })

  //FALHA - BUG Conhecido -  Erro - Está fazendo o Cadastro
  it('CT-12 - BUG conhecido - Não Deve fazer o cadastro de senha sem atingir mínimo de 6 caractere', () => {

    cy.preencherCadastro(nome, email, '1')
    cy.get('div.alert').should('not.contain', 'Usuário inserido com sucesso')

  })

  //FALHA - BUG Conhecido -  Erro - Está fazendo o Cadastro
  it('CT-13 - BUG conhecido - Não Deve fazer o cadastro de senha passando o máximo de 20 caractere', () => {

    cy.preencherCadastro(nome, email, '0123456789abcdefghijklmnopqrstuvxz6')
    cy.get('div.alert').should('not.contain', 'Usuário inserido com sucesso')

  })  

})






