---
title: JSX
type: lesson
duration: "2:00"
creator:
    name: Jamie King
    city: ATL
competencies: Front-End Frameworks
---
 
# JSX Overviews and Gotchas

### Objectives
*After this lesson, students will be able to:*

- Understand what JSX is and why it is different than HTML.
- Catch differences in syntax between HTML and JSX.
- Insert data from `props` to JSX

### Preparation
*Before this lesson, students should already be able to:*

- Create a React application using `create-react-app`.
- Write HTML and be familiar with the concepts behind injecting JavaScript into HTM

<br>

### JSX

One of the first things many people think when seeing React for the first time is something along the lines of "WTF?! Why is there HTML in my JavaScript code??". When building React applications, it is common to see code that looks like this.

```js
const Element = <h1>Hello World</h1>;
```

This might be off putting at first, but it allows us to take advantage of the power of JavaScript to build UIs. 

I know the question you are all asking... "How is this valid JavaScript? This would cause errors in other JavaScript apps!"  And you're right!  JSX is actually a language extension to JavaScript that will convert this 'HTML in JS' into pure JavaScript.  This occurs via Webpack.  Every time we bring run our Webpack, it has the tools that allows it to transpile the JSX code above to this:

```js
const Element = React.createElement({
  "h1", // Container Element
  null, // Attributes within the container element
  "Hello World" // HTML String
});
```

Imagine how unruly that object would be to maintain over time.  By using JSX, we get an easily readable and easily editable way to build out the HTML that gets sent to the DOM.

### CodeAlong: React Portfolio Page
Let's jump in head first and learn JSX by doing.  Today we will build a simple portfolio page using just React and JSX. 

#### Getting Started
Navigate to your in-class directory and run `create-react-app`

```bash
create-react-app react-portfolio
cd react-portfolio
code . # or subl . or atom .
yarn start # or npm start
```

We now have a basic page that allows us to get started building our portfolio.  Let's first take a deep dive into the starter code that `create-react-app` gave us. Specifically, let's look at the `App.js` file.

```js
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

**render()**: Every time you create a React Component, you will have a `render` function that will define the output of the component whenever it is mounted and when it is updated.  Within the render function you will always return JSX. 

**return ()**: The parenthesis after the return statement looks a little foreign.  These parenthesis tell the Webpack compiler that everything in between is JSX that needs to be converted before being sent to the client.

**className**: One of the most noticeable differences between HTML and JSX is the use of `className` rather than `class`. Since we write JSX within JavaScript files, we cannot use keywords within the JavaScript language.  Since `class` has a different definition in JS, Facebook was forced to change the word that JSX uses to detect an HTML class.  Facebook also was forced to change the `for` attribute commonly found in forms and change it to `htmlFor`. Most other HTML attributes will be exactly the same in JSX.  See React Docs on [Tags and Attributes](https://zhenyong.github.io/react/docs/tags-and-attributes.html)

**src={logo}**: Another big difference between HTML and JSX is the ability to switch between JSX and JS on the fly.  By wrapping an expression in `{}` we are able to refer to variables and objects.  In the case of `src={logo}`, there is an SVG that is being imported at the top of the file and is then being inserted into the `src` attribute for the `img` tag.  When our app gets compiled through Webpack, the path of the svg is inserted into the HTML that gets rendered into the DOM.

#### We Do: Profile Page
Now that we've seen an example of some valid JSX, let's create a few components to build out our Portfolio. The first thing we should do is focus on keeping our file directory clean.  Before we create any new files, lets create a `components` directory inside of `src`.  This will hold all of the components we will be building during the codealong.  Within the components directory, let's create a file called `Profile.jsx`.  Your directory should look something like this.

```
|...
|- public/
|- src/
  |- components/
    |- Profile.jsx
  |- App.css
  |- App.js
  |...
|- .gitignore
|...
```

Within your `Profile.jsx` file, let's create a basic React Component

```js
import React, { Component } from 'react';

