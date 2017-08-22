# React On Rails (w/ Auth)

## Learning objectives

- Give an example of when and why one might choose to put an React app on Rails.
- Explain whether a given file should be placed in `app/assets`, `lib/assets`, `vendor/assets`, or `public/`.
- Describe the difference between putting a static file in the asset pipeline versus in the `public` folder.
- Cause a certain Rails controller action to respond differently to both HTML and JSON requests.

## Framing

### Rails vs React

So far we've seen React apps with a custom built back-end using Express, and Rails apps with no front-end framework. Now we're going to combine the two and make a Rails app that uses React on the front-end.

Today we are going to be building an application takes advantage of the ease-of-use of Rails with the front-end power that we get from using React.

### Why?

In a typical Rails app the user interacts with data through some combination of links, forms, and Javascript.

![Typical Rails](../images/request-normal.png)

In an React-on-Rails app the user interacts with data just through Javascript.

![React and Rails](../images/request-react.png)

This means they have a "single point of contact" with your data. This has two advantages: the user experience may have more consistency (AJAX vs page refreshes), and you have fewer moving parts to worry about.

The trade off here is the need to write more JavaScript.

### Getting Started
Lets start out by setting up our environment.

1. Create a Rails API application
```bash
  rails new tunr_react_rails --api -d postgresql
  cd tunr_react_rails
```
**IMPORTANT** Notice the `--api` flag.  This sets up a stripped down version of Ruby on Rails which removes views from the framework.  We will be handling the views in our React app.

This sets up our Ruby on Rails API and generates our file structure.  At this point we should be able to run a `rails s` and see the Rails Hello World screen, but there are a few more steps to include React in the application.

2. Create a React app through `create-react-app`
```bash
  create-react-app client
``` 
3. Create a `package.json` file at the root level and add this JSON
```json
{
  "name": "YOUR PROJECT NAME",
  "engines": {
    "node": "8.2.1"
  },
  "scripts": {
    "build": "cd client && npm install && npm run build && cd ..",
    "deploy": "cp -a client/build/. public/",
    "postinstall": "npm run build && npm run deploy && echo 'Client built!'"
  }
}
```
> This package.json will be used to build the create-react-app and serve the static build file in production.  This is similar to the postinstall script we used when dealing with express in the past.

4. Set up a proxy for our dev server within the `client` level `package.json
```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:3001",
  ...
}
```
> This sets up the ability to call our Rails API without directly referencing localhost:3001

5. Create a script that allows our API server and dev server to run at the same time. In the past we used `concurrently`, however Ruby has a similar tool called `foreman`.
```bash
  gem install foreman
``` 

6. After installing `foreman`, create a file titled `Procfile.dev` and paste the following code.
```
web: cd client && PORT=3000 npm start
api: PORT=3001 && bundle exec rails s
```

7. You are now able to use `foreman` and the `Procfile.dev` to set up your development environment.  
```bash
  foreman start -f Procfile.dev
```

With that, we can now start building React-On-Rails!

**COMMIT**

## Back-End: Ruby on Rails

### Model Set-Up and Seed
Now that we have our project properly set up, lets work on creating and seeding our data and serving it as an API for our React UI to consume.

```bash
  rails g model Artist name photo_url nationality
  rails g model Song title album preview_url artist:references
```

Let's seed our database with our old Tunr data. Copy the code for our seeds from this gist. [Tunr Seed Data](https://gist.github.com/king0120/a465fe25558c63bcb6d2a8091da1cea4)

Now let's create, migrate, and seed our database.  Then we can test and make sure that ActiveRecord can fetch the data we need

```bash
    rails db:create db:migrate db:seed
```

Finally, we'll add a has_many relationship to Artist
```ruby
# app/model/artist.rb
class Artist < ApplicationRecord
  has_many :songs, dependent: :destroy
