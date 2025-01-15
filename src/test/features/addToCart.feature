Feature: Adding products to cart

    Background: 
        Given Navigate to the application
        Given Click on login link

    Scenario: Add a product to the cart
        And Enter the username as "swtef"
        And Enter the password as "Stego123!"
        And Click on the login button
        And Search for the book "Roomies"
        When Add the book to the cart
        Then The cart badge number is "1"
    