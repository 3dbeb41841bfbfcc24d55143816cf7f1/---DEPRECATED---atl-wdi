---
title: React State and Constructors
type: Lesson
creator:
    name: Danny Hurley 
    city: ATL
competencies: Front-end frameworks
---

# React State and Constructors

## Lesson Objectives

* Discuss the need for `state` in front-end applications
* Manipulate state within a React application
* Discuss the need to share `state` across different parts of the application
* Share state across multiple React components
* Use Constructors to manage state and set up default values

## What is "State"?

As we have seen in our exploration so far, most of our job as web developers centers around displaying, storing, and manipulating `data`. This data is rarely "static", and nearly every action a user takes modifies some or all of the `data`. Because of this, the "shape" of our data is constantly changing as our application runs. Another word for the "shape" of our data at a given point in time is `state`.

Until now, we have stored "state" within our HTML `data-attributes` and `ids`. We've used `jQuery` to set and retrieve these values as we react to user input. This has worked out fine, but it requires quite a bit of work on our part. On top of that, the responsibility for handling our state has been shared between our HTML and Javascript files. 

React gives us a much simpler way to manage this state, and it allows us to keep all of it inside of our Javascript alone.

## How does React manage state?

Each Component class that we create in React has a `this.state` variable already set up for us! React, by default, gives us this very simple way of managing our state. If we want to preserve some data within a React component, all we have to do is attach it to the `this.state` object using `dot-notation`. 

While storing values in our `state` is really this simple, the complexity of `state-management` comes from sharing this `state` with multiple components. In this lesson, we will explore some common uses for React `state`. We will also practice modifying our `state` and then shared `state` to update multiple components at once.

## Managing State (Codealong)

### Let's build a hardware store!

We'll need a few "views" for our store, and they'll all need to share the same list of products, stored in `state`. These views will be:

* An Admin view, where we can view and maintain our list of available products
* A Shop view, where customers can see our list of products
* A cart view, where customers can add products they would like to purchase

### Set-up

Let's create the initial structure for our app:
	
* Inside of your class exercise directory, use the `create-react-app` tool to create a new `react-hardware-store` application:

	```bash
	$ create-react-app react-hardware-store
	```	
	
* `cd` into our new `react-hardware-store` directory and start the new application with `yarn start`:

	```bash
	$ cd react-hardware-store
	$ yarn start
	```	
	
* We should now see a default React application loaded in our browser!

### Creating the Home Page

* Now that we've set up our basic React application, let's start adding in custom components! First, we'll create a `components` directory and a new `<HomePage />` component:

	```bash
	$ mkdir src/components
	$ touch src/components/HomePage.js
	```
	
* ...and then we'll create a fresh, new `HomePage` component in our `src/components/HomePage.js` file:

	```javascript
	// src/components/HomePage.js
	
	import React, {Component} from 'react';
	
	class HomePage extends Component {
	  render() {
	    return (
	        <div>Home Page</div>
	    );
	  }
	}
	
	export default HomePage;
	```	

* ...and display it in our `App.js`:

	```javascript
	// src/App.js
	
	import React, { Component } from 'react';
	import HomePage from './components/HomePage';
	
	class App extends Component {
	  render() {
	    return (
	      <div>
	        <HomePage/>
	      </div>
	    );
	  }
	}
	
	export default App;
	```

* Let's add a little more detail to start making things a little more useful. We'll start by giving our store a name and announcing which product is currently on sale:

	```javascript
	// src/components/HomePage.js


	import React, {Component} from 'react';
	
	class HomePage extends Component {
	  render() {
	    return (
	        <div>
	          <h1>My Hardware Store</h1>
	          <div>Currently On Sale: A Hammer!</div>
	        </div>
	    );
	  }
	}
	
	export default HomePage;
	
	```
	
* When we refresh, we'll see the new home page for our store! We're starting to make some progress, but what happens now when we want to quickly update the name of the item that's on sale? We don't want to have to edit our HTML every time a new item goes on sale... We should probably store it in a variable, so we can quickly change it for later. This variable will be the first item we store in our component's `state`!
	
	To add this item to our state, we'll follow best practices and add a `constructor()` function to our component. This `constructor` gives us a nice, central place to describe the state of our component when it is first initialized. Let's see what it looks like:
	
	```javascript
	// src/components/HomePage.js

	
	import React, {Component} from 'react';
	
	class HomePage extends Component {
	
	  constructor() {
	    super();
	
	    this.state = {
	      itemCurrentlyOnSale: 'A Hammer'
	    };
	  }
	
	  render() {
	    return (
	        <div>
	          <h1>My Hardware Store</h1>
	          <div>Currently On Sale: A Hammer!</div>
	        </div>
	    );
	  }
	}
	
	export default HomePage;
	```	
	
