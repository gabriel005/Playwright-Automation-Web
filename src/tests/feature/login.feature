Feature: Login com credenciais inválidas

Scenario: Usuário tenta fazer login com credenciais inválidas
    Given que eu estou na página de login
    When eu tento fazer login com o usuário "user" e senha "wrongpassword"
    Then eu devo ver a mensagem de erro "Epic sadface: Username and password do not match any user in this service"
