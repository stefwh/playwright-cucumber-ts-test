Feature: User Authentication tests

    Background: 
        Given User navigates to the application
        Given User clicks on login link

    Scenario: Successful login with valid credentials
        And User enters the username as "swtef"
        And User enters the password as "Stego123!"
        When User clicks on the login button
        Then Login should be successful

    Scenario: Unsuccessful login with invalid credentials
        And User enters the username as "or111i"
        And User enters the password as "Pas111134"
        When User clicks on the login button
        Then Login should not be successful