* If we look inside of this `constructor` function, we have defined a variable on `this.state` called `itemCurrentlyOnSale`. Now that we have this variable, we can replace our hard-coded string in the `render()` function with a reference to this variable, just like any other variable:
	
	```javascript
	import React, {Component} from 'react';
	
	class HomePage extends Component {
	
	  constructor() {
	    super();
	
	    this.state = {
	      itemCurrentlyOnSale: 'A Hammer'
	    };
	  }
	
	  render() {
	    return (
	        <div>
	          <h1>My Hardware Store</h1>
	          <div>Currently On Sale: { this.state.itemCurrentlyOnSale }!</div>
	        </div>
	    );
	  }
	}
	
	export default HomePage;
	```	
	
* When we refresh, we should see that our page looks exactly the same, but now our application is much more dynamic. 

* If we open up our component now in Chrome's `React Dev Tools` tab, we should see some "State" with our value of `itemCurrentlyOnSale` available to us. If we edit the value of this property, it will be automatically updated in our browser!

#### Try it yourself! Update the value of `itemCurrentlyOnSale` to whatever you'd like and watch as React automatically updates the view!

### Modifying State with Buttons

Now that we've created a variable to hold our sale item, we'll want to give our Admin users a quick way of updating it. We'll ultimately need to build a text-input to edit this value, but let's make our page extra-fancy by `toggling` this text-input on and off using a button.

* First, we'll add the button and input field to our page:

	```javascript
	import React, {Component} from 'react';
	
	class HomePage extends Component {
	
	  constructor() {
	    super();
	
	    this.state = {
	      itemCurrentlyOnSale: 'A Hammer'
	    };
	  }
	
	  render() {
	    return (
	        <div>
	          <h1>My Hardware Store</h1>
	          <div>
	            <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
	            <span><button>Edit Sale Item</button></span>
	            <div>
	              <input type="text"/>
	            </div>
	          </div>
	        </div>
	    );
	  }
	}
	
	export default HomePage;
	```
	
* Since we want to toggle a text-input, we'll need some kind of `boolean` variable on our state to store this information. Let's create one in our `constructor` called `editSaleItem`, with a value of `true`:
	
	```javascript
	...
	this.state = {
      itemCurrentlyOnSale: 'A Hammer',
      editSaleItem: true
    }
	...
	```
	
* Now that we have a `flag` set up on the state of our component, deciding when to display our input field is as simple as using a Javascript `if-statement` or `ternary` inside of our `render()` method. Let's hide our text-input when `this.state.editSaleItem` is true:

	```javascript
	import React, {Component} from 'react';
	
	class HomePage extends Component {
	
	  constructor() {
	    super();
	
	    this.state = {
	      itemCurrentlyOnSale: 'A Hammer',
	      editSaleItem: true
	    };
	  }
	
	  render() {
	    return (
	        <div>
	          <h1>My Hardware Store</h1>
	          <div>
	            <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
	            <span><button>Edit Sale Item</button></span>
	
	            { this.state.editSaleItem ? <div><input type="text"/></div> : null }
	
	          </div>
	        </div>
	    );
	  }
	}
	
	export default HomePage;
	```
	
* If we open our `React Dev Tools` in Chrome, we can now toggle the value of `this.state.editSaleItem` and see our input go in and out of the page! This is pretty neat, but it will be even cooler once we've hooked it up to a button. 

	Let's start by building a function to handle this behavior. Since we'll be toggling the value of `editSaleItem` each time the button is clicked, we'll create a function called `_toggleEditSaleItem()` on our component class. Each time the function runs it will flip the value of `this.state.editSaleItem`. Here's an example:
	
	```javascript
	...
	  _toggleEditSaleItem = () => {
	    const editSaleItem = !this.state.editSaleItem;
	    this.setState({editSaleItem});
	  };
	...
	```
	
	> NOTE: The underscore in front of the method name is a common style choice of React developers. This indicates that this method is "private" to this particular component class. In other words, this method will only be used within this component.
	
* Not quite what we expected to see? There's a little bit more going on here than we previously described. Let's explore what this function is doing:
	* First, we are creating a new variable that is a copy of our `state` value. In the same line of code, we are flipping this value, so that our new variable contains the opposite of our current state value.

		In other words, we are flipping our "toggle" and storing the value as a new variable, while using the same variable name as the property on our `state`.
		
	* Once we have obtained the new value for our `this.state.editSaleItem`, we use a built-in React method called `setState()` to update the value. While we could have simply done something like this instead...

		```javascript
		...
		this.state.editSaleItem = !this.state.editSaleItem
		...
		```
		
		The use of `setState()` is a best practice and will allow us to avoid many common pitfalls that come from updating our component's state directly. 
		
* Just like our jQuery days, we'll need to add some kind of `event listener` to our toggle button so it will run our function. Fortunately, React has several pre-built `events` that will handle all of this functionality for us. We simply need to build a function, and tell the button to trigger the function `onClick()`:

	```javascript
	<button onClick={this._toggleEditSaleItem}>
		Edit Sale Item
	</button>
	```
	
* Let's try it out! When the page refreshes, we can now toggle our input in and out of the page with the click of a button.	
	
