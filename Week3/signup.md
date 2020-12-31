<span style="color:blue">Feature:</span> Checking the sign up functionality on sign up page.

<span style="color:blue">Background:</span>
<span style="color:blue">Given</span> I am entering the sign up page


<span style="color:blue">Scenario:</span> Filling the form with valid data
<span style="color:blue">When</span> I enter a valid username
<span style="color:blue">And</span> I enter a valid email
<span style="color:blue">And</span> I enter a valid password
<span style="color:blue">And</span>I click the Sign in button
<span style="color:blue">Then</span> I will be redirected to the homepage

<span style="color:blue">Scenario:</span> Filling the form with an existing user name and valid email, password
<span style="color:blue">When</span> I enter the existing username
<span style="color:blue">And</span> I enter a valid email
<span style="color:blue">And</span> I enter a valid password
<span style="color:blue">And</span> I click the sign in button
<span style="color:blue">Then</span> I will see the notification says "username has already been taken"
       
<span style="color:blue">Scenario:</span> Filling the form with an invalid password (less than 8 characters) and valid username, email
<span style="color:blue">When</span> I enter the valid username
<span style="color:blue">And</span>I enter a valid email
<span style="color:blue">And</span> I enter a password with 7 characters
<span style="color:blue">And</span> I click the sign in button
<span style="color:blue">Then</span>  I will see the notification says "password is too short (minimum is 8 characters)"

<span style="color:blue">Scenario:</span> Filling the form with a empty username and valid email, password
<span style="color:blue">When</span> I leave the username input empty
<span style="color:blue">And</span>I enter a valid email
<span style="color:blue">And</span> I enter a valid password
<span style="color:blue">And</span> I click the sign in button
<span style="color:blue">Then</span>  I will see the notification says "username can't be blankis too short (minimum is 1 character)"


<span style="color:blue">Scenario:</span> Filling the form with an invalid email and valid username, password
<span style="color:blue">When</span>  I enter a valid username 
<span style="color:blue">And</span> I enter an invalid email without @ sign
<span style="color:blue">And</span> I enter a valid password 
<span style="color:blue">And</span> I click the sign in button
<span style="color:blue">Then</span>  I will see the notification says "Please include an '@' in the email address"



    



