---
title: Intro to React - CLI, Components
type: Lesson
duration: "1:25"
creator:
    name: Danny Hurley 
    city: ATL
competencies: Front-end frameworks
---

# Intro to React - CLI, Components

### Objectives

- Describe why learning React is important
- Set up an React app and test that it works
- Build a very basic component with fake data
- Render basic data in the view, using JSX

### Preparation

- Have a thorough understanding of JS
- Know how to build JS objects

<br />

### Hook

One of the benefits of Front End frameworks is that we don't have to refresh on every interaction.

Imagine how annoying it'd be on Facebook that **every** Like would refresh the page. Or every time you drag something in Trello it refreshes.

Get with a partner and write down three websites that would have a terrible UX if the page reloaded on every click. Also, write down three where it'd be OK. For example, a news website. You can't use the examples I gave though.

<br />

## What is React and Why Should You Learn it? (20 mins)

React is a client-side framework created by Facebook that is quickly taking over the development world. React builds on the progress made by previous front-end frameworks, such as EmberJS and AngularJS, but has its own set of goals and priorities.

While many other frameworks focus on the flow of data within a front-end application, React focuses on breaking large web-applications into the smallest set of re-usable Web Components possible.

## What is a Web Component?

Web Components represent a modern strategy for managing the size and complexity of front-end applications. As the demand for web- and mobile-friendly interfaces has grown, so has the average size and complexity of an app. As these applications become larger and more complex, so does the need for keeping things clean and DRY. 

While there are many different implementations of Web Components, all share the same common characteristics. In its simplest form, a Web Component is a set of closely-related HTML, JavaScript, and CSS that can be packaged up together to be re-used as many times as necessary. Some common examples of Web Components include:

* Checkout Carts that can be shared across multiple pages
* Navigation bars that are shared across multiple pages
* Headers and Footers that are shared across multiple pages

Each of these elements could be copied across your whole application, but as we already know, this wouldn't be DRY at all.

### Benefits of React:

* Solves complex problems using simple JavaScript. Unlike other frameworks, which require some proprietary knowledge. For example, turning each element of an array into a `<div>` tag in React simply requires a JavaScript `for-loop` or `map`. Doing the same in Angular looks like this: 

	```
	<div ng-repeat="item in itemsArray"></div>
	```
* Allows us to re-use a full set of HTML, JavaScript, and CSS as many times as we want, while keeping our code completely DRY.
* No longer have to refresh on every interaction
* Allows our pages to update as quickly as possible, by reloading only the parts of the page that have changed.
* Makes Web Components first-class citizens of the framework.
* Makes us more productive when developing web apps requiring less code from the developer.
* Provides a lot of powerful and easy-to-use tooling, out of the box.
* Was designed with testing in mind.

### Apps Built with React (partially or completely):

* Khan Academy
* Codecademy
* Facebook
* Instagram
* The New York Times
* Yahoo Mail
* Dropbox

## When should we use client-side frameworks?

### When To Use Client Side Frameworks

