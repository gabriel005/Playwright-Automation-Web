@site  @buy
Feature: Cenários de Login no site saucedemo

@item_add
Scenario: Adição de produtos do carrinho
    Given que eu estou na página de produtos
    When clico para adicionar um produto no carrinho
    When clico em carrinho
    Then eu devo ver o produto adicionado no carrinho

@item_remove
Scenario: Remoção de produtos do carrinho
    Given que eu estou na página de produtos
    Given que tenho um produto adicionado
    When clico em carrinho
    When clico em remover produto
    Then eu devo ver o produto removido no carrinho
    