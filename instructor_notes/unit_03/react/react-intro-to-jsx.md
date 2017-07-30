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
- Loop through arrays of data and apply it to JSX rendering.
- Insert data from `props` to JSX

### Preparation
*Before this lesson, students should already be able to:*

- Create a React application using `create-react-app`.
- Write HTML and be familiar with the concepts behind injecting JavaScript into HTM

<br>

If you've ever written HTML within JavaScript, you know that the experience can be a huge pain.  Developers are required to write and concatenate strings that get converted to HTML after being appended to the DOM. Many times this looks really messy (i.e. `"<h1>" + firstName + " " + lastName + "</h1> `) even with ES6 string templates!  For this reason, we use a tool called JSX to easily and cleanly write expressive statements that sends HTML to the DOM.

## JSX

JSX was created by Facebook to provide a descriptive and clean way to write the HTML that React sends into the DOM.  JSX is actually not the only way to send HTML to the DOM in React.  Before JSX, developers would render HTML through the `React.createElement()` method.

```js
const HelloWorld = React.createElement({
  "h1", // Container Element
  null, // Attributes within the container element
  "Hello World" // HTML String
});
```

While this rendered HTML extremely effectively, it can be difficult to parse and understand.  Because of this, JSX created to provide developers a more expressive and familiar way to write elements to be rendered to the DOM.  JSX is written out as a mark-up language, just like HTML.

```js
const Element = <h1>Hello World</h1>;
```

I know the question you are all asking... "How is this valid JavaScript? This would cause errors in other JavaScript apps!"  And you're right!  JSX is actually a language extension to JavaScript that will convert this 'HTML in JS' into pure JavaScript.  When Webpack is bundling your React code, it converts the JSX syntax into the `React.createElement()` method seen above.

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

**render()**: Every time you create a React Component class, you will use the `render` function.  This function tells React what the output of your component will be upon it's initial creation and every time it updates.  We will write our JSX within the `render` function.

**return ()**: Since render is just a regular method call, we have to `return` something.  The JSX return is often more than 1 line.  When we have more than 1 line, we wrap the entire JSX statement in `()`.

**className**: One of the most noticeable differences between HTML and JSX is the use of `className` rather than `class`. Since we write JSX within JavaScript files, we cannot use keywords within the JavaScript language.  This means we can't use names like `class` and `for` when using JSX.  Instead, JSX provides `className` and `htmlFor` as replacements.  Most other HTML attributes will be exactly the same in JSX.  You can see all of the available attributes here: [Tags and Attributes](https://zhenyong.github.io/react/docs/tags-and-attributes.html)

**src={logo}**: Another big difference between HTML and JSX is the ability to switch between JSX and JavaScript on the fly.  By wrapping an expression in `{}`, we are able to refer to variables and objects.  In the code above, you use `src={logo}` to import the SVG file that was defined earlier in the component.  When our app gets bundled through Webpack, the path of the SVG is inserted into the HTML that gets rendered into the DOM.  We can also use `{}` to use functions like `.map`, `.filter`, and `.reduce` to manipulate our data.

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

**GOTCHA** Why do we have to import `React` here?  Since we don't reference it in the rest of the file, we should be fine skipping it, right?  Let's see what happens if we remove `React` as an import.

```
ERROR: 'React' must be in scope when using JSX  react/react-in-jsx-scope
```

We get this error because even though we don't reference the React variable, it is being used by Webpack whenever it converts our JSX code to `React.createElement`;

Now that we have a component, let's import it into our App.js.

```js
import React, { Component } from 'react';
import './App.css';
import profile from './components/Profile.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <profile />
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

#### Building out a Specializations component
Now that we have built out a all the info we need for a splash page, let's add some more content to the page.  Next up, we want to build a section of the portfolio page that will show of what technologies we know.  Let's look at the wire-frame of what we want to build.

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

#### JSX Conditionals
The ability to mix JSX and JavaScript at will makes it fantastic for templating a UI.  Let's combine ternary equations with the JSX syntax.

```js
class Taco extends Component{
  const opinion = this.props.flavor === 'Guacamole' ? 'REALLY love' : 'love'
  render(){
    return <h1>I {opinion} {this.props.flavor} tacos!</h1>
  }
}
```

You can also use ternary equations inline while you're writing JSX

```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

Now that we know how to 

- Give example of React.createElement - DONE `line 41`
- Mention containers for div - DONE `line 183`
- Focus on the () that wraps jsx - DONE `line 91`
- Common Gotchas - DONE ``
- Closing Tags - Done `line 185`
- Using JavaScript in JSX - Need more detail
- Conditionals
- Nesting - Done.  Maybe mention more about unidirectional data flow
- Map
- Filter
- Sort
- If Else
- Events


- unidirectional

## Further Reading:

* [Introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
* [Lists and Keys](https://facebook.github.io/react/docs/lists-and-keys.html)
* [JSX in Depth](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [Different Ways to Add If/Else in JSX](http://devnacho.com/2016/02/15/different-ways-to-add-if-else-statements-in-JSX/)