end
```

Lets hop into the Rails console using `rails c` and validate that our information exists.
**COMMIT**

### Create API Routes
Since we are going to be using both React Router and Rails, we need to create an easy way to differentiate between our routes.  To do this, we will take advantage of Rails Namespaces.

Namespaces allow us to group together routes without needing an additional controller.  The tradeoff here is that our controllers will also need to be named in a way that signals it is part of a namespace.

Let's use the resources command to generate nested routes for our two models
```ruby
# config/routes.rb
Rails.application.routes.draw do
  namespace :api do
    resources :artists do
      resources :songs, only: [:index, :show]
    end
  end
end
```

Let's see all of the routes we now have available by running `rails c`

**COMMIT**

### Generate Controllers
We now need to create controllers that can serve JSON information from Postgres to our app using ActiveRecord. In order to do that, we need to make a minor change to the actions that we've been creating up to this point.

**Important** Pay attention to the slightly different naming convention for this controller

```bash
    rails g controller api::artists
```

```ruby
  class Api::ArtistsController < ApplicationController
    def index
      @artists = Artist.all
      render json: @artists
    end
  end
```

We have to use this `render json:` method throughout our RESTful routes.  This will convert our Ruby hashes into a JSON object

```ruby
class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render json: @artists
  end

  def create
    @artist = Artist.create!(artist_params)
    redirect_to artist_path(@artist)
  end

  def show
    @artist = Artist.find(params[:id])
    render json: @artist
  end

  def update
    @artist = Artist.find(params[:id])
    @artist.update!(artist_params)
    redirect_to artist_path(@artist)
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect_to artists_path
  end

  private

  def artist_params
    params.require(:artist).permit(:name, :photo_url, :nationality)
  end
end
```

Notice the lack of a `new` and `edit` action.  We don't need these actions, because we will not need individual views for a user to create or update their model. 

We should now have a working API.  Let's use Postman to test our actions.

```
localhost:3001/api/artists
```

If we go back into Postman, we can now validate that our JSON API is working as intended.

**COMMIT**

### YOU DO (20 mins)
Now that we've created an Artist controller, create a Songs controller with all 5 RESTful routes.  Remember to check out `rails routes` to determent your route params.

**COMMIT**

## Front End: React

Now we have a working API. Let hone in on building our React UI. 

```bash
  yarn add styled-components axios react-router-dom
```

### You Do
Look at these 3 wireframes for the Tunr UI and determine what types of React components we will need for this app.

![](../images/TunrIndex.png)
![](../images/TunrArtists.png)
![](../images/TunrLogin.png)

### Angular Hello World

We installed Angular during an earlier step, but we still have a couple steps to go through in order for the application to work.

First, let's create a Welcome controller to serve as the root of the page.  We won't need to add any thing to the erb file, but we do need something other than the 'Welcome to Rails' page.

```bash
    rails g controller Welcome index
```

```ruby
# routes.rb
  get 'welcome/index'
  root "welcome#index"
```

Now if we reload the page, we should get a blank screen.  Let's add the `ng-app` tag to the `application.html.erb`.

```html
<html ng-app="TunrApp">
    ...
</html>
```

Next up, let's create an Angular module named "TunrApp"

```js
const angular = require('angular');
angular.module('TunrApp', []);
```

Finally, we need to make sure our application is updating the webpack bundler and the rails server at the same time.  To do this, we will take advantage of a gem called Foreman.  Foreman is a cli-tool which allows us to run multiple processes in one terminal window.  

```bash
    gem install foreman
```

Let's create a file called `Procfile` (no file extension)

```
    web: rails s
    webpack: webpack --watch 
```

```bash
    foreman start
```

Now webpack and our rails server are running at the same time. We can begin work on creating our single-page app.

### Writing Cleaner Front-End Code w/ ESLint
Eslint is a linting tool that allows you to write cleaner and easier to read code through providing error and warning messages when you write code that doesn't match up established best practices.  It's one of the big reasons I am a fan of VSCode (I believe there is also a plugin available for Sublime Text)

To install ESLint, we'll first need to globally install it. Then we will navigate to the root of the project and run the CLI.
```bash
  npm i -g eslint
  eslint --init