class Profile extends Component {
  render(){
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default Profile;
```

Why do we have to import `React` here?  Since we don't reference it in the rest of the file, we should be fine skipping it, right?  Let's see what happens if we remove `React` as an import.

```
ERROR: 'React' must be in scope when using JSX  react/react-in-jsx-scope
```

We get this error because even though we don't reference the React variable, it is being used by Webpack whenever it converts our JSX code to `React.createElement`;

Now that we have a component, let's import it into our App.js.

```js
import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}

export default App;
```

**GOTCHA**: We always capitalize React components.  If we use lower case, JSX will interpret it as a regular html tag.

**GOTCHA AGAIN**: Notice the self closing tag on the React component (`/>`).  Another big difference between HTML and JSX is that JSX is very 

In reality, JSX is just a shorthand for the `React.createElement` method.  

- Give example of React.createElement
- Mention containers for div
- Focus on the () that wraps jsx
- Common Gotchas
- Closing Tags
- Using JavaScript in JSX


<br/>

_[Images from this fantastic blog post by A. Sharif](http://busypeoples.github.io/post/react-component-lifecycle/)_

#### Lifecycles

A React component has 4 separate lifecycles.  A lifecycle is a series of methods that prepare the component to be updated in the DOM. These methods are **Mounting**, **Unmounting**, **Updating Props**, and **Updating State**.

#### Mounting
When a component is rendered on screen for the first time, there are 5 methods that are called before, during, and after the component is rendered.

**`getDefaultProps()`**: This first method tries to fetch any default props defined by the developer.  You can do this by adding a defaultProps object to the class.  It is rare that you will ever need to interact with this method.

```js
  UserComponent.defaultProps = {
    name: "Stranger",
    age: "Unknown",
    location: "Mystery"
  }
```

**`getInitialState()`**: Like get default props, this is just setting up the default state object.  This is defined in your component's constructor function.  You will never need to overwrite this method.

**`componentWillMount()`**: componentWillMount is the lifecycle method called immediately after the Component has set it's default state and props and directly before the component is rendered in the DOM.  In this method, we are able to handle configuration, update our state, and prepare for our first render. We can safely refer to our state and props within this method, and we can update our state.  This lifecycle method is where we make AJAX calls to update the state of a component. 

**`render()`**: The `render()` method is the only lifecycle method that is required to be called in every component. We should all be pretty familiar with this one by now.  In the render function, you return the JSX that you want to render on the page.  Best practices state that the render function should be _pure_. This means that you should not modify the state when rendering. (This is why we make our API calls in `componentWillMount`) 


**`componentDidMount()`**: This is invoked immediately after a component is mounted and available within the DOM.  This allows you to execute code once the component is available and visible on the client's screen.  If you use `setState` here, the method will trigger a re-render.  
> **Warning**: This is an easy way too accidentally end up in a infinite loop. Be careful when updating information within componentDidMount.

#### Updating State and Props
The mounting lifecycle only takes place when the component is initially being rendered.  Any modifications that happen afterward go through the update lifecycle methods.  Let's quickly go over these.

**`componentWillReceiveProps()`**: This method will be called whenever React detects the props of a component has been modified.  This method allows the developer to have access to both the current props and the new set of props that are coming in. Developers sometimes use this method to `setState` before the other update methods are executed.

**`shouldComponentUpdate()`**: Generally, whenever our component receives any new state or props it will update. However, React gives us a method that asks permission.  The argument contains the nextState and nextProps, and it returns a boolean value.  If `shouldComponentUpdate` evaluates to false, it will break out of the rest of the update cycle.

**`componentWillUpdate()`**: Just like `componentWillMount` but get's called everytime there is an update. You cannot `setState` here, which should be done in `componentWillReceiveProps`.

**`render()`**: The same `render` method from mounting also gets called whenever doing an update.  See why we want to keep this function pure.

**`componentDidUpdate()`**: Also similar to `componentDidMount()`.  Allows you to executes functions after the DOM has been updated.


#### Unmounting

**`componentWillUnmount()`**: There is only one method that gets called whenever you unmount a component.  `componentWillUnmount` is useful for performing cleanup. (i.e. canceling network requests and invalidating timers)

## Summary

In an ideal world, we wouldn't use lifecycle methods. All our rendering issues would be controlled via state and props.

But it’s not an ideal world, and sometimes you need to exact a little more control over how and when your component is updating.  Even when you don't use these methods, it's helpful to demystify what's going on behind the scenes of React.

Use these methods sparingly, and use them with care. 
<br>

## Further Reading:

* [React Component Lifecycle by A. Sharif](http://busypeoples.github.io/post/react-component-lifecycle/)
* [Facebook React Docs](https://facebook.github.io/react/docs/react-component.html)
* [State and Lifecycles](https://facebook.github.io/react/docs/state-and-lifecycle.html)
