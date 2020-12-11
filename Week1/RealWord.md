# Shared Testing Activities

### Home page displays the same content ( Your Feed, Global Feed )
- Both application display the same content in the home page. 'your feed' and 'global feed' buttons working correctly. Clicking global feed and your feed render the content as expected in the first page load but refreshing your feed does not display the data.

### New Post form
- New Post form is accessible from different location of the applications. Form expects the same data with different labels. Saving or puslihing the post button creates a new post. 

### Follow button on the article page
- Both User pages in these applications have follow buttons and the clicking that button works as expected. After clicking follow button your feed displayed the articles belongs the followed user.

### Displaying single article
- Both page displayes the single article. Adding comment works as expected. But deleting comment is only working for mobile application since it does not work on web application.

# Unique Testing Activities For Mobile App

### Home page load since it does not have pagination.
- Home page/Global Feed is loaded as expected. Scrolling down displayes more articles and during the load page displayes a spinner to notify the user.

### Resetting backend url from the settings page.
- Settings page has a form to reset or change the backend url. Save and Reset button works as expected. Url validation also works good. The application displays an error if the url is not valid.

### Displaying about page
- Clicking about button displays the application information in a modal. And close button on the modal works.

### Logout button on the sidebar.
- Clicking logout button works as expected.

### + icon on the right bottom edge of the screen.
- Clicking + icon navigates user to the add article page. 

### Notification
- Mobile application has easy readable notifications on the actions of the user since the other application does not have it. It is displayed when the user clicks the logout button or the backend url is not valid or when the user creates a new article.

### Functionality of side navigation(drawer).
- Clicking hamburger menu icon opens the drawer. And clicking the backdrop closes the drawer as expected.

# Unique Testing Activities For Web App

### Pagination
- Clicking pagination buttons works and gets the new page with the selected number. But refreshing the page does not keep the selected page and displays the your feed tab instead.

### New Post button on the navigation bar
- Clicking New Post button navigates the user to the Add new article page.

### Popular Tags on the home page
- Popolar tags displayes the dupplicated content. Clicking the tag works and displayed the selected tag next to the global feed tab and renders the content as expected.

### Favourite(like) button on the Global feed tab
- Global feeds display the favourite(like) button for each article since it is not displayed in the other application.

### "or click here to logout" button in the settings page.
- Clikcing the button works as expected.





