# React Documentation Scavenger Hunt

[React Docs](https://facebook.github.io/react/docs/hello-world.html)

### Post answers (and links to where you found them) for each of the questions below:

1. Can we use `npm` with React or do we have to use `yarn`?

Create React App doesn't handle backend logic or databases so you can use it with any backend you want.

https://reactjs.org/docs/installation.html#installing-react

2. We are using JSX to write HTML inside of our React. Are we required to use JSX with React? Are there any alternatives?

No, you aren't required to use only JSX. You can also write plain javascript.

https://reactjs.org/docs/react-without-jsx.html#___gatsby

3. Does React re-render the entire component when one part of it changes?

No, React components allow us to separate and make changes to individual parts.

https://reactjs.org/docs/components-and-props.html

4. Should we ever change `props` (or parameters) inside of a component? 

Apparently React has 1 single strict rule: "All React components must act like pure functions in respect to their props." . My guess would be an emphatic NO.

https://reactjs.org/docs/components-and-props.html#extracting-components

5. Are all components classes? 

I'm a little confused here. What I found in the reference docs says components are an "abstract base class" and that you typically avoid referring to it directly, rather subclass it and define a render() method. 
So, No they aren't?

https://reactjs.org/docs/react-component.html

6. List five "Synthetic Events" provided by React:

    a) Form Events
    b) Keyboard Events 
    c) Mouse Events
    d) Selection Events
    e) Image Events

    https://reactjs.org/docs/events.html

7. Do we have to use ES6 syntax with React?

No, you do not have to use ES6.

https://reactjs.org/docs/react-without-es6.html

8. Where can I go to check out React's built-in Accessibility features?

To the Docs?

https://reactjs.org/docs/accessibility.html

9. List five React Component Lifecycle Methods:

componentWillMount(), componentDidMount(),
render(),shouldComponentUpdate(), componentWillUpdate() 

https://reactjs.org/docs/react-component.html#the-component-lifecycle

10. Where would I go to check out React's built-in testing tools?

Test utilities path in Reference dropdown 

https://reactjs.org/docs/test-utils.html

### Turning in:

* Post a link to this file on Github to Schoology.
