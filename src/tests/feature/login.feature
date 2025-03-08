@site  @login
Feature: Cenários de Login no site saucedemo

@login_valido
Scenario: Login válido (usuário e senha corretos)
    Given que eu estou na página de login
    When eu tento fazer login com o usuário "standard_user" e senha "secret_sauce"
    Then eu devo ser redirecionado para tela inicial
    
@login_invalido
Scenario: Login inválido (credenciais erradas)
    Given que eu estou na página de login
    When eu tento fazer login com o usuário "user" e senha "wrongpassword"
    Then eu devo ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"

@login_bloqueado
Scenario: Bloqueio de usuário com conta bloqueada
    Given que eu estou na página de login
    When eu tento fazer login com o usuário "user" e senha "wrongpassword"
    Then eu devo ver a mensagem de bloqueado "Epic sadface: Username and password do not match any user in this service"
