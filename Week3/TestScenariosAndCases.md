**Test Cases for LogIn Scenario of Khan Academy Website**

|Case ID| Test Case Description | Expected Results | Actual Result | Pass/Fail |
| --- | --- | --- | --- | --- |
|KHA_001| 	Check system behavior when valid email id and password is entered | Logged in | - | - |
|KHA_002 | 	Check system behavior when invalid email id and valid password is entered. | User cannot log in: error message displayed | - | - |
|KHA_003 | 	Check system behavior when valid email id and invalid password is entered. |  User cannot log in: error message displayed | - | - |
|KHA_004 | 	Check Forgot your password is working as expected | The link is clickable showing change password form | - | - |


** These test cases can be written in BDD using Gherkin as follows:**

**Feature: User can log in to Khan Academy Website and start learning**


**- Scenario**: User enter correct login credentials


  Given I visit "/login"


  When I enter "FatmaSalah@gmail.com" in the "user name" field


And I enter "tester" in the "password" field


And I press the "login" button

Then I should be logged in Khan Academy.



**- Scenario** User enter Incorrect login credentials


  Given I visit "/login"


  When I enter "FatmaSalah11@gmail.com" in the "user name" field


  And I enter "tester" in the "password" field


  And I press the "login" button


  Then I should not be logged in Khan Academy.


**- Scenario**User enter Incorrect login credentials
  
  
  Given I visit "/login"


  When I enter "FatmaSalah@gmail.com" in the "user name" field


   And I enter "tester111" in the "password" field


  And I press the "login" button


  Then I should not be logged in Khan Academy.


**- Scenario**User want to reset password to access Khan Academy


  Given I visit "/login"


  When I click "forgot password" link


  Then I should see the "change password" form.