# Authentication/Authorization for Rails

|Objectives|
|-----------|
|Explain how authorization differs from authentication|
|Use CanCanCan to implement authorization helpers in a Rails application|

Authorization and Authentication is an important aspect to most any application. As a system, it is put in place to determine whether the current user has the permission to perform the requested action. Based on this, it typically happens after a user is authenticated, but before a request is processed.

Today we will be generating a separate project in order to fully understand the different aspects of the authentication and authorization process.  We will add devise that gives us a user model, connect the user model with posts, and finally use a gem called CanCanCan in order to fully complete the authorization process.

### Create a new project

We will create a project for blogs by scaffolding a quick app.  Scaffolding an app allows us to build out much of the logic so that we may be able to test out a new technology.

1.  Create a new Rails project and title it 'rails-auth-demo'.
2.  Scaffold your application for a post by running 'rails g scaffold Post title:string content:text'.  This will build all of the routing, modeling, and controller logic for posts in the application.
3.  Migrate your database using the command 'rails db:migrate'.

### Add devise for Users

1.  Place gem 'devise' in your Gemfile.
2.  Run 'bundle install' in the terminal.
3.  Run 'rails generate devise:install' in the terminal. This will install all of the needed components for authentication.
4.  Run 'rails generate devise User' in the terminal.  This will generate a User model.
5.  Add the line 'has_many :posts' in your 'user.rb' file.
6.  Add the line 'belongs_to :user' in your 'post.rb' file.  Adding these two lines will associate your models for later use. 
7.  Run 'rails generate migration AddUserIdToPosts' and add the line 'add_column :posts, :user_id, :integer' to the file that is generated.  This will add a foreign key between the two models and associate a post to the user that created it.
8.  Finally, run 'rails db:migrate' in the terminal to migrate your database changes into the application.

### Additional set up

1. Set root path to 'posts#index' in your `routes.rb` file.
2. In `application.html.erb` add this block of code:
```rb
   <% if user_signed_in? %>
     Logged in as <strong><%= current_user.email %></strong>.
     <%= link_to "Logout", destroy_user_session_path, method: :delete %>
   <% else %>
     <%= link_to "Sign up", new_user_registration_path %> |
     <%= link_to "Login", new_user_session_path  %>
   <% end %>
```
This block of code will allow you to fully navigate throughout the website.

3. Finally, in 'app/controllers/application_controller.rb' add the line 'before_action :authenticate_user!'

At this point you should have all the pieces you need before adding authorization to the application.  Your users should be able to CRUD posts but can also do the same to other users posts!  We're about to change all of that.

### Adding cancancan

1. Add the gem 'cancancan' to your Gemfile.
2. run 'bundle install' in the terminal.
3. Add this to your application controller:
```rb
  class ApplicationController < ActionController::API
    include CanCan::ControllerAdditions
  end
```
This line will load the functionality of CanCanCan into your application.  This functionality comes with some key words that help you define which users CAN (get it) do things and which ones cannot.

 4.  Now define abilities running the command 'rails g cancan:ability' in the terminal.  This will create an 'ability.rb' file that you will use to help set the authorization of the users in the application.
 5.  In your 'ability.rb' file add this block of code:
 ```rb
 class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    can :read, Post
    
    can [:create, :update, :destroy], Post do |post|
      post.user == user
    end
  end
end
```
This code allows all users to read all posts.  However, the user can only create, update, and destroy posts if the user.id of the post matches their id.

6. At the top of the 'posts_controller.rb' add this line before your definitions of your method: 'load_and_authorize_resource only: [:edit, :update, :destroy]'
and also comment out 'before_action :set_post, only: [:show, :edit, :update, :destroy]'

```rb
class PostsController < ApplicationController
  # before_action :set_post, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource  only: [:edit, :update, :destroy]
```

6. In the 'posts_controller.rb' for your CRUD actions you will need to set the instance of a user to the current user like so:
```rb
 # GET /posts/new
  def new
    @user = current_user
    @post = Post.new
  end
```
This will ensure that the user that creates or edits posts is the user and helps to check the authorization.

