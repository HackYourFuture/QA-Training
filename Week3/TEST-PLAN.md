**_Feature_**: Signing in

**Scenario**: Sign in with valid credentials
_Given_ the user is already at the sign in page
_When_ the user enters valid email address
_And_ the user enters the valid password
_And_ the user clicks on 'Sign in'
_Then_ the user should be redirected to 'Your Feed' page

**Scenario**: Sign in with empty credentials
_Given_ the user is already at the sign page
_When_ the user leaves the credentials fields empty
_And_ the user clicks on 'Sign in'
_Then_ the user should see an error message "email or password is invalid"

**Scenario**: Sign in with invalid credentials
_Given_ the user is already at the sign in page
_When_ the user enters invalid email address
_And_ the user enters valid password
_And_ the user clicks on 'Sign in'
_Then_ the user should see an error message "email or password is invalid"

**Scenario**: Sign in with incomplete email address
_Given_ the user is already at the sign in page
_When_ the user enters an incomplete email address i.e.: missing '@'  
_And_ the user enters valid password
_And_ the user clicks on 'Sign in'
_Then_ the user should see a hint to type a complete address
