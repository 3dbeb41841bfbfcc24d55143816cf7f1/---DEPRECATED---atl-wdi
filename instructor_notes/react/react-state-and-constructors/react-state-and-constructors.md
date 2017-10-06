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

## How is state different from props?
In many ways state and props operate similarly.  Both are plain JS Objects that hold data about your application and both of them trigger a render when they are updated.  However, there are some important differences between the two.

**Props Are Owned by a Parent Component, State is Owned by the Component**
* When we refer to props, that means that it has been passed down from a parent component.
  `<Movie title={"Blade Runner 2049"} year={2017} />`
* State is declared within the component.
```javascript
  ...
  constructor(){
    super()
    this.state = {
      movie: "Blade Runner",
      year: 1982
    }
  }
  ...
```
**Props Are Immutable, State is Not**
* It is impossible to directly change a components `prop` values
* State is able to be mutated via `this.setState()`

## Managing State (CodeAlong)

### Let's build a hardware store!

We'll need a few "views" for our store, and they'll all need to share the same list of products, stored in `state`. These views will be:

* An Admin view, where we can view and maintain our list of available products
* A Shop view, where customers can see our list of products
* A Cart view, where customers can add products they would like to purchase

### Set-up

Let's create the initial structure for our app:

* Inside of your class exercise directory, use the `create-react-app` tool to create a new `react-hardware-store` application:

```bash
  $ create-react-app react-hardware-store
```

* `cd` into our new `react-hardware-store` directory and start the new application with `npm start`:

```bash
  $ cd react-hardware-store
  $ npm start
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
  <summary><b>SOLUTION</b>
</summary>

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
          type="text" />
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

## Building the Admin View

Let's build an Admin view that will allow us to create some Products for our hardware store!

### Creating the Component

* Let's create our new AdminView component:

```bash
  $ touch src/components/AdminView.js
```

```javascript
  import React, {Component} from 'react';

  class AdminView extends Component {
    render() {
      return (
          <div>
            <h1>Admin View</h1>
            <h2>Products</h2>
            // show our list of products here
            <h2>Create a New Product</h2>
            // create product form goes here
          </div>
      );
    }
  }

  export default AdminView;
```

* ...and then we'll need to mount this component to our HomePage:

```javascript
  ...
  import AdminView from './AdminView'
  ...

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

  <AdminView/>
  ...
```

### Showing Our Products

* Now that we've mounted our component, we'll want to add some functionality. The first thing we'll want to see in our AdminView is a list of products. 

<details>
  <summary>Which component's 'state' should contain this list of products?</summary>
  <p>
    If we only ever needed to view product information on our AdminView or its child components,
    we could store the product list on our AdminView itself. However, we'll want to use this information across many components. If we want to respect React's "unidirectional data flow", we should store data in a top-level component. We'll put it in our HomePage.
  </p>
</details>

* Let's create our `productList` on the `state` of our HomePage component. Remember, we'll set up our `state` inside of our `constructor()` function:

```javascript
  ...
  constructor() {
  super();

  this.state = {
    itemCurrentlyOnSale: 'A Hammer',
    editSaleItem: true,
    productList: [
      {
        productName: 'Hammer',
        description: 'Itsa hammer',
        price: 12.3,
      },
      {
        productName: 'Nail',
        description: 'Itsa nail',
        price: 0.12,
      }
    ]};
  }
  ...

```

* We don't need to show this information on our HomePage directly, so let's pass it on to the AdminView component using `props`.:

```javascript
  ...
  <AdminView productList={this.state.productList}/>
  ...
```

* As we are beginning to see, our `state` and `props` can work together to solve a lot of problems!

* Now that we have created some initial data for our `productList` and passed it down to our `AdminView`, it's time to display our list of products! Let's create a `ProductList` component that we'll use to display a list of smaller Product components in our AdminView. 

This `ProductList` will need access to the same `productList` we passed into our `AdminView`. No problem! We can just pass `props` straight through our `AdminView` and down to a child component using more `props`.

```javascript
  // src/components/ProductList.js

  import React, {Component} from 'react';

  import Product from './Product';

  class ProductList extends Component {
    render() {
      const productList = this.props.productList;

      console.log(productList);

      const productComponents = productList.map((product, index) => {
        return <Product
            productName={product.productName}
            description={product.description}
            price={product.price}
            key={index}/>;
      });

      return (
          <div>
            { productComponents }
          </div>
      );

    }
  }

  export default ProductList;
```

---

```javascript
  // src/components/Product.js

  import React, {Component} from 'react';

  class Product extends Component {
    render() {
      const productName = this.props.productName;
      const description = this.props.description;
      const price = this.props.price;

      return (
          <div>
            <h3>{productName}</h3>
            <div>{description}</div>
            <div>{price}</div>
          </div>
      );
    }
  }

  export default Product;