* High level of interaction (like Facebook, Trello, Gmail)
* Filling out a lot of forms (https://www.lawn.com/get-a-quote/)
* Lots of view logic that depends on the state
* Anything real-time!

### When NOT To Use Client Side Frameworks

You will see soon that Front End frameworks add a level of complexity

* Sites that are content heavy (https://www.mitsubishipro.com/) or require very little user interaction
  * Delays because it has to hit the server and there's no loading indicator
* Minimal interaction

<br />

### SPA Architecture

Single Page Applications (SPA) are all the rage today. A misconception is that a SPA has only a single view - this is far from the truth!  The single page aspect of a SPA refers to a single page coming from the server, such as our `index.html` page.  Once loaded, the SPA changes views by using **client-side** routing, which loads partial HTML snippets called templates.

![spa_architecture](https://cloud.githubusercontent.com/assets/25366/8970635/896c4cce-35ff-11e5-96b2-ef7e62784764.png)

Client-side routing requires something known as a **router**. As we will see a little later, the React ecosystem provides for us an easy-to-use router that will greatly simplify the amount of work we have to do to load many different templates within our application.


## Thinking In React

https://facebook.github.io/react/docs/thinking-in-react.html

### You Do: Breaking applications down to components (15 minutes)


--- 
--- 
--- 
--- 
break for afternoon
--- 
--- 
--- 



## Basic Setup - The `create-react-app` CLI tool - Codealong (20 mins)

1. `npm install --global create-react-app`
2. in your `~/ga` folder, run this command:
 	```
	$ create-react-app first-react-app 
	```    
3. `cd first-react-app`
4. Once you are inside the `first-react-app` directory, run `yarn start`

### What just happened?

Magic just happened! If everything is working correctly, you should now be staring at a fresh browser tab with a live React application running inside of it. All we had to do was run a few terminal commands. Let's explore what just happened.

* First, we installed the `create-react-app` CLI tool. This is an officially-supported tool that will configure for you a fresh React application, without you having to do any configuration of your own. What does this tool do for us?
	* If we look into the file structure of the application, the tool gives us a `/src`, `/node_modules` and a `/public` folder. 
	* The `/src` folder contains all of the code that makes our React app "tick." We'll explore this folder over the next few days.
	* The tool also sets up a `/node_modules` directory in our React app that manages our dependencies and application scripts. `Yarn` is a wrapper around the `npm` tool we use with Node that adds additional features `npm` does not have. We'll use this tool to start and stop our application, just like we use `npm` with Express.
	
	* If we look at the `/public` folder, we will see a few auto-generated files, including an `index.html`. We won't need to touch any of these files, as all of the code that the browser sees is automatically provided through a tool called Webpack!

#### What is Webpack?	

Webpack allows us to easily manage large client-side applications. Let's take a look at the problems that Webpack solves for us:

* To keep our code clean, we spread our JavaScript code across many files. Webpack provides an easy way condense these files into one large JavaScript file (dependencies included). The primary reason for doing this is cleaning up our `<script>` tags. Imagine having to manage 100 `<script>` tags in our `index.html`... That would be chaos!
* Inside of our `/src/App.js` file, we should see some pretty familiar-looking `import` tags. This is because Webpack allows us to start using Node-y `import` statements in our client-side code!
* Webpack also gives us an easy to way to use Babel with our application. Babel converts all of our modern (ES6 and later) JavaScript code into older-looking code that will run in any browser. This allows us to safely move forward using all of the nice, new language features of JavaScript as they roll out.
* In this class, we have seen examples of `minifiied` code. `Minification` is a way of processing our code before loading it into the browser to remove unnecessary spaces, tabs, and other non-functional characters. This allows us to reduce file sizes, speed up loading times, and leave our functionality completely untouched. How do we include this in our application? We don't have to! We get it for free with our React Webpack set-up.
* Finally, Webpack provides for us a server that will run our code for us automatically. Why do we need a server if this code runs in the browser? Because we don't want to reload our page every time we make a change. The Webpack dev server that React gives us for free will `hot-reload` our changes in the browser, as we make them in our code.

## Creating Custom Components

### Creating a Movie Component - Codealong (25 minutes)

#### Let's go ahead and build our own Movie application...

- Rename App.js
- copy-paste component contents, refresh, then talk about JSX

#### Is that HTML in my Javascript?

- JSX = XML in Javascript
- We can write HTML directly in our .js without needing multiple files
- Isn't that going to make our code messy? What about separation of concerns?
	- If we 

### Adding Data to Components 

### You Do: Creating Movie Reviews





![](https://i.imgur.com/ncMjQme.png)
    
##### &#x1F535; YOU DO (2 minutes)

Repeat the steps above to set-up our Angular app.

<br />

## Setting Up AngularJS

Like a few frameworks we have seen, there is not a particular way to organize your application in order to make Angular work. We will have to create our own, but let's try to keep it standard.

First, let's get Angular from [Google's CDN](https://developers.google.com/speed/libraries/#angularjs) and paste it into script tag just before the closing `<body>` tag.

```html
<head>
  <meta charset="utf-8">
  <title>Intro to Angular</title>
</head>
<body>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js"></script>
</body>
```

Now, we need to set up the main module for our app. Go into to your `app.js` file, and all it takes is one little line:

```js
// Define a new module. The first argument is what we want to call our angular app, the second argument is an array of dependencies (which we don't need at the moment, as we don't have any)

angular.module('IntroToAngularApp', []);
```

This line sets our app up. It's important to include that empty array when defining a module, even if we don't have any dependencies – as it tells Angular that we are initializing a module.

Now, back in our HTML, make sure your `app.js` is included in a script tag, and add an `ng-app` directive to the opening `<html>` tag.

```html
<!DOCTYPE html>
<html ng-app="IntroToAngularApp">
  <head>
    <meta charset="utf-8">
    <title>Intro to Angular</title>
  </head>
  <body>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js"></script>
    <script src="js/app.js"></script>
  </body>
```

Since we defined it in `app.js` with a name of `IntroToAngularApp`, we just reference what we named it here. This tells the HTML to use that module.

Now, let's just check to make sure it worked. If it worked correctly, we should be able to put some simple expression in our HTML, and Angular will render it.

```html
<body>
  {{ 1 + 1 }}
</body>
```

If Angular's working, it'll add our numbers together and spit out a 2 on the page – that's how templating works in Angular, inside curly brackets. More specifically, Angular will evaluate any expression within {{}} in the DOM.

Open it up in a browser to check. And remember – if it doesn't work, always check your browser's console for errors!

##### &#x1F535; YOU DO

Add the code above to your index.html


## A Very Basic Controller - Codealong (15 mins)

So, in Angular's flavor of MVC, controllers are intended to primarily:

1. Respond to user actions.
2. Provide data to the view (occasionally referred to the view-model).

Now, let's stub out a new controller and plug it into our module:

```bash
touch public/js/homeController.js
```

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('IntroToAngularApp')
    .controller('HomeController', HomeController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function HomeController() {

}
```

##### &#x1F535; YOU DO

Add a HomeController to your app.

<br>

Now, there are two acceptable methods for defining controllers.  They are commonly referred to as the:

- _$scope_ method
- _controllerAs_ method

Now, they're the same idea – essentially a way to craft a constructor function for each controller you decide to make. Angular started by using $scope (a context reference), which you can see an example of here:

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('IntroToAngularApp')
    .controller('HomeController', HomeController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function HomeController($scope) {
    $scope.awesome = true;
}
```

However, as the industry started using Angular, more and more in production, people started realizing that despite the name, $scope wasn't scoped very well. Primarily, as developers started to have nested controllers in their DOM, context wasn't properly being handled.

A lot of professionals have since moved on to doing it a little differently, and a little simpler.

```javascript
// When only the name of the module is passed in,
// the 'module' method returns the specified module.
angular.module('IntroToAngularApp')
    .controller('HomeController', HomeController);

// This is the function definition for our controller.
// Note that we capitalize it as it is used as a constructor function!
function HomeController() {
    this.awesome = true;

}
```

The nice thing is that they're not very different, but that the latter looks far more like a normal constructor function you're used to and most importantly, a controller always has the correct context.

Later, we'll see how you can let controllers just connect models and the views - like we're used to - but since we don't have a model, let's just hard-code some junk in there.

## Independent Practice - Adding data to your Controller (5 minutes)

Take five minutes and add some data into your `HomeController`. Any sort of data will do so just come up with a few different data types to play with.

```js
function HomeController() {
  this.awesome = true;
  this.numbers = [4, 8, 15, 16, 23, 42];
  // etc, etc.

}
```

## Connecting Controller To The View - Codealong (10 mins)

The last step here is to connect our controller to the view. We attach any controllers to some div or HTML tag in our view. But first, make sure to include any newly created JS files.

```html
<html ng-app="IntroToAngularApp">
  <head>
    <meta charset="utf-8">
    <title>Intro to Angular</title>
  </head>
  <body>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.js"></script>
    <script src="js/app.js"></script>
    <script src="js/homeController.js"></script>
  </body>
```

Now:

```html
<body>
  <section ng-controller="HomeController as home">
    {{home.awesome}}
  </section>
</body>
```

When you render the page, it should actually render! That's awesome – that means we're working with data that's coming from our controller, and that's the core building block to more complex apps!

> Note: Keep in mind, while `HomeController` is so named because that's what we called it in the file, the `home` in this example is just a variable we're choosing on the spot. Pick something obvious that makes sense, but it can be anything.


#### &#x1F535; YOU DO

Connect the HomeController to your view and render `home.awesome`

<br>

### But how does it work?

With Javascript in play, our browser is naturally event-driven. For example, when you have an onClick event listener placed on a button, you also have an event handler that can update the DOM in some way. The 'magic' behind Angular, the way that it seemingly knows to update the DOM when need be, is due to the fact that it extends the traditional js event-loop by extending it with angular context.

Every time you use Angular to bind something in the UI, whether it be via handlebars or any ngDirective, you are telling your related Angular module that they are extensions of your angular context and to watch them for changes by adding them to the $watch list. This event loop is known as the $digest cycle and whenever there is a change in Angular context ($scope), Angular will go through _ALL_ of its context and update any model(s) with a value that has been updated, a concept known as "dirty-checking."

## Independent Practice (10 minutes)

1. In pairs, for the next 10 minutes, work together to take the random data you put into your controllers earlier and show them in the view. 
2. After, experiment with making a new controller from scratch, including it in your HTML, and showing that in the view, too – it'll give you a little practice with all the setup.

## Conclusion (5 mins)
- How do we define a new module when starting an application?
- When you create an example controller from scratch, what type of JS function is this?
- How do we render data in the view? What does the templating look like in Angular?
