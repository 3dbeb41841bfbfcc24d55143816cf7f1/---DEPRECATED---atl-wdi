---
title: The React Component Lifecycle 
type: lesson
duration: "1:25"
creator:
    name: Jamie King
    city: ATL
competencies: Front-end frameworks
---
 
# React Component Lifecycle

### Objectives
*After this lesson, students will be able to:*

- Have a deeper understanding of mounting, unmounting, and updating React components.
- Properly add AJAX calls to a React component class.

### Preparation
*Before this lesson, students should already be able to:*

- Understand and build basic React applications.
- Make HTTP requests using AJAX, preferably with the Axios Library

<br>

### React Component Lifecycle

When building a React application, EVERYTHING is a component.  In React, we create a component by extending the `React.Component` method.  When we extend the `Component` class, we gain the methods that allow us to build a stateful component.  So far, we've only been  A component has several methods that get executed every time it is mounted, updated, or unmounted.  This is important because we need to overwrite one of these methods to make our API call.

<div style="width: 100vw; height: 40vh;">
  <img style="float: left; width: 40vw; padding: 0px 15px;" src="http://imgur.com/BrWR7kt.jpg" />
  <img style="float: right; width: 40vw; padding: 0 15px 30px;" src="http://imgur.com/b4aedU0.jpg" />
  <img style="float: left; width: 40vw; padding: 15px;" src="http://imgur.com/wU8sCmr.jpg" />
  <img style="float: right; width: 40vw; padding: 0 15px;" src="http://imgur.com/soRxdUY.jpg" />
</div>

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
