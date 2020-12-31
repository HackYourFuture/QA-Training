

**Feature**: Login functionality check\
As a tester \
I want to test login feature\
To verify whether customers can log in or not\
In order to check their profile and orders

**Scenario**:  Successful login\
**Given** visit the home page of Bol website https://www.bol.com/ \
**And** navigate to login Page\
**When** fill "Email" with “wasim13@gmail.com”\
**And** fill "Password" with "123456WM"\
**And** click "Login" button\
**Then** login is successful\
**And** I am navigated to “my profile” page\
**And** I should see the "Log out" button 
## 


**Scenario**:  Unsuccessful login using invalid username or password \
**Given** visit the home page of Bol website https://www.bol.com/ \
**And** navigate to login Page \
**When** fill "Email" with “Wasim@mail.co” \
**And** fill "Password" with "21312D21" \
**And** click "Login" button \
**Then** login is unsuccessful \
**And** page should contain “wrong username or password”
##

**Scenario**:  Unsuccessful login using valid username and not filling password \
**Given** visit the home page of Bol website https://www.bol.com/ \
**And** navigate to login Page \
**When** fill "Email" with “wasim13@gmail.com” \
**And** fill "Password" with" \
**And** click "Login" button \
**Then** login is unsuccessful \
**And** page should contain “please fill your password”
##


**Scenario**:  Unsuccessful login using valid username and weak password \
**Given** visit the home page of Bol website https://www.bol.com/ \
**And** navigate to login Page \
**When** fill "Email" with “wasim13@gmail.com” \
**And** fill "Password" with "123" \
**And** click "Login" button \
**Then** login is unsuccessful \
**And** page should contain “password should be at least 8 characters and content at least one big letter”

