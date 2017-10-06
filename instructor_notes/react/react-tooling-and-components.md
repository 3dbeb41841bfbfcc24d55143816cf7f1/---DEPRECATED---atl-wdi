---
title: React Tooling
type: Lesson
duration: "1:25"
creator:
    name: Danny Hurley 
    city: ATL
competencies: Front-end frameworks
---

# React Tooling

## Lesson Objectives
* Create a new React application using the `create-react-app` CLI
* Discuss the tooling of a React application, including `Webpack`, `Babel`, `ES6+`, `JSX`, and `hot-reloading`
* Explore the way React "mounts" components to our HTML

## Basic Setup and React Tools (Codealong)

### React Developer Tools

### The `create-react-app` CLI
Let's create our first React application! We'll run the following commands in our console:

1. `npm install --global create-react-app`
2. in your `~/ga` folder, run this command:
 	```bash
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
* Inside of our `/src/App.js` file, we should see some pretty familiar-looking `import` tags. We also have some extra-modern `export` tags! This is because Webpack allows us to start using Node-y `import` statements in our client-side code!
* Webpack also gives us an easy to way to use Babel with our application. Babel converts all of our modern (ES6 and later) JavaScript code into older-looking code that will run in any browser. This allows us to safely move forward using all of the nice, new language features of JavaScript as they roll out.
* In this class, we have seen examples of `minified` code. `Minification` is a way of processing our code before loading it into the browser to remove unnecessary spaces, tabs, and other non-functional characters. This allows us to reduce file sizes, speed up loading times, and leave our functionality completely untouched. How do we include this in our application? We don't have to! We get it for free with our React Webpack set-up.
* Finally, Webpack provides for us a server that will run our code for us automatically. Why do we need a server if this code runs in the browser? Because we don't want to refresh our page every time we test some new code. The Webpack dev server that React gives us for free will `hot-reload` our changes in the browser, as we make them in our code.

## React Components

If we look in our `/src/App.js` file, we will see a React component that was already created for us! Let's explore this component:

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

```

* The first thing we see are some familiar-looking `import` statements. When we look a little deeper though, we begin to see some interesting new ES6 syntax on:

	```javascript
	import React, { Component } from 'react';
	```
	
	See those curly braces around `Component`? This a fantastic feature of ES6 called "destructuring". 
	
	As you can imagine, there are going to be certain segments of the React code that we use all the time. While we could use dot-notation to pull each of these objects off of the parent React object each time, that might become a little redundant. "Destructuring" allows us to save some typing by importing values off of an object directly and creating a new variable just for that small part. In other words, while we could do this: 
	
	```javascript
	import React from 'react';
	
	class MyNewComponent extends React.Component { 
		...
	}
	```
	
	We can accomplish the same thing, and avoid having to use lengthy and hard to read dot-notation, with this code: 
	
	```javascript
	import React, { Component } from 'react';
	
	class MyNewComponent extends Component { 
		...
	}
	```

* The next thing you might notice is also one of the best features of react: Components are just classes! If React is all about building components, and components are just plain old Javascript classes, then that means React is just plain old Javascript. While all Javascript frameworks inherently use the Javascript language, many of them solve problems in very proprietary ways. This isn't so with React. If we know how to write modern Javascript, most of the learning curve for React is already out of the way.

* If we look inside of our `App` component class, we will see the only method that is required to turn a regular class into a React component. The `render()` method that we see will be where much of our React work occurs. This is the method that tells React what HTML we want to see on the page. 

* The final bit of code we see is the `export` statement. Until now, we have been using the Node-friendly `module.exports = ThingToExport;` syntax. With the brand new JS syntax that Webpack enables for us, we can switch to the more friendly `export default ThingToExport;`.

#### Wait, what is that HTML doing in my Javascript?

Until now, if we've wanted to write any HTML in our Javascript we've had to use `template strings`. Because this can be pretty messy, we've generally opted not to write HTML outside of our HTML files when we can avoid it. With React, we will instead use a built-in tool called **`JSX`** to write "HTML" directly into our Javascript. I put "HTML" in quotes because this is not actually HTML but a `markup language` called `XML`. `XML` is very similar to `JSON` in purpose, but the syntax is much more similar to HTML. Using this tool, we can effectively write HTML directly into our `.render()` function and React will take care of the conversion from XML to HTML for us.

This means that all of the Javascript and HTML our component needs will now live in one file. Obviously, this new paradigm is a little different than the way we've been writing code up to this point. Don't worry, we'll talk about the nuances of this new structure in the coming days. 

## Mounting Components

As we've discussed, most of the time we spend in React will be spent creating small components. These components will not automatically appear in the browser, so we'll have to do a little bit of work to get them to show. Fortunately though, most of the hard work will be done for us by React itself. Let's crack open our `src/index.js` file and see how this happens:

```javascript
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

```

* If we look at our import statements, there are two very important libraries at work here:
	* `react`: `react` is the `npm` library that contains `React` itself. The code we will be using to create new components lives inside of this library, as we saw in our exploration of the `App.js` file above.
	* `react-dom`: As you can probably guess, `react-dom` is the library that will add our components to the DOM. If we look at our `index.js` file, we will see that the method `ReactDOM.render()` is being called. This method is taking the `<App />` component that we looked at previously and is mounting it inside a `<div>` field with an ID of `root`. This root `<div>` has already been created for us inside of `index.html` by the `create-react-app` CLI. 

#### What does this all mean?

This means that as long as our custom components are **nested** inside of the `<App />` component, React will automatically show them on the page. This has been already set up for us by the `create-react-app` tool, but if we wanted to do it ourselves, it wouldn't take very many lines of code!


