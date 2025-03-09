@site  @checkout
Feature: Checkout Scenarios

@checkout_fail
Scenario: Error validation when trying to checkout without filling in the required fields
    Given I am on the checkout page
    When I click the Continue button
    Then I should see the error message in the form "Error: First Name is required"

@checkout_finish
Scenario: Successful checkout completion
    Given I am on the checkout page
    When I fill in all the details
    When I click the Continue button
    When I click the Finish button
    Then I should see the success message "Thank you for your order!"
