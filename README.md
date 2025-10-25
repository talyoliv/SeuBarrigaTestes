# SeuBarrigaTestes
Testes do site Seu Barriga - Projeto Atlântico Avanti Bootcamp 2025.3

# 🧪 Projeto de Testes - Bootcamp QA Avanti

Este repositório contém os testes manuais e automatizados desenvolvidos durante o Bootcamp de QA da Avanti.  
O projeto teve como objetivo aplicar práticas de garantia de qualidade, documentação, mapeamento de fluxo, escrita de casos de teste e automação utilizando **Cypress**.

---

## 🚀 Funcionalidades Testadas

- Cadastro de usuário
- Login e autenticação
- Cadastro e gerenciamento de contas
- Criação, edição e exclusão de movimentações financeiras
- Visualização de resumo mensal

---

## ✅ Resultados dos Testes

| Tipo de Teste       | Quantidade | Status  |
|--------------------|-----------:|--------|
| Casos de Teste     | 55         | Criados e Executados |
| Testes Aprovados   | 43         | ✅ Sucesso |
| Testes Reprovados  | 12         | ❌ Necessitam correção |
| Cobertura Geral    | 78,2%      | 📊 Estável |

Prioridade dos cenários:
- **Alta:** 21 casos
- **Média:** 24 casos
- **Baixa:** 10 casos

---

## 🔄 Fluxo do Usuário (Visão Geral)

```mermaid
flowchart LR
A[Cadastro do Usuário] --> B[Login]
B --> C[Gerenciar Contas]
C --> D[Registrar Movimentação]
D --> E[Visualizar Resumo Mensal]

