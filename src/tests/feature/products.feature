@products
Feature: Cenários de Navegação e Produtos

@products_list
Scenario: Verificação da listagem de produtos
    Given que eu estou na página de login
    When eu tento fazer login com o usuário "standard_user" e senha "secret_sauce"
    Then eu devo ver a lista de produtos na pagina principal

@products_order
Scenario: Ordenação de produtos
    Given que eu estou na página de produtos
    When clico para ordernar um produto por preço
    Then eu devo ver os preços do menor pro maior

@products_details
Scenario: Acesso à página de detalhes de um produto
    Given que eu estou na página de produtos
    When clico para visualizar os detalhes de um produto
    Then eu devo ver a pagina de detalhes do produto selecionado