```

We'll then tell the CLI to answer questions about our style and after a few questions it will create an .eslintrc.js file.  If you're using VSCode, you will now automatically see error messages pop up with tips on how to clean up your code.

### Creating an Artist Controller
Let's create a component's folder, and an artists folder inside of that. We'll follow the web component standards that we learned during the Angular unit to create our controllers.

```js
  import artistsController from "./artists.controller";
  import artistsTemplate from "./artists.html";

  const artistsComponent = {
  	controller: artistsController,
  	template: artistsTemplate
  };

  angular.module("TunrApp").component("tunrArtists",   artistComponent);
```

```js
  ArtistsController.$inject = [];
  function ArtistsController(){
  	var vm = this;

  	activate();

  	function activate(){
      vm.artists = [{
        name: "Test artist",
        photo_url: "http://www.fillmurray.com/200/200",
        nationality: "USA"
      }, {
        name: "Test artist 2",
        photo_url: "http://www.fillmurray.com/205/205",
        nationality: "USA"
      }]
  	}
  }
  export default ArtistsController;
```

```html
<h1>Artists</h1>
<div class="btn btn-large" ui-sref="newArtist">+ New Artist</div>
<div class="artist-container flex">
    <div class="artist flex" ng-repeat="artist in $ctrl.artists" ui-sref="artist({id: artist.id})">
        <img ng-src={{artist.photo_url}}></img>
        <div class="info">
            <h4>{{artist.name}}</h4>
            <div>{{artist.genre}}</div>
            <div>{{artist.origin}}</div>
        </div>
    </div>
</div>
```

### Setting up Angular UI-Router

Let's use UI-router to controll the flow of our front-end app.

```bash
npm i angular-ui-router --save
```

```js
const angular = require("angular");
require("angular-ui-router");

angular.module("TunrApp", ["ui.router"]).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("home", {
			url: "/",
			template: "<tunr-artists></tunr-artists>"
		})
		.state("artist", {
			url: "/artist/:id",
			template: "<tunr-artist></tunr-artist>"
		})
		.state("newArtist", {
			url: "/artist/new",
			template: "<tunr-new-artist></tunr-new-artist>"
		});

	$urlRouterProvider.otherwise("/");
}
```

### You Do: (45 min)
Create a show, new, and edit page for artists using Angular.  Use test info for now.

### Connecting to the Rails API
So we now have a working front-end with multiple routes, and an API with data ready to serve. Let's connect them by using `$http`.

```js
const angular = require("angular");

artistService.$inject = ["$http"];

function artistService ($http) {
	const service = this;

	service.getAllArtists = function () {
		return $http.get("/artist").then(res => {
			return res.data;
		});
	};

	service.getArtist = function (id) {
		return $http.get("/artist/" + id).then(res => {
			return res.data;
		});
	};

	service.saveArtist = function (newArtist) {
		return $http.post("/artist", newArtist).then(res => {
			return res.data;
		});
	};

	return service;
}

angular.module("TunrApp").service("artistService", artistService);

```

Now we can inject the Artist service into our controllers to retrieve data from our Rails API.

### You do: 20min
Inject the Artist service into your controllers to retrieve info from the API

CONGRATS!! You've just built an application using Angular On Rails. Let's deploy to Heroku.

### Deployment
Before deploying the app, let's make sure to run `webpack` one last time to make sure that everything is bundled into the production code.  After we feel comfortable with our project, we deploy using the following commands.

```
  heroku create
  git push heroku master
  heroku run rails db:migrate db:seed
```

Voila, if all goes well you should have your app up and running in production.

## Closing

Independently, take 3 minutes to jot down use-cases and reasons when you would:

 - Build an Angular app by itself
 - Build a Rails app by itself
 - Build an Angular and Rails app
