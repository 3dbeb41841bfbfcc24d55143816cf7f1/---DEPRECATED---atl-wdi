---
title: Intro to React
type: Lesson
duration: "1:25"
creator:
    name: Danny Hurley 
    city: ATL
competencies: Front-end frameworks
---

# Intro to React

### Objectives

- Describe why learning React is important
- Describe some benefits of front-end frameworks
- Describe Single Page Applications
- Describe Web Components
- Be able to "Think in React"

## Your first front-end framework!

It's finally time to super-charge our front-end workflow! Today, we'll take a look at React, a framework that will provide many powerful tools for us.

### Why do we need any more front-end tools? 

Because even with tools like jQuery and Bootstrap, we are still left with unsolved problems.

One problem is that there are a lot of common DOM-manipulation scenarios we'll find ourselves repeating over and over again as we build an application. Just because jQuery makes this easier, that doesn't mean we don't have to write the same jQuery code over and over again. Front-end frameworks wrap up many of these common scenarios and do the work for us.

Another problem is that we may have to refresh on every user interaction as new data emerges. Imagine how annoying it would be if Facebook refreshed the page _every_ time you clicked the "Like" button. What about _every_ time you drag something on a Trello board?

These are just two of the many examples of problems for which React provides elegant solutions. We'll explore many more ways that React works for us in the coming days.

### You Do (5 minutes)

* Get with a partner and write down three examples of `DOM manipulations` that you have to manually add to your page more than once per project.
* Then write down three websites that would have terrible UX if the page reloaded on every click. (You can't use the examples I gave though.)

## What is React? Why Should I Learn it?

React is a client-side framework created by Facebook that is quickly taking over the development world. React builds on the progress made by previous front-end frameworks, such as EmberJS and AngularJS, but has its own set of goals and priorities.

While many other frameworks focus on the flow of data within a front-end application, React focuses on breaking large web-applications into the smallest set of re-usable Web Components possible.

## What is a Web Component?

Web Components represent a modern strategy for managing the size and complexity of front-end applications. As the demand for web- and mobile-friendly interfaces has grown, so has the average size and complexity of an app. As these applications become larger and more complex, so does the need for keeping things clean and DRY. 

While there are many different implementations of Web Components, all share the same common characteristics. In its simplest form, a Web Component is a set of _closely-related_ HTML, JavaScript, and CSS that can be packaged up together to be re-used as many times as necessary. Some common examples of Web Components include:

* Checkout Carts that can be shared across multiple pages
* Navigation bars that are shared across multiple pages
* Headers and Footers that are shared across multiple pages

Each of these elements could be copied across your whole application, but as we already know, this wouldn't be DRY at all.

### Benefits of React:

* React solves complex problems using simple JavaScript. This is unlike other frameworks, which require more proprietary knowledge. For example, turning each element of an array into a `<div>` tag in React simply requires a JavaScript `.forEach()` or `.map()`. Doing the same in Angular looks like this: 

	```
	<div ng-repeat="item in itemsArray"></div>
	```
* The framework allows us to re-use a full set of HTML, JavaScript, and CSS as many times as we want, while keeping our code completely DRY.
* We will no longer have to refresh on every interaction. This improves both testing and User Experience.
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
* Filling out a lot of forms (e.g. Turbotax)
* Lots of view logic that depends on the state
* Anything real-time!

### When NOT To Use Client Side Frameworks

You will see soon that Front End frameworks add another level of complexity to our apps.

* Sites that are content heavy (https://www.mitsubishipro.com/) or require very little user interaction
  * Delays because it has to hit the server and there's no loading indicator
* Minimal interaction

<br />

### SPA Architecture

Single Page Applications (SPA) are all the rage today. A misconception is that a SPA has only a single view - this is far from the truth!  The single page aspect of a SPA refers to a single page coming from the server, such as our `index.html` page.  Once loaded, the SPA changes views by using **client-side** routing, which loads partial HTML snippets called templates.

![spa_architecture](https://cloud.githubusercontent.com/assets/25366/8970635/896c4cce-35ff-11e5-96b2-ef7e62784764.png)

Client-side routing requires something known as a **router**. As we will see a little later, the React ecosystem provides for us an easy-to-use router that will greatly simplify the amount of work we have to do to load many different templates within our application.


## Thinking In React

React requires us to think about our web applications in a very specific way. No longer will we have a dense, monolithic front-end application. Instead we should think of a page as the sum of as many small, distinct components as we can build. This way of thinking has been branded by the React team as **"Thinking In React"**.

### Take 10 minutes and read this article from the excellent React docs: [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

## You Do: Breaking applications down to components

### With a partner, choose a site such as [eBay](http://www.ebay.com), [Pinterest](http://www.pinterest.com), or [Instagram](http://www.instagram.com) and list the following:

* What are all of the components that make up your page?
* Are there any components that might be rendered multiple times on the same page?
* Draw a diagram of the page with boxes around each component. Alongside your diagram, list the components and the data that each component might require.



