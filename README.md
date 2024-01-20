# Dummy Authentication

This project is a simple implementation of dummy authentication using the API provided at https://dummyjson.com/docs/auth. The project includes a login UI and a profile page.

## Task

The task is to take the username and password from the user and then on click of the login button, send a POST request at the API given in the link above. If the response is 200 OK, then save the entire user object including token and the id in local storage and send the user to the profile page.

Inside the profile page, a useEffect sends a fetch request at `https://dummyjson.com/users/${id}`, where id is the id you saved in the local storage. Save the user object with all the details using local storage again and display all of the information you receive.

## Dummy Credentials

Use any one of the usernames and passwords given below to actually log in and get a successful response. If the response is not 200 OK or successful then show the error provided by the API in the frontend on login.

- Username: atuny0, Password: 9uQFF1Lh
- Username: hbingley1, Password: CQutx25i8r
- Username: rshawe2, Password: OWsTbMUgFc

You can get more valid usernames and password from https://dummyjson.com/users.

## UI Reference

The UI reference can be found at Figma Link.

## Marking Scheme (100 Marks)

- Dummy authentication execution (10 marks)
- Login UI and profile page creation (20 marks)
- Username and password handling (15 marks)
- Saving user object and navigating to the profile page (15 marks)
- Fetching user details in the profile page (15 marks)
- Displaying user information (15 marks)
- Deployment (10 Marks)
