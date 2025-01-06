Feature: Adding products to cart

    Background: 
        Given User navigates to the application
        Given User clicks on login link

    Scenario: Add a product to the cart
        And User enters the username as "swtef"
        And User enters the password as "Stego123!"
        And User clicks on the login button
        And user searches for a "Roomies"
        When User adds the book to the cart
        Then the cart badge should get updated
    