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

### YOU DO: 
Add an event that will add the following styles when the user clicks the button: 
```css
  { 
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
```
Check out the [React docs](https://facebook.github.io/react/docs/handling-events.html) if you need help with setting up a click event.

--- 

At this point, you might observe the extra code, additional method calls, and state addition. While it's neat that we're using JS to style everything, that's a lot of additional logic to add to each and every component. There has to be a better way.

## 💅 styled-components
There are plenty of libraries available on Github that attempt to make it as easy as possible to style React components.  Some common options are [Aphrodite](https://github.com/Khan/aphrodite), [Radium](https://github.com/FormidableLabs/radium), and [JSS](https://github.com/cssinjs/react-jss).  While these are all decent libraries, they all have a lot of library specific rules.  

Thats why a group of developers got together around January of last year and committed to making the easiest and most stress free way of styling React components.  The result is a library called [💅 styled-components](https://github.com/styled-components/styled-components).  In the year that the library has been out, it has widely become the go-to option for styling in React.  

Styled components uses a feature of ES6 known as tagged template literals to allow you to write actual CSS code that gets converted into a component.  Let's take a look at our button component re-written with `styled-components`.

```js
import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.a`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  &:hover{
    background-color: #6FC6FF
  }
`;

class ClickMe extends Component{
  render(){
    return (
      <Button>
        Click Me
      </Button>
    )
  }
}
export default ClickMe;
```

`styled-components` combines some of the best facets of CSS/SCSS and JavaScript in a readable and concise manner.  The library does this by creating an `a` tag with the CSS outlined within the template string. You can then reference the `styled-component` the same way that you refer to a regular React component.

### Extending Component Styles
Many times, you may run into a scenario where you want to use a component but change it slightly to fit a single use case.  When this happens, `styled-component` offers the ability to extend the styles from another component.  This harkens back to the idea of inheritance in OOP.  Let's extend the Button from before to make an Error, Success, and Info button.

```js
import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.a`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  background-color: #55acee;
  box-shadow: 0px 5px 0px 0px #3C93D5;
  &:hover{
    background-color: #6FC6FF
  }
  &:active{
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
`;

const ErrorButton = Button.extend`
  background-color: #e74c3c;
  box-shadow: 0px 5px 0px 0px #CE3323;
  &:hover{
    background-color: #FF6656;
  }
`;

const SuccessButton = Button.extend`
  background-color: #2ecc71;
  box-shadow: 0px 5px 0px 0px #15B358;
  &:hover{
    background-color: #48E68B;
  }
`;

const InfoButton = Button.extend`
  background-color: #f1c40f;
  box-shadow: 0px 5px 0px 0px #D8AB00;
  &:hover{
    background-color: #FFDE29;
  }
`

class ClickMe extends Component {
  render() {
    return (
      <div>
        <Button>
          Normal
        </Button>
        <ErrorButton>
          Error
        </ErrorButton>
        <SuccessButton>
          Success
        </SuccessButton>
        <InfoButton>
          Info
        </InfoButton>
      </div>
    )
  }
}
export default ClickMe;
```

### Animations in React 
If you remember back when we talked about animation and transitions in CSS, there are two ways to animate using CSS, Transitions and Keyframes.

Transitions in React are still really simple. Through `styled-components` we can add the `transition` CSS property and use it in the same exact way as you would in CSS. 
Keyframes require a couple more steps, but are made much simpler through our style library.  In order to build a keyframe, you must first define the keyframe using `styled.keyframe`

```js
import styled, { keyframes } from 'styled-components';

...

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const RotatingDiv = styled.div`
  animation: ${rotate360} 2s infinite;
`;
```

This can be made even easier through another library called `react-animations`.  `react-animations` is simply the React version of [Animate.css](https://daneden.github.io/animate.css/). Here's an example of both libraries working together to create an animation.

```js
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;

const PulsingDiv = styled.div`
  animation: ${pulseAnimation} 2s infinite;
`;
```

### Styling Frameworks
With the immense popularity of React, many of the large styling frameworks have been ported over to React.

Here are a few of the most common:  
 * [Material UI](http://www.material-ui.com/)
 * [React Bootstrap](https://react-bootstrap.github.io/)
 * [React Foundation](https://react.foundation/)

 Many of these styling frameworks come with their own unique steps to set-up their framework.  If you decide to integrate a styling framework, make sure to take the time to follow their documentation to get it set up.


## YOU DO

For the remainder of the first half of class, you will be working on styling an Instagram clone.  
  1. Clone this repo: [React InstaClone](https://github.com/ATL-WDI-Curriculum/React-InstaClone )
  2. Checkout the `starter-code` branch.
  3. This application has all of the structure and logic to build a basic clone of the [Instagram Desktop page](https://www.instagram.com/).  Your mission is to use `styled-components` to recreate the styles seen on the Instagram site.
  4. If you get stuck along the way, you can check out a deployed version of the app [here](https://wdi11-instaclone.herokuapp.com/) or check out the `solution-code` branch for hints.

## Further Reading:

* [Styled-Components](https://www.styled-components.com/)
* [Styling React](https://survivejs.com/react/advanced-techniques/styling-react/)
* [How to Style React Components](https://www.sitepoint.com/style-react-components-styled-components/)
* [5 Minute Intro to Styled-Components](https://medium.freecodecamp.org/a-5-minute-intro-to-styled-components-41f40eb7cd55)
