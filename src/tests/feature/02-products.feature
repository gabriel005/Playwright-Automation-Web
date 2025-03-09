@site  @products
Feature: Navigation and Products Scenarios

@products_list
Scenario: Product listing verification
    Given I am on the login page
    When I attempt to log in with the username "standard_user" and password "secret_sauce"
    Then I should see the product list on the main page

@products_order
Scenario: Product sorting
    Given I am on the product page
    When I click to sort a product by price
    Then I should see the prices from lowest to highest

@products_details
Scenario: Accessing a product detail page
    Given I am on the product page
    When I click to view the details of a product
    Then I should see the selected product's details page
