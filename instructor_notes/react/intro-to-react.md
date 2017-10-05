---
title: Intro to React
type: Lesson
duration: "1:25"
creator:
    name: Danny Hurley 
    city: ATL
competencies: Front-End Frameworks
---

# Intro to React

### Objectives

- Describe why React is important
- Describe some benefits of front-end frameworks
- Differentiate between a Single Page Application and a Server Rendered Application
- Describe Web Components
- Be able to "Think in React"

It's finally time to super-charge our front-end workflow! Today, we'll take a look at React, a JavaScript library that allows us to build Single Page Applications (aka SPAs).

### Why do we need any more front-end tools?

At this point, many of you are just starting to feel comfortable with libraries like jQuery.  Why would we choose to leave behind this widely used library in favor of a newer one like React?  The primary reason for this is that even with these tools, we are still left with some unsolved problems that normally appear as our application grows.

#### DRY Code

One problem is that there are a lot of common DOM-manipulation scenarios we'll find ourselves repeating over and over again as we build an application. Just because jQuery makes this easier, that doesn't mean we don't have to write the same jQuery code over and over again. Front-End frameworks will allow us to DRY up our code into reusable "Web Components"

#### Page Refresh

Another problem that React will solve for us is that we currently refresh our entire page whenever we make a request to the server or need a new view.  This creates a less than desirable user experience. Imagine how annoying it would be if Facebook refreshed the page _every_ time you clicked the "Like" button, made a comment, or sent a chat message. What about _every_ time you drag something on a Trello board?

#### Developer Tooling

Libraries like React and Angular have their own dedicated dev tools that help developers quickly test and debug their front-end code.  This will allow us to better understand what each part of our code is doing as our codebase grows into thousands of lines of code.

#### Better Separation of Concerns

Finally, libraries like React, Vue, and Angular provide patterns to help us write small pieces of UI (called Components) and separate them into their own files.  This helps as we create more and more complex user interactions.

These are just a few of the many examples of problems for which React provides elegant solutions. We'll explore many more ways that React works for us in the coming days.

### You Do (5 minutes)