### You Do: Updating the Button Value based on State

Now that we are toggling our input field in and out of the page, we probably want to change the button text to reflect our state as well. Pair up and add the following functionality:

* When `editSaleItem` is false, our button should say "Edit Sale Item"
* When `editSaleItem` is true, our button should say "Hide"

<details>
	<summary><b>SOLUTION</b></summary>
		
```javascript
import React, {Component} from 'react';
	
class HomePage extends Component {
	
  constructor() {
    super();
	
    this.state = {
      itemCurrentlyOnSale: 'A Hammer',
      editSaleItem: true
    };
  }
	
  _toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({editSaleItem});
  };
	
  render() {
    return (
        <div>
          <h1>My Hardware Store</h1>
          <div>
            <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
            <span>
              <button onClick={this._toggleEditSaleItem}>
                { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
              </button>
            </span>
	
            { this.state.editSaleItem ? <div><input type="text"/></div> : null }
	
          </div>
        </div>
    );
  }
}
	
export default HomePage;
```	
	
</details>
---

## Modifying State with Forms

Now that we are able to toggle our text-input on and off, it's time to update our sale item value.

* The first thing we'll want to do is pre-populate our form with the current value. We can use the standard HTML `value=""` tag to accomplish this. Let's drop the current value of `this.state.itemCurrentlyOnSale` into our input's `value`:

	```javascript
	import React, {Component} from 'react';
	
	class HomePage extends Component {
	
	  constructor() {
	    super();
	
	    this.state = {
	      itemCurrentlyOnSale: 'A Hammer',
	      editSaleItem: true
	    };
	  }
	
	  _toggleEditSaleItem = () => {
	    const editSaleItem = !this.state.editSaleItem;
	    this.setState({editSaleItem});
	  };
	
	  render() {
	    return (
	        <div>
	          <h1>My Hardware Store</h1>
	          <div>
	            <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
	            <span>
	              <button onClick={this._toggleEditSaleItem}>
	                { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
	              </button>
	            </span>
	
	            { this.state.editSaleItem ? <div><input value={this.state.itemCurrentlyOnSale} type="text"/></div> : null }
	
	          </div>
	        </div>
	    );
	  }
	}
	
	export default HomePage;
	```

* When we refresh, we should see that the our form input is pre-populated with the sale item from our `state`, but there's a problem! 

	Our input field is now disabled. When we try to change our text value, nothing happens. This is because we have not told React how to react to any changes in this data. In order for us to update our state, we must turn our input into a `controlled input`. We will do this by giving React a function to run any time the input changes.
	
* First, let's create the function that we want to run. Every time the input text changes, we want the corresponding value on our `state` to update as well, so we'll create something like this:

	```javascript
	...
		_handleItemCurrentlyOnSaleChange = (event) => {
		    const itemCurrentlyOnSale = event.target.value;
		
		    this.setState({itemCurrentlyOnSale});
	  	};
	...
	```	
	
* Then, we'll tell the form to run our function every time the input changes, using React's built-in `onChange` event:

	```javascript
	...
		{
	      this.state.editSaleItem ?
	        <div>
		        <input 
			        onChange={this._handleItemCurrentlyOnSaleChange}
			        value={this.state.itemCurrentlyOnSale} 
			        type="text"
		        />
	        </div>
	        : null
	    }
	...
	``` 
	
* If we look closely at our function, we should see some very familiar code. To change our state in React, we simply use a plain old Javascript event. This event contains the current value our form input. The event is fired automatically by React every time the input changes. 

	Because we are using this new value to update the state every time the input changes, we should be able to see the displayed sale item update in real-time, as we type it! Let's check it out in the browser.

## Unidirectional Data Flow

We have successfully modified the state of a single component in two different ways now: with a button and a form. This is fairly simple when all of our state is used within a single component, but what happens when we want to share this data between multiple components?

While there are many different strategies out there for sharing state, React emphasizes a `unidirectional data flow`. This `unidirectional data flow` means that data should only flow downwards to child components, never upwards. It also means that we should never end up with multiple copies of the same data that could become out of sync. In the simplest terms, this means we should store our state as high up in our `tree` of components as possible. 

We want to build both an Admin View and a Store View that show the same exact data in different ways. When the data is updated through the Admin View, we should see the data immediately updated in the Store View. 

<details>
	<summary>
		<b>Assuming both of these views will be mounted on our HomePage component, which component's `state` should contain our product info?</b>
	</summary>
	<p>The product information should be stored in either our HomePage or App components, so that the data can _trickle down_ to any other components that might need it.</p>
</details>

### Building the Admin View














- we want to store the overall state as high up in the component tree as we can ===> App.js
- state can be modified by child components, only if we pass functions to allow it < reverses "scope" rules

## Changing State

- spread operator to copy part of state being modified
- possibly unique ids? timestamps?
- setState()

## Changing State From Child Components



## Sharing State Across React components
- trickles down