7. In the 'posts_controller.rb' modify the instance of a post in your create method to look like this:
```rb
@post = @user.posts.build(post_params)
```
This will finally ensure that the post is associated with the user creating it.

8. In the 'posts_controller.rb' modify the instance of a post in your show method to look like this:
```rb
 # GET /posts/1
 # GET /posts/1.json
 def show
   @user = current_user
   @post = Post.find(params[:id])
 end
```
This will ensure that you will have access to the correct post on that page

9. You will want to have a flash message to let the user know that have tried to access a page they are not authorized to do so:
```rb
# application_controller.rb

  rescue_from CanCan::AccessDenied do |exception|
    flash[:notice] = "Access denied!"
    flash.keep(:notice)
    redirect_to root_url
  end
  ```

At this point you should be able to create different users and make posts for those users.  When an unauthorized user tries to modify or delete a posts they will not be able to and be met with an error saying so.







<!-- 
# Devise for Rails
Adding authentication

|Objectives|
|----------|
|Understand the need for authentication|
|Install and Configure Devise for Rails|
|Create views for registration process|
|Register a new user|


Adding authentication and authorization is extremely vital to any modern web application.  The need for basic security and authenticaiton is essential for good data and customer experience.  We will spend today adding the 'Devise' gem to our Tunr appliction.  This is a program that will help us integrate the tools needed to authenticate and authorize users.  With this gem we will not need to write the complicated code needed to add security to our pages.


## Add devise gem

Open up your Gemfile and add this line
```rb
gem 'devise'
```
and run
```rb
bundle install
```

## Set up devise in your app

Run the following command in the terminal.
```rb
rails g devise:install
```

## Configure Devise

Ensure you have defined default url options in your environments files. Open up config/environments/development.rb and add this line:
```rb
   config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```
before the end keyword.

**Important** Take note that you are adding this to the DEVELOPMENT environment.  You will need to change this for your production environment.

## Add Notices and Alerts

Open up app/views/layouts/application.html.erb and add:

```html
  <% if notice %>
    <p class="alert alert-success"><%= notice %></p>
  <% end %>
  <% if alert %>
    <p class="alert alert-danger"><%= alert %></p>
  <% end %>
```
right above: `<%= yield %>`

At this point we have effectively implemented the 'Devise' gem into the application and we are ready to create our 'User' model and add security to it.


## Setup the User model

We’ll use a bundled generator script to create the User model.
```rb
   rails g devise user
   rails db:migrate
```

### Create your first user

Now that you have set everything up you can create your first user. Devise creates all the code and routes required to create accounts, log in, log out, etc.

Make sure your rails server is running. Navigate to 'localhost:3000/users/sign_up' and create your user account.

**You can test whether the user was registered by going to the rails console and typing 'User.all'.  If your registration was successful you should see the user in the records of the User model**

### Add sign-up and login links

All we need to do now is to add appropriate links or notice about the user being logged in in the top right corner of the navigation bar.

In order to do that, edit app/views/layouts/application.html.erb add:
```rb
  <p class="navbar-text pull-right">
  <% if user_signed_in? %>
    Logged in as <strong><%= current_user.email %></strong>.
    <%= link_to 'Edit profile', edit_user_registration_path, :class => 'navbar-link' %> |
    <%= link_to "Logout", destroy_user_session_path, method: :delete, :class => 'navbar-link'  %>
  <% else %>
    <%= link_to "Sign up", new_user_registration_path, :class => 'navbar-link'  %> |
    <%= link_to "Login", new_user_session_path, :class => 'navbar-link'  %>
  <% end %>
```

Finally, force the user to redirect to the login page if the user was not logged in. Open up app/controllers/application_controller.rb and add:
```rb
  before_action :authenticate_user!
```
after `protect_from_forgery with: :exception.`


## Where we are going next:
Thus far we have implemented two models (one for users's and one for posts).  We have added authentication and authorization.  We have created the routes and the views for all of our actions for the website.  

In our next session we will be implementing Bootstrap styling to really give our website a look and feel that is more professional and pleasing.

### Resources:
https://github.com/plataformatec/devise
http://www.korenlc.com/rails-tutorial-authentication-with-devise/ -->
