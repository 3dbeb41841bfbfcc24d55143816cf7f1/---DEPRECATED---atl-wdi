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

**GOTCHA AGAIN**: Notice the self closing tag on the React component (`/>`).  Another big difference between HTML and JSX is that JSX is very picky about opening and closing tags.  Every tag you make in JSX has to be closed (i.e `<h1></h1>` or `<span>`)

Once we properly import our `Profile` component, we should see a big "Hello world" on the page.

#### Adding onto the Profile component

Let's beef up our Profile component with a picture and our name. 

```js
import React, { Component } from 'react';

class Profile extends Component {
  render(){
    return (
      <img src="http://www.fillmurray.com/100/100" />
      <h1>Jamie King</h1>
      <h3>Full Stack Developer</h3>
    );
  }
}

export default Profile;
```

**OH NO**: Something broke! `Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag (7:6)`

**GOTCHA**: When rendering JSX, there can only be one top-level element. Having multiple elements without a container element will always throw an error.  We generally fix that by wrapping the JSX with a `<div></div>` tag.

After wrapping the tags in a div, we should see the first bit of our profile page. Hooray! 

**YOU DO:** (10 min)
Add some css to the Profile component. 
  * 


#### Building out a Specializations component
Now that we have built out a pretty solid splash image, let's add some more content to the page.  Next up, we want to build a section of the portfolio page that will show of what technologies we know.  Let's look at the wire-frame of what we want to build.

![](http://i.imgur.com/oQTKHBh.png)

**YOU DO** 
* Create a component called `Specialties.jsx` and insert it into `App.js`.

* Use JSX to add a `h2` tag that says "I specialize in..."

* Follow along with the wire-frame to create 3 specialization cards. Use a service like [Placehold.it](https://placeholder.com) for temporary pictures.


#### DRYing up your code with loops and props (I Do)
You may have noticed that we've repeated a lot of JSX within the Specialties component.  This is a bad practice.  The React philosophy is to make your components very small and ideally reusable.  We have 3 component's here that all look pretty similar, so lets extract them into their own smaller component.

Let's create a `Specialization` component that will contain a single specialization.  For every part of the component that is specific to the specialization, we are going to replace that value with `{this.props.something}`

#### this.props
`this.props` is a way of passing data from a parent to a child component.  Essentially this means that we can write generic properties in our child component and then outline the data that should be filled in in the parent component. 

Let's look at this example of a Parent/Child relationship.
```js
class Taco extends Component{
  render(){
    return <h1>I love {this.props.flavor} tacos!</h1>
  }
}
class Tacos extends Component{
  render(){
    const flavors = ['Guacamole', 'Beef', 'Bean'];
    return (
      <div>
        <Taco flavor={flavors[0]}>
        <Taco flavor={flavors[1]}>
        <Taco flavor={flavors[2]}>
      </div>
    )
  }
}
```
Will output
```html
  <div>
    <h1>I love Guacamole tacos!</h1>
    <h1>I love Beef tacos!</h1>
    <h1>I love Bean tacos!</h1>
  </div>
```

**NOTE** Props can only ever be passed down from parent to child element.  You cannot pass data from child to parent component

#### Looping in JSX
This example can still be cleaned up even further. In the `Tacos` example component, we call `Taco` three times.  What if we had 100 favorite tacos? That would be a huge pain to type out by hand.  Thankfully, we can use JavaScript to loop in JSX.  In order to do this, we use the array methods available to us in JavaScript. (i.e. Map, Filter, etc.)  

```js
class Tacos extends Component{
  render(){
    const flavors = ['Guacamole', 'Beef', 'Bean'];
    return (
      <div>
        {flavors.map((flavor, i) => {
          return <Taco key={i} flavor={flavor}>
        })}
      </div>
    )
  }
}
```

**Whats the deal with `key={i}`?**: Whenever we use loops in JSX, we need to make sure that we add a key with a unique id for each looped element.  This is so React is able to keep track of which looped element is which.  

#### You Do:
Try refactoring the `Specializations` component to break up the code into smaller components, and use a `.map` to loop through an array of objects to display your info.



Now that we know how to 

- Give example of React.createElement
- Mention containers for div
- Focus on the () that wraps jsx
- Common Gotchas
- Closing Tags
- Using JavaScript in JSX
- Conditionals
- Nesting
- Map
- Filter
- Sort
- If Else


## Further Reading:

* [React Component Lifecycle by A. Sharif](http://busypeoples.github.io/post/react-component-lifecycle/)
* [Facebook React Docs](https://facebook.github.io/react/docs/react-component.html)
* [State and Lifecycles](https://facebook.github.io/react/docs/state-and-lifecycle.html)
