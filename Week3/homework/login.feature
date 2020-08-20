Feature: Login

    Background:
        Given I visit "/login" page

    Scenario: login with valid credentials
        When I fill "hyf_tester@gmail.com" in the "Email" field
            And I fill "HYFtester1" in the "Password" field
            And I click the "Sign In" button
        Then I should be on the users "Home" page

    Scenario: login with invalid credentials
        When I fill "hyf_test@gmail.com" in the "Email" field
            And I fill "HYFtester1" in the "Password" field
            And I click the "Sign In" button
        Then I should see "email or password is invalid" warning

    Scenario: login with empty data 
        When I leave blank the login fields
        Then I should see "email or password is invalid" warning

    Scenario: check "Need an account?" 
        When I click "Need an account?" link
        Then I should be on the users "Register/Sign Up" page
