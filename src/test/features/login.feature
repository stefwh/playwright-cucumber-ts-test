Feature: User Authentication tests

    Background: 
        Given Navigate to the application
        Given Click on login link

    Scenario: Successful login with valid credentials
        And Enter the username as "swtef"
        And Enter the password as "Stego123!"
        When Click on the login button
        Then Login is successful

    Scenario: Unsuccessful login with invalid credentials
        And Enter the username as "or111i"
        And Enter the password as "Pas111134"
        When Click on the login button
        Then Login is not successful