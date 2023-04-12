### Authentication- `It is a process using which we can uniquely identify users on our application. This process tells us about who the user is. The general signup/login/logout flow is used to authenticate a user.`


### Autherisation - `It is a process using which we can identify the capabilities of a user, ie what a user can do on our application.` 

### How to do authentication
- 1 Mobile Number 
- 2 OmniAuth -> gmail/fb/github
- 3 Token based

## Token Based Authentication(JWT)
- Client sends email and password to server and server checks if it have the user with this email or not then it compare password and genrate a unique token and sends the token back to the client as response.
- We generate JWT(json web tokens) to verify whether the user is same for we generated the token or not.
- Client sends the token to server
- We set the expiry date of the token also. 