@site  @checkout
Feature: Cenários de Checkout

@checkout_fail
Scenario: Validação de erro ao tentar finalizar sem preencher os campos obrigatórios
    Given que eu estou na página de checkout
    When clico no botão de Continue
    Then eu devo ver a mensagem no formulario de erro "Error: First Name is required"

@checkout_finish
Scenario: Finalização da compra com sucesso
    Given que eu estou na página de checkout
    When preencho todos os dados
    When clico no botão de Continue
    When clico no botão de Finish
    Then eu devo ver a mensagem de sucesso "Thank you for your order!"
    