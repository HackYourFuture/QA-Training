# Conduit application

## Login functionality test scenarios

**Feature:** Check user login functionality

Scenario: User login with valid data
$~$ Given user is on the login page
$~$ When user types valid data in the email field
$~$ And user types valid data in the password field
$~$ And user presses the "Signin" button
$~$ Then user will move to the personal home page

Scenario: User login with invalid data
$~$ Given user is on the login page
$~$ When user types invalid data in the email field
$~$ And user types invalid data in the password field
$~$ And user presses the "Signin" button
$~$ Then user will not move to the personal home page

Scenario: User login with empty data
$~$ Given user is on the login page
$~$ When user does not type in the email field
$~$ And user does not type in the password field
$~$ And user presses the "Signin" button
$~$ Then user will see "No email/password entered yet"

Scenario: User login with exceeding email data
$~$ Given user is on the login page
$~$ When user types 321 characters long data in the email field
$~$ And user types valid data in the password field
$~$ And user presses the "Signin" button
$~$ Then user will see "You exceeded the max. character for email field"

## Test results

| Test Case ID | Test Scenario                                  | Expected Results                                  | Actual Results  | Pass/Fail |
| ------------ | ---------------------------------------------- | ------------------------------------------------- | --------------- | --------- |
| Login01      | Check user login with **valid** data           | User should login into an application             | As expected     | Pass      |
| Login02      | Check user login with **invalid** data         | User should not login into an application         | As expected     | Pass      |
| Login03      | Check user login with **empty** data           | User should see an explanatory validation message | Not as expected | Fail      |
| Login04      | Check user login with **exceeding** email data | User should see an explanatory validation message | Not as expected | Fail      |
