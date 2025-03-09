@site  @login
Feature: Login Scenarios on the SauceDemo Website

@login_valid
Scenario: Valid login (correct username and password)
    Given I am on the login page
    When I attempt to log in with the username "standard_user" and password "secret_sauce"
    Then I should be redirected to the home screen
    
@login_invalid
Scenario: Invalid login (incorrect credentials)
    Given I am on the login page
    When I attempt to log in with the username "user" and password "wrongpassword"
    Then I should see the error message "Epic sadface: Username and password do not match any user in this service"

@login_blocked
Scenario: Blocked user account login
    Given I am on the login page
    When I attempt to log in with the username "locked_out_user" and password "wrongpassword"
    Then I should see the blocked message "Epic sadface: Sorry, this user has been locked out."
