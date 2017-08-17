# Testing React

## Lesson Objectives:

* Describe the difference between Unit and Integration testing
* Unit test React components using Jest and Enzyme
* Integration test React components using Jest and Enzyme

## Automated Testing

We have been testing our code since we wrote our very first "Hello, World." 
Whenever we have a working block of code, we click through our application 
to find any bugs or anomalies that may have popped up since our last test. 
We do this for a pretty obvious reason: we can't just ship broken code. 

Testing is part of development. No one would ever downplay the importance 
of testing our code, but many developers spend very little energy on testing as its
own skillset. There's always a new language or library to learn, and we can 
always click our way through the code just as before,
**why spend the extra time?**

Today we're going to explore some new tools and strategies that will hopefully
answer that question. Let's explore Automated Testing as a new skill-set that 
will supercharge our development workflow, and save us a lot of headaches along 
the way

## What do we mean by "Automated" Testing?

Until now, testing our application has consisted of clicking and 
typing our way through our app's screens until we are confident 
that everything is working. Even with a small application, this quickly turns 
into a tedious exercise. With each new feature, we have a full set of 
previous features that could have broken on top of a new feature that is 
unproven. This means that the time it takes to test our application is 
going to grow at the rate that our application grows. With a 
reasonably-sized application, this will quickly get out of hand.

Automated Tests are **sets of code that test other code**. Essentially, 
using automated testing tools, we can tell our code how to test itself. Then the
next time we want to know if our features work, we just have to _ask_.

## Automated Testing in React

React was built from the ground up with "testability" in mind. Most of
the code we write in React is very simple, pure Javascript. That means 
that there is a pre-existing arsenal of Javascript testing tools already
available for React applications. While many of these tools are great, 
React still does things a pretty specific way. To address this problem, 
the React community has created or chosen a set of specific tools that 
work together to make React testing a breeze. We'll use two of these tools
today: `Jest` and `Enzyme`.

# Jest
[Jest](https://facebook.github.io/jest/) is a testing framework created 
by Facebook. It can be used to test any Javascript code, but was created 
with React in mind. As a matter of fact, when we make a new React app 
using the `create-react-app` tool, `Jest` is automatically set up for us.

Let's take a look at a file we may have previously ignored, `App.test.js`:

```jsx harmony
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

Right next to our `App.js`, the `create-react-app` tool sets up an automated 
`Jest` test out of the box. This is a very simple test, known 
as a `Smoke Test`. `Smoke Tests` simply run some code and check to see if 
any errors are thrown. They don't describe any low-level behavior of the code, 
only that it works on a high-level.

If we run `yarn test` in our console, we should see that this test passes. 
We'll also see another one of `Jest's` best features at work: the `Jest`
test-runner. When we run `yarn test` with our default React set-up, `Jest` 
will run our tests for us, give us a nicely-formatted report, and then 
automatically re-run our tests when it detects code changes.

As we'll see in a few minutes, `Jest` also gives us easy-to-use methods 
for organizing and DRYing up our tests. It also gives us very simple 
libraries for `test assertions`.

# Enzyme
[Enzyme](http://airbnb.io/enzyme/) is a testing tool, created by AirBnB, 
that was specifically created for React. While `Jest` is primarily concerned 
with setting up and running our tests, `Enzyme` will let us create and inspect
React components, without having to run our entire application.

Enzyme is not set up for us out of the box, so we'll need to set it up each 
time we add a new application.

# Unit-Testing vs. Integration Testing in React

Now that we have entered the world of automated testing, there are many different 
types of testing strategies for us to explore. We could spend an entire day 
discussing this dense topic, but instead we're going to begin our React testing 
journey with the most ubiquitous of these testing strategies: Unit Tests and their 
slightly more complex cousins, Integration Tests.

Unit Tests, by definition, are very simple. To correctly label a test a Unit Test, 
it must be concerned with only one "unit" of code. A "unit" of code most often includes
a _single_ class or even better, a _single_ function, called only _one_ way.

It can be tricky to recognize the proper parameters that define a good Unit Test without
comparing our Unit Tests to Integration Tests. Integration tests are concerned with 
the relationship between multiple units of code, and therefore test much larger 
chunks of code. 

Our goal should be to properly Unit Test as many of our classes and functions as possible,
and only Integration Test when we need to describe how these small, well-tested units "talk"
to each other. Let's look at some examples where we'll use each strategy:

## Unit Test Examples:
Situations where we'll want to Unit Test include:

* Making an API call before a component loads, and ensuring the results end up on the state.
* Updating a form on a specific class, and expecting that the state is properly updated. 
No other components or functions need to be run except the one that updates our state.
* A toggle function that flips a boolean flag when a button is clicked. This behavior 
should only take place within a single class.

## Integration Test Examples:
Situations where we'll want to Integration Test include:

* Verifying that a `prop` is passed correctly from one Component to the next.
* Verifying that the proper set of Components is rendered inside of a parent component.
* Verifying that we can correctly navigate from one component to the next using React Router.

## Building Unit Tests

- unit test props passing
- unit test a form
