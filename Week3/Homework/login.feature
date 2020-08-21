Feature: User signing in

    Background: 
    Given I am on the "/login" page

    Scenario: entering valid Email address & Password
    When I enter a valid email address in the email input field
    And I enter a valid password in the password input field
    And I click the "sign in" button
    Then I should be directed to the home page

    Scenario: entering Invalid email address & Password
    When I enter a invalid email address in the email input field
    And I enter a invalid password in the password input field
    And I click the "sign in" button
    Then I should see an error message says "email or password is invalid"

    Scenario: clicking "sign in" button with an empty email address  
    When I keep the email input field empty
    And I enter a valid password in the password input field
    And I click the "sign in" button
    Then I should see an error message says "email or password is invalid"

    Scenario: entering email address without @ sign
    When I enter an email address without the @ sign in the email input field
    And I click the "sign in" button
    Then I should see an alert message says "Please include '@' in the email address" 