```

## Adding Some Products

* Now that we're able to view our product list, it's time to add some new products. As always, to update our existing information we'll need a form. Let's add a new `ProuctForm` to our `AdminView`. Just as before, we'll need to use an `onChange()` function to update our Component's state. Let's create a `newProduct` on the state to keep track of the form's changes.

```jsx
	
  // src/components/ProductForm.js
  import React, {Component} from 'react';

  class ProductForm extends Component {

    constructor () {
      super();

      this.state = {
        newProduct: {}
      }
    }

    _handleNewProductChange = (event) => {
      const attributeName = event.target.name;
      const attributeValue = event.target.value;

      const newProduct = {...this.state.newProduct};
      newProduct[attributeName] = attributeValue;

      this.setState({newProduct})
    };

    render() {
      return (
          <div>
            <form>
              <div><input name="productName" type="text" placeholder="Name" onChange={this._handleNewProductChange}/></div>
              <div><input name="description" type="text" placeholder="Description" onChange={this._handleNewProductChange}/></div>
              <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this._handleNewProductChange}/></div>
              <div><input type="submit" value="Create New Product"/></div>
            </form>
          </div>
      );
    }
  }

  export default ProductForm;
```

```jsx
  // src/components/AdminView.js
  ...	
  import ProductForm from './ProductForm';
  ...

  ...
  	<ProductForm/>
  ...

```

* If we take a look at this `_handleNewProductChange` function, we'll see some fancy new syntax. Just as we did with our toggle on the HomePage, we need to make a copy of the state value we are updating, instead of updating the state itself. the `{...this.state.newProduct}` block that you see is using a great new Javascript feature known as the `spread operator`. 

This `...` syntax tells Javascript to make a copy of our `this.state.newProduct` object. The copy will have all of the previous info that our `newProduct` contained, but we can now edit this object without updating our `state` directly. We'll use our event info to change the `newProduct` object and then `.setState()` to store it back to our `state` itself.

* Our `ProductForm` component will now successfully create a new product object for us. The big question we now have to answer is this: How do I get this object into the `productList` on my `HomePage` state?

<details> 
  <summary>
    Couldn't I just pass in the "productList" as a prop, and then use .push() to add my new item?
  </summary>
	<p>While this would be a very simple approach, we must remember that props are _read only_. This means we won't have the ability to change props that are passed down.
  </p>
  <p> Another problem is that we want to change the actual "productList" of the HomePage component, not just a copy inside of our current component. This change needs to be able to trickle down to all other components that deal with product information. We'll have to figure out how to change the "productList" on the HomePage component itself.
  </p>
</details>

* If we need to change the `productList` on the `HomePage` component itself, then the update function will also have to live on the `HomePage` component. Fortunately, we can pass this function down to our child components as a prop! Let's create the function and pass it down to our `AdminView`:

```jsx
  // src/components/HomePage.js

  ...
  _addNewProductToProductList = (newProduct) => {
      const productList = [...this.state.productList];
      productList.push(newProduct);
      this.setState({productList});
  };
  ...

  ...
  <AdminView 
    productList={this.state.productList} 
    addNewProductToProductList={this.)_addNewProductToProductList}/>
  ...
```

* Since we'll actually want to use the function in our `ProductForm`, let's shuttle it down one more time from the `AdminView` to the `ProductForm` using `props`:

```jsx
  ...
  <ProductForm addNewProductToProductList={this.props.addNewProductToProductList}/>
  ...
```

> NOTE: We can use the `spread operator` for arrays as well as objects!

* Now all we have to do is add an `onSubmit()` listener for our `ProductForm` and pass our `newProduct` into the function from our `props`:

```jsx
  // src/components/ProductForm.js
  ...
   _addNewProduct = (event) => {
    event.preventDefault();
    this.props.addNewProductToProductList(this.state.newProduct);
  };
  ...

  ...
  <div>
    <form onSubmit={this._addNewProduct}>
      <div><input name="productName" type="text" placeholder="Name" onChange={this._handleNewProductChange}/></div>
      <div><input name="description" type="text" placeholder="Description" onChange={this._handleNewProductChange}/></div>
      <div><input name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this._handleNewProductChange}/></div>
      <div><input type="submit" value="Create New Product"/></div>
    </form>
  </div>
  ...
```

* Now when we submit, we will see our new product reflected in any and all components that display our `productList`!

## You Do: Deleting Products

* Add a button to each product in the Admin view that will allow us to delete the product.

## You Do: Create a ShopView Component

Let's create a ShopView to show our product info in a different way. 

* Create your ShopView component and any necessary components to display the product info without any ability to edit.
* Remember that Products are able to be deleted now, so we may need to create a different type of product component that does not have this ability.
