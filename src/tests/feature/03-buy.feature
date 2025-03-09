@site  @buy
Feature: Login scenarios on saucedemo site

@item_add
Scenario: Adding products to the cart
    Given I am on the product page
    When I click to add a product to the cart
    When I click on the cart
    Then I should see the added product in the cart

@item_remove
Scenario: Removing products from the cart
    Given I am on the product page
    Given I have a product added
    When I click on the cart
    When I click to remove the product
    Then I should see the removed product in the cart