- Get with a partner and write down three examples of `DOM manipulations` that you have to manually add to your page more than once per project.
- Then write down three websites that would have terrible UX if the page reloaded on every click. (You can't use the examples I gave though.)

## What is React? Why Should I Learn it?

React is a client-side library created by Facebook and is currently the most popular front-end library available. React builds on the progress made by previous front-end frameworks, such as EmberJS and AngularJS, but has its own set of goals and priorities.

While many other frameworks focus on the flow of data within a front-end application, React is narrower in focus.  Instead, React focuses solely on building dynamic UIs that are updated efficiently.  We will do this using JavaScript, an extension called JSX, and a build tool called Webpack.  This means no more Handlebars to handle our views!

> “You will become better at JavaScript because React doesn’t come with a templating system. Instead, React pushes you to use the full power of JavaScript to build your user interface. You are going to practice using parts of functional programming with map and filter and also encouraged to use the latest features of JavaScript (including ES6). By not abstracting away data management, React will force you to think about how to architect your app and encourage you to consider concepts like immutability.”
>
> -- Christopher Chedeau, React Engineer @ Facebook

## What is a Web Component?

Web Components represent a modern strategy for managing the size and complexity of front-end applications. As the demand for web- and mobile-friendly interfaces has grown, so has the average size and complexity of an app. As these applications become larger and more complex, so does the need for keeping things clean and DRY.

While there are many different implementations of Web Components, all share the same common characteristics. In its simplest form, a Web Component is a set of _closely-related_ HTML, JavaScript, and CSS that can be packaged up together to be re-used as many times as necessary. Some common examples of Web Components include:

- Checkout Carts that can be shared across multiple pages
- Navigation bars that are shared across multiple pages
- Headers and Footers that are shared across multiple pages

Each of these elements could be copied across your whole application, but as we already know, this wouldn't be DRY at all.

There are multiple options available to help developers build reusable Web Components.  It seems like every day there is a new JavaScript framework that solves the same problems.  Here's a list of some of the most popular: [Popular JS Frameworks](https://bestof.js.org/tags/framework/)

### You Do (3 minutes)

- Work with a partner and look at your previous projects. Try to find pieces of repetitive HTML that could benefit from being separated into web components.


### Benefits of React

- React solves complex problems using simple JavaScript. This is unlike other frameworks, which require more proprietary knowledge. For example, turning each element of an array into a `<div>` tag in React simply requires a JavaScript `.forEach()` or `.map()`.

```js
  itemsArray.map(item => {
    return <div>{item}</div>
  });
```

Doing the same in Angular requires you to write Angular specific HTML:

```html
  <div ng-repeat="item in itemsArray">{{item}}</div>
```

- React allows us to easily build reusable components. This keeps our code nice and dry.
- We will no longer have to refresh on every interaction. This improves both testing and User Experience.
- Allows our pages to update as quickly as possible, by reloading only the parts of the page that have changed. This works through utilizing something called the [Virtual DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)
- Makes Web Components first-class citizens of the framework.
- Makes us more productive when developing web apps requiring less code from the developer.
- Provides a lot of powerful and easy-to-use tooling, out of the box.
- Was designed with testing in mind.

## When should we use client-side frameworks?

### When To Use Client Side Frameworks

- High level of interaction (like Facebook, Trello, Gmail)
- Filling out a lot of forms (e.g. TurboTax)
- Lots of view logic that depends on the state
- Anything real-time!

### When NOT To Use Client Side Frameworks

You will see soon that Front End frameworks add another level of complexity to our apps.

- Sites that are content heavy (like this one: [Mitsubishi](https://www.mitsubishipro.com/)) or require very little user interaction
  - Delays because it has to hit the server and there's no loading indicator
- Minimal interaction

### SPA Architecture

Single Page Applications (SPA) are all the rage today. A misconception is that a SPA has only a single view - this is far from the truth!  The single page aspect of a SPA refers to a single page coming from the server, such as our `index.html` page.  Once loaded, the SPA changes views by using **client-side** routing, which loads partial HTML snippets called templates.

![spa_architecture](https://cloud.githubusercontent.com/assets/25366/8970635/896c4cce-35ff-11e5-96b2-ef7e62784764.png)

Client-side routing requires manipulating the browser's [**history API**](https://developer.mozilla.org/en-US/docs/Web/API/Window/history). This is slightly different than the RESTful Routes we built previously in Express.

As we will see a little later, the React ecosystem provides for us an easy-to-use router that will greatly simplify the amount of work we have to do to load many different templates within our application.

### Apps Built with React (partially or completely):

- [Khan Academy](https://www.khanacademy.org/math/algebra/introduction-to-algebra/overview-hist-alg/v/origins-of-algebra)
- [Codecademy](https://www.codecademy.com/learn/all)
- [Facebook](https://www.facebook.com)
- [Instagram](https://www.instagram.com)
- [Netflix](https://www.netflix.com)
  - Great write-up about why Netflix uses React [here](https://medium.com/netflix-techblog/netflix-likes-react-509675426db)
- [The New York Times](https://www.nytimes.com/interactive/2014/02/02/fashion/red-carpet-project.html)
- Plenty of examples at [React.Rocks](https://react.rocks/)

## Thinking In React

React requires us to think about our web applications in a very specific way. No longer will we have a dense, monolithic front-end application. Instead we should think of a page as the sum of as many small, distinct components as we can build. This way of thinking has been branded by the React team as **"Thinking In React"**.

### Take 10 minutes and read this article from the excellent React docs: [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

## You Do: Breaking applications down to components

### With a partner, choose a site that is highly interactive such as [eBay](http://www.ebay.com), [Pinterest](http://www.pinterest.com), or [Instagram](http://www.instagram.com) and list the following:

- What are all of the components that make up your page?
- Are there any components that might be rendered multiple times on the same page?
- Draw a diagram of the page with boxes around each component. Alongside your diagram, list the components and the data that each component might require.
