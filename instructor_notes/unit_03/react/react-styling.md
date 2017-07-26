---
title: Styling in React
type: lesson
duration: "2:00"
creator:
    name: Jamie King
    city: ATL
competencies: Front-End Frameworks
---
 
# Styling in React

### Objectives
*After this lesson, students will be able to:*
- Understand the philosophies behind bringing CSS into the JS component
- Use the `styled-components` to build styling components
- Create basic animations within JavaScript Styles
- Distinguish between various CSS frameworks available in React

### Preparation
*Before this lesson, students should already be able to:*
- Build a basic UI using React and JSX
- Understand CSS properties and transitions
- Identify various CSS Frameworks (Bootstrap, Material, Foundation)

So far in React, we have used JS and HTML to break our project into small, reusable components.  Up to this point, we have imported our styling from separate CSS files.  While we have to import our CSS into our JavaScript files, they are being read the same way that CSS has been read previously.  

This brings about some side-effects that can limit our ability to build things quickly and scalably. By keeping our style-sheets separate from our React and JSX, we expose several weaknesses of CSS:
  * All of the classes, ids, and values that style are exposed as global variables.
    * Why do we want to avoid anything global?
  * We inherit many of the weaknesses of CSS 
    * `!important`
    * cascading - styles may unintentionally overwrite each other
    * Complicated naming. How do you track whats styling what?
  * We no longer have small, self-contained components.
    * Our logic and JSX may be reusable, but our styling is not.

Because of these weaknesses, the emerging pattern in the React community is to move all styling within individual components.

### Redefining the Separation of Concerns
The idea behind bringing HTML, CSS, AND JavaScript into one single file may sound crazy at first.  We've spent weeks talking about how the Separation of Concerns allows our code to be easier to read and debug.  Traditionally, we maintain the Separation of Concerns on the front end by separating the entire document's structure(HTML), styling (CSS), and logic (JS). However, in React we redefine our SoC by building small components that house a single elements structure, styling, and logic within one file.

![](http://i.imgur.com/8sXcykD.png)

### The Rise of Inline Styles
Since component driven design is a relatively new pattern, there is not a single best pattern to date. One of the first common patterns and still an extremely popular option is to use inline styles.  You can checkout the slide deck of the talk that introduced this concept [here](https://speakerdeck.com/vjeux/react-css-in-js)

But I thought inline styles were bad?! You can't be serious!
![](https://media.giphy.com/media/3oEjHLzm4BCF8zfPy0/giphy.gif) 

While the idea of inline styles being a good practice is shocking at first glance, there are actually some good ideas behind it.  

Let's take a look at an example of a React component that takes advantage of inline-styles.

```js
import React, { Component } from 'react';


class Button extends Component{
  render(){
    const buttonStyles = {
      borderRadius: "5px",
      padding: "15px 25px",
      fontSize: "22px",
      textDecoration: "none",
      margin: "20px",
      color: "#fff",
      position: "relative",
      display: "inline-block",
      backgroundColor: "#55acee",
      boxShadow: "0px 5px 0px 0px #3C93D5"
    };

    return (
      <a href="#" style={buttonStyles}>
        Click Me
      </a>
    )
  }
}

export default Button;
```
> Styling inpired by [Flat UI Buttons 2](https://codepen.io/benague/pen/bCkyr) by benague on Codepen

Looks pretty similar to CSS right? Because of the the React library, we are able to take this JavaScript object that looks suspiciously similar to a CSS property and have it be converted to a inline style string at runtime.

Make sure to observe that there are a few major differences in the move between CSS and JS.  Our CSS properties are now camel case instead of hyphenated, the values are now wrapped in strings, and we use commas at the end of a property instead of a semicolon.  All of these are normal when dealing with JavaScript, but old CSS habits die hard.

We gain a few advantages to CSS here:
  * This style object is contained within it's component, so we don't have to worry about global conflicts. 
  * Our code is more descriptive, the attribute `style` is actually controlling our style.
  * We have the ability to change values using state and props. 

Let's take a look an example where we change the background color on hover.

```js
import React, { Component } from 'react';

class Button extends Component{
  state = {
    hover: false
  }
  hoverEnter = () => {
    this.setState({hover: true});
  }
  hoverLeave = () => {
    this.setState({hover: false});
  }
  render(){
    const buttonStyles = {
      borderRadius: "5px",
      padding: "15px 25px",
      fontSize: "22px",
      textDecoration: "none",
      margin: "20px",
      color: "#fff",
      position: "relative",
      display: "inline-block",
      backgroundColor: this.state.hover ? "#6FC6FF" : "#55acee",
      boxShadow: "0px 5px 0px 0px #3C93D5"
    };

    return (
      <a href="#" style={buttonStyles} onMouseEnter={this.hoverEnter} onMouseLeave={this.hoverLeave}>
        Click Me
      </a>
    )
  }
}
export default Button;
```  

At this point, you might observe the extra code, additional method calls, and state addition. While it's neat that we're using JS to style everything, that's a lot of additional logic to add to each and every component. There has to be a better way.

### 💅 styled-components
There are plenty of libraries available on Github that attempt to make it as easy as possible to style React components.  Some common options are [Aphrodite](https://github.com/Khan/aphrodite), [Radium](https://github.com/FormidableLabs/radium), and [JSS](https://github.com/cssinjs/react-jss).  While these are all decent libraries, they all have a lot of library specific rules.  

Thats why a group of developers got together around January of last year and committed to making the easiest and most stress free way of styling React components.  The result is a library called [💅 styled-components](https://github.com/styled-components/styled-components).  In the year that the library has been out, it has widely become the go-to option for styling in React.  

Styled components uses a feature of ES6 known as tagged template literals to allow you to write actual CSS code that gets converted into a component.  Let's take a look at an example.




### Creating component-centric styles
There are several different methodologies available to make it easier to 

-- Instagram clone
-- Why do we want to avoid separate css files?
  -- Everything is a global variable. Or add processors
  -- CSS logic (!importants, cascading, complicated naming) allows many unnecessary side effects.
-- But the Separation of Concerns!
-- CSS Modules
-- Styled-components? 
  -- Show nesting and pseudoselectors
  --
-- React-Animations
-- Frameworks
  -- Material UI
  -- React-Bootstrap
  -- React-Foundation
-- What’s the point? If you’re writing React, you have access to a more powerful styling construct than CSS class names. You have components.




## Further Reading:

* [Introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
* [Lists and Keys](https://facebook.github.io/react/docs/lists-and-keys.html)
* [JSX in Depth](https://facebook.github.io/react/docs/jsx-in-depth.html)
* [Different Ways to Add If/Else in JSX](http://devnacho.com/2016/02/15/different-ways-to-add-if-else-statements-in-JSX/)
