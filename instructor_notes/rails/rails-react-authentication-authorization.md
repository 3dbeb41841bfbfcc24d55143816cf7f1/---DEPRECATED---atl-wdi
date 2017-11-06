# Authorization and Authentication (with React and Devise Token Auth)

## Learning Objectives
- Explain the purpose of User Authentication in web apps
- Explain the purpose of User Authorization in web apps
- Implement Authentication with Rails and React using Devise Token Auth
- Implement Authorization with Rails and React using CanCanCan

## Authentication and Authorization

When integrating any type of security into our web apps, we need to answer the following fundamental questions about our `Users`: 

- Who are they?
- What are they allowed to do?

These questions are so common that they have been given one-word names, respectively: `Authentication` and `Authorization`.

User `authentication` is the process of verifying which `User` is accessing our application. This often takes the form of storing and validating `User` IDs and passwords. Ensuring that this data is transmitted and stored safely and accurately can become very complex.

Once we have `authenticated` a `User`, we will then need to set up strict rules for which data and actions the `User` has access to. For example, we may not want a `User` to be able to delete another `User's` data. The process of managing and enforcing these rules is known as `authorization`.

## SecretPosts

To demonstrate the importance of authentication and authorization, we are going to build a site for `Users` to anonymously post their secret thoughts (kind of like [PostSecret](https://postsecret.com/).) Because of the need for `User` anonymity, it will be very important that we only let the right `User` perform certain actions on the site. Our first task will be verifying that a `User` is who they say they are (via `authentication`), and our second will be to prevent them from interfacing with other `Users'` data (via `authorization`.) 

```
A deployed example can be found here: https://afternoon-lowlands-61379.herokuapp.com
Email: bob_loblaw@lawblog.com
Password: blahblah
```


### Creating the Rails app:

To get started, we'll create a new Rails app:

```bash
$ rails new secret_posts -d postgresql --api
```

### Authentication with Devise Token Auth: Installation

Next we'll install [Devise Token Auth](https://github.com/lynndylanhurley/devise_token_auth) and its dependencies. This is a version of Devise that has been re-designed to work as an API for front-end Single Page Applications, rather than server-side rendered Rails apps. 

It will require a little bit of set-up for us on the React side, but we'll handle that in a few minutes.

First, let's add the following to our Gemfile:
	
```ruby
# ./Gemfile
gem 'devise'
gem 'omniauth'
gem 'devise_token_auth'
```

Then we'll install our dependencies using Bundler: 
	
```bash
$ bundle install
```
	
...and we'll create our database so we can set up some Devise users:
	
```bash
$ rails db:create
```	

### Devise Token Auth: Set Up

Devise provides some easy to use generators that will get us up and running quickly with secure `User` profiles. Let's run the following command to create a new User model with API routes that start with the `/auth` namespace:

```bash
$ rails g devise_token_auth:install User auth
```	
	
Before running a migration, lets configure some of the settings for `devise_token_auth`.  

By default, this library will reset it's `tokens` on every request that is made.  While this is very secure, it also will introduce a lot of headaches for us.  Let's turn off this feature for now. We can switch this off by going into `./config/initializers/devise_token_auth.rb` and change it to this.

```ruby
DeviseTokenAuth.setup do |config|
  config.change_headers_on_each_request = false
end
```
	
Additionally, `devise_token_auth` also tries to send a confirmation e-mail whenever a new `User` is created.  We can get rid of that by removing `:confirmable` from the `User` model.

```ruby
class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable # delete :confirmable from this line!
  include DeviseTokenAuth::Concerns::User
end
```

Run `rails db:migrate`. After we migrate, we should have the basic auth set up for our back end Rails server!

### Devise Endpoints

Let's take a minute to look at the endpoints that `devise_token_auth` has set up for us.  These are all explained in the docs.

| path | method | purpose |
|:-----|:-------|:--------|
| /    | POST   | Email registration. Requires **`email`**, **`password`**, and **`password_confirmation`** params. A verification email will be sent to the email address provided. Accepted params can be customized using the [`devise_parameter_sanitizer`](https://github.com/plataformatec/devise#strong-parameters) system. |
| / | DELETE | Account deletion. This route will destroy users identified by their **`uid`**, **`access_token`** and **`client`** headers. |
| / | PUT | Account updates. This route will update an existing user's account settings. The default accepted params are **`password`** and **`password_confirmation`**, but this can be customized using the [`devise_parameter_sanitizer`](https://github.com/plataformatec/devise#strong-parameters) system. If **`config.check_current_password_before_update`** is set to `:attributes` the **`current_password`** param is checked before any update, if it is set to `:password` the **`current_password`** param is checked only if the request updates user password. |
| /sign_in | POST | Email authentication. Requires **`email`** and **`password`** as params. This route will return a JSON representation of the `User` model on successful login along with the `access-token` and `client` in the header of the response. |
| /sign_out | DELETE | Use this route to end the user's current session. This route will invalidate the user's authentication token. You must pass in **`uid`**, **`client`**, and **`access-token`** in the request headers. |
| /:provider | GET | Set this route as the destination for client authentication. Ideally this will happen in an external window or popup. |
| /:provider/callback | GET/POST | Destination for the oauth2 provider's callback uri. `postMessage` events containing the authenticated user's data will be sent back to the main client window from this page. |
| /validate_token | GET | Use this route to validate tokens on return visits to the client. Requires **`uid`**, **`client`**, and **`access-token`** as params. These values should correspond to the columns in your `User` table of the same names. |
| /password | POST | Use this route to send a password reset confirmation email to users that registered by email. Accepts **`email`** and **`redirect_url`** as params. The user matching the `email` param will be sent instructions on how to reset their password. `redirect_url` is the url to which the user will be redirected after visiting the link contained in the email. |
| /password | PUT | Use this route to change users' passwords. Requires **`password`** and **`password_confirmation`** as params. This route is only valid for users that registered by email (OAuth2 users will receive an error). It also checks **`current_password`** if **`config.check_current_password_before_update`** is not set `false` (disabled by default). |
| /password/edit | GET | Verify user by password reset token. This route is the destination URL for password reset confirmation. This route must contain **`reset_password_token`** and **`redirect_url`** params. These values will be set automatically by the confirmation email that is generated by the password reset request. |

### Register a User
Let's use our new Devise paths to create a user.  We can test this in Postman by `POST`ing to `localhost:3000/auth` with an `email`, `password`, and `password_confirmation` (the docs tell us the required fields.)

A successful response should look something like this:

```json
{
    "status": "success",
    "data": {
        "id": 17,
        "email": "qwerty1@qwerty.com",
        "provider": "email",
        "uid": "qwerty1@qwerty.com",
        "name": null,
        "nickname": null,
        "image": null,
        "created_at": "2017-08-30T17:54:24.508Z",
        "updated_at": "2017-08-30T17:54:24.650Z"
    }
}
```

Here we can see the actual User object that is being saved to our Postgres database.  However, what we don't see here are the tokens necessary to show our server that we are a user that is signed in.  Those tokens are located in the Headers for the request.  Let's look at these in Postman

![](../images/headers.png)

There are 4 headers here that `devise_token_auth` gives us.

 * **client**: This header allows the use of simultaneous sessions on different clients (it can be open in more than one browser)
 * **expiry**: The date when the current session will expire, this is set to 2 weeks by default.
 * **uid**: A unique value that is used to identify the user. This is necessary because searching the DB for users by their access token will make the API susceptible to [timing attacks](https://codahale.com/a-lesson-in-timing-attacks/)
 * **access-token**: The access token is the representation of the user for each request. The hashed access-token is saved to the database and Devise validates that the client sends the same access token. This value is changed on every request, meaning that when you make a request with one access-token, a new one will be generated.

### Integrating Devise Token Auth with React

Now that we've seen what a token request looks like using Postman, let's try and add a React component that will do a similar thing.  Let's start out by creating a `Sign-Up & Log-In` component. 
 
First, we'll create a new React app in the `client` folder:

```bash
$ create-react-app client
```

Next, we'll add our set-up code to get everything running in our development environment:

```bash
# Procfile.dev 
web: sh -c 'cd client && PORT=3000 npm start'
api: rails s -p 3001
```

... and we'll install our dependencies:

```bash
$ npm install axios react-router-dom
```

Then we'll add our new `SignUpLogIn` component in `./client/src/components/SignUpLogIn.js`:

```js
// ./client/src/components/SignUpLogIn.js

import React, {Component} from 'react'

class SignUpLogIn extends Component {

    state = {
        email: '',
        password: '',
        password_confirmation: ''
    }

    signUp = (event) => {
        event.preventDefault()
        this.props.signUp(
            this.state.email,
            this.state.password,
            this.state.password_confirmation
        )
    }

    signIn = (event) => {
        event.preventDefault()
        this.props.signIn(
            this.state.email,
            this.state.password
        )
    }

    handleChange = (event) => {
        const newState = {...this.state}
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="email">E-mail: </label>
                        <input onChange={this.handleChange} type="text" name="email" value={this.state.email}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="password" name="password" value={this.state.password}/>
                    </div>
                    <div>
                        <label htmlFor="password_confirmation">Confirm Password: </label>
                        <input onChange={this.handleChange} type="password" name="password_confirmation"
                               value={this.state.password_confirmation}/>
                    </div>

                    <button onClick={this.signUp}>Sign Up</button>
                    <button onClick={this.signIn}>Log In</button>
                </form>
            </div>
        )
    }
}

export default SignUpLogIn
```

Let's go back to our App.js and add a `<Route>` for our SignUpLogIn component and some `signUp` and `signIn` functions. We'll explore this code in just a minute:

```jsx
// ./client/src/App.js

import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import axios from 'axios'

class App extends Component {

    state = {
        signedIn: false
    }

    signUp = async (email, password, password_confirmation) => {
        try {
            const payload = {
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
            await axios.post('/auth', payload)

            this.setState({signedIn: true})

        } catch (error) {
            console.log(error)
        }
    }

    signIn = async (email, password) => {
        try {
            const payload = {
                email,
                password
            }
            await axios.post('/auth/sign_in', payload)

            this.setState({signedIn: true})

        } catch (error) {
            console.log(error)
        }
    }

    render() {

        const SignUpLogInComponent = () => (
            <SignUpLogIn
                signUp={this.signUp}
                signIn={this.signIn}/>
        )

        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/signUp" render={SignUpLogInComponent}/>
                    </Switch>

                    {this.state.signedIn ? null : <Redirect to="/signUp"/>}
                </div>
            </Router>
        )
    }
}

export default App
```

If we break down the `App` component above, we won't see anything new. This component is simply assigning a `<SignUpLogIn />` component to the `/signUp` route and passing it some functions that make simple `axios` API calls. These endpoints were automatically generated for us through Devise Token Auth, and now we are free to simply call them!

### Adding Protected Data for a User

Now that we have our app wired up, let's add some protected `Posts` for our `User`. When we log in, we'll want to see only our `Posts` show up.

First, we'll create our `Post` model:

```bash
$ rails g model Posts title content user:references
```

```bash
$ rails db:migrate
```

Then, we'll tell the `User` model that it has some posts:

```ruby
class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :posts, dependent: :destroy
end
```

...and then we'll add some seeded `Posts` using `ffaker`:

```ruby
# ./Gemfile
gem 'ffaker'
```
```ruby
# ./db/seeds.rb
User.destroy_all

bob_loblaw = User.create!(
    email: 'bob_loblaw@lawblog.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

george_michael = User.create!(
    email: 'george.michael@bluth.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

3.times do
  bob_loblaw.posts.create!(
      title: FFaker::Book.title,
      content: FFaker::Book.description
  )
end

3.times do
  george_michael.posts.create!(
      title: FFaker::Book.title,
      content: FFaker::Book.description
  )
end
```
```bash
$ bundle install
```
```bash
$ rails db:seed
```

We should now be able to check out each `User's` data using `rails c`!

### Displaying Protected Posts with React

Now that each of our `Users` has their own posts in the database, we'll want to show them their posts once they've logged in. 

Before we can display this data, we'll need to build out a `PostsController` using Rails. Let's use the one below:

```ruby
# ./app/controllers/posts_controller.rb

class PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    @posts = current_user.posts

    render json: @posts
  end

  def show
    @post = Post.find(params[:id])

    render json: @post
  end

  def create
    @user = current_user
    @post = @user.posts.build(post_params)

    if @user.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find(params[:id])


    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id]).delete

    render status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end

```

... and we'll add our Rails routes as well: 

```ruby
# ./config/routes.rb

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  resources :posts
end
```

As we saw with server-side rendered Devise, there are a couple of helpers made available to our Rails controllers. At the top of the `PostsController`, `before_action :authenticate_user!` tells us to check for a signed-in `User`. Once the user has been verified, the `current_user` helper allows us to reference the `User` who is currently signed in. 

The `index` route on our `PostsController` is using this helper to return only the `Posts` for our `current_user`.

Let's make a call to our new API using `axios` and display these `Posts` in a `PostsList` component. We'll also add in a `<Redirect />` to a new `/posts` route when the `User` signs in:

```jsx 
// ./client/src/App.js

import React, {Component} from 'react'
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import SignUpLogIn from './components/SignUpLogIn'
import axios from 'axios'
import PostsList from "./components/PostsList";

class App extends Component {

    state = {
        signedIn: false,
        posts: []
    }

    async componentWillMount() {
        try {
            let posts = []
            if (this.state.signedIn) {
                posts = await this.getPosts()
            }

            this.setState({
                posts
            })
        } catch (error) {
            console.log(error);
        }
    }

    getPosts = async () => {
        try {
            const response = await axios.get('/posts')
            return response.data
        } catch (error) {
            console.log(error)
            return []
        }
    }

    signUp = async (email, password, password_confirmation) => {
        ...
    }

    signIn = async (email, password) => {
        try {
            const payload = {
                email,
                password
            }
            await axios.post('/auth/sign_in', payload)

            const posts = await this.getPosts()

            this.setState({
                signedIn: true,
                posts
            })

        } catch (error) {
            console.log(error)
        }
    }

    render() {

        const SignUpLogInComponent = () => (
            <SignUpLogIn
                signUp={this.signUp}
                signIn={this.signIn}/>
        )

        const PostsComponent = () => (
            <PostsList
                posts={this.state.posts}/>
        )

        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/signUp" render={SignUpLogInComponent}/>
                        <Route exact path="/posts" render={PostsComponent}/>
                    </Switch>

                    {/* If user is signed in, redirect to their posts. */}
                    {this.state.signedIn ? <Redirect to="/posts"/> : <Redirect to="/signUp"/>}
                </div>
            </Router>
        )
    }
}

export default App
```

```jsx 
// ./client/src/components/PostsList.js

import React from 'react'
import Post from "./Post"

const PostsList = (props) => {

    const posts = props.posts.map((post) => {
        return (
            <Post {...post} deletePost={props.deletePost} key={post.id}/>
        )
    })
    return (
        <div>
            <h1>Posts</h1>

            {props.posts.length > 0 ? posts : null}
        </div>
    )
}

export default PostsList
```

```jsx
// ./client/src/components/Post.js

import React from 'react'

const Post = (props) => {
    return (
        <div>
            <div><h2>{props.title}</h2></div>
            <div>{props.content}</div>
        </div>
    )
}

export default Post

```

Everything should be good now! Let's start up our app, log in, and view some `Posts`...

There are no `Posts`! If we troubleshoot, we'll see that all of our data is set up properly in the database, our API is working as expected, and we are getting a `200` response from our login endpoint. Why aren't we getting any `Posts`?

### Storing Sessions in Local Storage

We aren't able to access any `Posts` because we aren't keeping track of our `session`. We are making successful login requests, but we aren't persisting that information for later. When we log in to any application, we create a new `session` that lives until our user logs out or the `session` expires. We see this any time we log in to an application: once we have entered our credentials, we can continue using the app until we hit the `Log Out` button. Even if we do not log out, after a few days or weeks we are prompted to sign in again because our `session` expired. We'll add this same functionality to our application over the next few minutes. The flow will look something like this:

1. We send a "sign in" request to the server.
2. The server responds with `credentials` that we store on the `client`.
3. With each subsequent call to the server, we include these credentials in our request and the server checks them to make sure we are properly "authenticated."

Because we are not currently keeping track of our `session` info after log in, the server can't know which `current_user` to return Posts for. To solve this problem, we'll capture the `credentials` that Devise sends us and keep them in `local storage`. `Local storage` is like a very, very simple database that lives in our `client's` browser. Each of our `clients` will store their own session info.

### Accessing Devise Credentials

Earlier, we took a look at our Devise requests in Postman and saw that there were some `headers` included in the Devise response. These `headers` are simple ways of sending data back and forth in our API requests without cluttering up our request `body`. Four of these headers store the very important `session` info that we will need to store:

* **client**: This header allows the use of simultaneous sessions on different clients (it can be open in more than one browser)
* **expiry**: The date when the current session will expire, this is set to 2 weeks by default.
* **uid**: A unique value that is used to identify the user. This is necessary because searching the DB for users by their access token will make the API susceptible to [timing attacks](https://codahale.com/a-lesson-in-timing-attacks/)
* **access-token**: The access token is the representation of the user for each request. The hashed access-token is saved to the database and Devise validates that the client sends the same access token. This value is changed on every request, meaning that when you make a request with one access-token, a new one will be generated.

Let's capture the info contained in these response `headers` and store them in `local storage` every time we log in. We'll put this code in a new `SessionHeaderUtil` file to keep our React components clean:

```jsx

// ./client/src/util/SessionHeaderUtil.js

import axios from 'axios'

export function saveAuthTokens (headers) {
  // Set Axios Headers with Auth tokens for the next request.
  axios.defaults.headers['access-token'] = headers['access-token']
  axios.defaults.headers.client = headers.client
  axios.defaults.headers.uid = headers.uid
  axios.defaults.headers.expiry = headers.expiry

  // Save Auth tokens to localStorage to persist log-in if the window is closed
  localStorage.setItem('access-token', headers['access-token'])
  localStorage.setItem('client', headers.client)
  localStorage.setItem('uid', headers.uid)
  localStorage.setItem('expiry', headers.expiry)
}
```

The above is a very simple helper function that takes in some `request headers`, saves them to `local storage`, and tells `axios` to include these same headers on its next request. Let's wire this up to our `App.js` `signUp` and `signIn` functions:

```jsx

// ./client/src/App.js 

import {saveAuthTokens} from "./util/SessionHeaderUtil";

...
signUp = async (email, password, password_confirmation) => {
    try {
        const payload = {
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }
        const response = await axios.post('/auth', payload)
        saveAuthTokens(response.headers)

        this.setState({
            signedIn: true,
        })

    } catch (error) {
        console.log(error)
    }
}

signIn = async (email, password) => {
    try {
        const payload = {
            email,
            password
        }
        const response = await axios.post('/auth/sign_in', payload)
        saveAuthTokens(response.headers)
        

        const posts = await this.getPosts()

        this.setState({
            signedIn: true,
            posts
        })

    } catch (error) {
        console.log(error)
    }
}
...
```

Now when we boot up our React app, we can log in and see only our single `User's` protected `Posts`!

### Persisting Sessions Across Page Refreshes

If we were to close or refresh our app right now, we should expect to be logged in the next time we visit. If we refresh however, we will see that this is still not the case. 

While our session info has been successfully saved to the `client's` `local storage`, we only tell `axios` to send this info after an explicit log-in from our `User`. When we leave the page and come back, `axios` does not remember the default headers we set up on our previous sign-in. Fortunately, there is a very simple solution to this problem! When our React app starts up, we'll just check for any existing `session` data in `local storage` and tell `axios` to include it. Let's add two more helper functions to our `SessionHeaderUtil` to accomplish this.

The first function will check to see if our `local storage` contains any session data. This is a simple way to determine whether or not a previous `User` was signed in:

```jsx
// ./client/src/util/SessionHeaderUtil.js

...
export function userIsLoggedIn() {

    const userLoggedIn = (
        !!localStorage.getItem('access-token') &&
        !!localStorage.getItem('client') &&
        !!localStorage.getItem('uid') &&
        !!localStorage.getItem('expiry')
    )

    return userLoggedIn
}
...
```

The second function will tell `axios` to use the existing session data from the last `User` so that we don't have to sign in again:

```jsx
// ./client/src/util/SessionHeaderUtil.js

...
export function setAxiosDefaults(){
  axios.defaults.headers['access-token'] = localStorage.getItem("access-token"); 
  axios.defaults.headers.client = localStorage.getItem("client"); 
  axios.defaults.headers.uid = localStorage.getItem("uid"); 
  axios.defaults.headers.expiry = localStorage.getItem("expiry"); 
}
...
```

Now we'll call these functions every time our `App` loads inside of the `componentWillMount` lifecycle function:

```jsx
// ./client/src/App.js

import {saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "./util/SessionHeaderUtil";

...
async componentWillMount() {
    try {
        const signedIn = userIsLoggedIn()

        let posts = []
        if (signedIn) {
            setAxiosDefaults()
            posts = await this.getPosts()
        }

        this.setState({
            posts,
            signedIn,
        })
    } catch(error) {
        console.log(error)
    }
}
...
```

If we re-visit our React app, the `current_user's` posts should now be available until our `session` ends!

### Signing Out

Now that we've set up our `session` storage, logging out is as simple as clearing out our session data and re-setting our `App` state. To clear the server-side data, we'll simply make a `DELETE` request to the Devise `/auth/sign_out` endpoint. On the client side, we'll use a final helper function:

```jsx
// ./client/src/util/SessionHeaderUtil.js

...
export function clearAuthTokens() {
    localStorage.removeItem('access-token')
    localStorage.removeItem('client')
    localStorage.removeItem('uid')
    localStorage.removeItem('expiry')
}
...
```

We'll trigger these functions with a "Sign Out" button to complete our `session` management functionality:

```jsx
// ./client/src/App.js

import {clearAuthTokens, saveAuthTokens, setAxiosDefaults, userIsLoggedIn} from "./util/SessionHeaderUtil"

...
signOut = async (event) => {
    try {
        event.preventDefault()
        
        await axios.delete('/auth/sign_out')

        clearAuthTokens();

        this.setState({signedIn: false})
    } catch(error) {
        console.log(error)
    }
}
...

...
<button onClick={this.signOut}>Sign Out</button>
...
```

## Authorization with CanCanCan

Now that we are able to verify a `User's` identity, we can use `authorization` to turn features on or off for specific `Users`.

Let's start by re-visiting the core functionality of our application: displaying `User's` secret `Posts`. What we really want to do is display all of our `Posts`, but only allow the `User` who created the `Post` to edit or delete it. The Rails ecosystem has an easy-to-use `gem`, `cancancan` that will allow us to safely `authorize` certain functionality for specific users only. 

Let's start by modifying the `index` route of our `PostsController` to return all `Posts`, regardless of the `User` who created them:

```ruby
# ./app/controller/posts_controller.rb

...
def index
	@posts = Post.all
	
	render json: @posts
end
...
```

Next, we'll add a "Delete" button to each of the `Posts` we display in React. The `deletePost()` function will be passed down as a `prop` from the `App` component to each `Post` component:

```jsx
// ./client/src/App.js

...
deletePost = async (postId) => {
    try {
        await axios.delete(`/posts/${postId}`)

        const posts = await this.getPosts()
        this.setState({posts})
    } catch (error) {
        console.log(error)
    }
}
...

```

```jsx
// ./client/src/component/PostsList.js

...
const posts = props.posts.map((post) => {
    return (
        <Post {...post} deletePost={props.deletePost} key={post.id}/>
    )
})
...
```

```jsx
// ./client/src/component/Post.js

...
const deletePost = () => {
    props.deletePost(props.id)
}
...

...
<div>
    <button onClick={deletePost}>Delete</button>
</div>
...
```

If we go in, we can now delete any `Post` regardless of who created it. Obviously, this is a huge problem! 

To solve this problem, we'll bring in a new `gem` called [`cancancan`](https://github.com/CanCanCommunity/cancancan). This `gem` will work seamlessly with Devise to help us `authorize` only the behaviors we want for each user. We will use the `gem` to generate new `abilities` that we can assign to specific actions. We'll start by adding it to our `Gemfile` and installing the gem with `Bundler`:

```ruby
# ./Gemfile
...
gem 'cancancan'
...
```

```bash
$ bundle install
```

Next, we'll add a new line to our `ApplicationController` to inject our `cancancan` "abilities" into each Rails controller:

```ruby
# ./app/controllers/application_controller.rb
...
include CanCan::ControllerAdditions
...
```

And finally, we'll generate our `ability` file to start protecting our `Users'` data again:

```bash
$ rails g cancan:ability
```

The above command will generate a new `Ability` model that will allow us to define our `User` permissions on a more granular level. Let's build out this file to prevent a `User` from deleting other `Users'` `Posts`:

```ruby
# ./app/models/ability.rb

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    can :read, Post

    can [:destroy], Post do |post|
      post.user == user
    end
  end
end
```

The above code will only allow the `:destroy` controller actions to be performed when a `Post's` `User` is the `current_user`. 

The final step to finish up our `authorization` set-up is to be sure we provide a `@user` instance variable for `cancancan` to check on any protected controller routes. We'll add a new `@user` instance variable that references the Devise `current_user` to the `delete` action in our `PostsController`. We'll also add a little bit of `cancancan` boilerplate at the top of the file to make sure it is included in our routes:

```ruby
# ./app/controllers/posts_controller.rb

class PostsController < ApplicationController
  before_action :authenticate_user!
  load_and_authorize_resource  only: [:destroy]
  
  ...
	def destroy
		@user = current_user
		@post = Post.find(params[:id]).delete
		
		render status: :ok
	end
  ...

```

Now our server throws an error any time we try to delete a `Post` that does not belong to us! This is much better than our previous functionality: allowing any `User` to delete any `Post`. We can add a little bit more polish, however by returning a status code of `401: Unauthorized` instead of the generic `500: Server Error` to our `client`. 

`cancancan` makes this very simple by giving us easy-to-use `AccessDenied` errors. All we have to do is catch these particular errors and we will be able to handle this behavior elegantly and with very little code. Let's add a `rescue` block to our `ApplicationController` that will send an easier-to-use `401` error whenever any of our controllers recognized some `unauthorized` behavior:

```ruby
# ./app/controllers/application_controller.rb
...
rescue_from CanCan::AccessDenied do |exception|
	render status: :unauthorized
end
...
```

## YOU DO: Updating Users

Add a new button that allows us to modify a `Post`. Make sure a `User` is only allowed to edit their own `Posts` by modifying our existing `cancancan` ability.

## Bonus Ideas 

- Refactor the "Sign In" and "Sign Out" functionality into separate components. Try to move the Devise API calls from the `App` component into these new components.
- Add a flash message at the top of the React app whenever a `401` message is returned from the Rails API. The user should be able to "Dismiss" this message with a button OR it should disappear after a set number of seconds.
- Add a global Nav Bar component that switches the text of a "Sign Out" or "Sign In" button based on the session state.
- Don't show the "Delete" or "Edit" buttons for a `Post` unless the `Post` belongs to the currently signed-in `User`.
