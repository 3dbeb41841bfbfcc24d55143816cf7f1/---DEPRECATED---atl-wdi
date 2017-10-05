---
title: React Component Intro
type: Code-along
creator:
    name: Danny Hurley 
    city: ATL
competencies: ReactJS
---

# React Components

## Lesson Objectives

* Create and modify basic React components
* Generate "wrapper" components
* Generate dynamic lists of components
* Nest components within each other

### Let's create some components of our own!

## Creating a Movie Component

#### Let's go ahead and build our own Movie application (like [IMDB](http://www.imdb.com))

* The first thing we'll want to do is create a new `/components` directory. This will help us stay organized as we load our application up with components:

```bash
  $ mkdir src/components
```

* In our components directory, let's create a new Movie component:

```bash
  $ touch src/components/Movie.js
```

> NOTE: The naming convention for React components is `ComponentName.js`, as seen above.

* Let's open up our new `src/components/Movie.js` component and start adding some React boilerplate:

```javascript
  import React, { Component } from 'react';

  class Movie extends Component {
    render () {
      return (
        <div>Ima Movie!</div>
      )
    }
  }

  export default Movie;
```

<details>
  <summary>If we start our server now with `npm start`, what do we expect to see?</summary>
  <p>We wouldn't see anything! We haven't yet told our `<App />` component about the `<Movie />`.</p>
</details>

* So let's mount our new `<Movie />` using the existing `<App />` component! Let's take another look at `/src/App.js` and require in our `src/components/Movie.js` component. After that, we'll tell the `App` to show our `Movie` instead of the default React view it's been showing:

```javascript
  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';

  import Movie from './components/Movie';

  class App extends Component {
    render() {
      return (
        <Movie />
      );
    }
  }

  export default App;
```

* If we start our server now using `npm start`, we should see "Ima Movie!" appear in the browser. Let's break down what just happened.

  * First, we required the `Movie` component into the `App` component where we wanted to nest it.
  * Once we had required the component, all we had to do was use the `<Movie />` tag inside of our HTML to show the component. It's like we created our own custom HTML tag!
* If we wanted to show another `Movie` below our current one, we should be able to drop in another `<Movie />` tag below our current one:

```javascript
  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';

  import Movie from './components/Movie';

  class App extends Component {
    render() {
      return (
        <Movie />
        <Movie />
      );
    }
  }

  export default App;
```

* ...but we get an error! What's happening? If we look in the browser, we should see an error stating `Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag`. This is because we cannot return multiple elements from a single `.render()` function. There's an easy solution to this! Let's wrap both of our movies in a `<div>` tag:

```javascript
  import React, {Component} from 'react';
  import logo from './logo.svg';
  import './App.css';

  import Movie from './components/Movie';

  class App extends Component {
    render() {
      return (
          <div>
            <Movie/>
            <Movie/>
          </div>
      );
    }
  }

  export default App;
```

* Now when we check the browser, we see both of our movies. Let's explore this a different way by adding some more information to our `<Movie />` component:

```javascript
  import React, {Component} from 'react';

  class Movie extends Component {
    render() {
      return (
          <div>
            <h1>Breakin 2: Electric Boogaloo</h1>

            <div>Rating: PG</div>
            <p>Description: Breakin 2: Electric Boogaloo is a 1984 film directed by Sam
              Firstenberg. It is a sequel to the 1984 breakdancing film
              Breakin. Electric Boogaloo was released nine months after its
              predecessor by TriStar Pictures and by Cannon Films a few months
              later. In some international locations the film was released under
              the title Breakdance 2: Electric Boogaloo. Another sequel, Rappin
              (also known as Breakdance 3) was made but had an unconnected plot
              and different lead characters – only Ice-T features in all three
              movies.</p>
          </div>
      );
    }
  }

  export default Movie;
```

* Notice that all of the movie information is wrapped in a `<div>` tag. We should begin our new components with a wrapper `<div>` tag from now on!

### You Do: Nesting Components (15 minutes)

Just like our `<App />` component now contains some `<Movie />` components, any one component may contain several other components. Let's test this out by nesting a `<Review />` component inside of a `<Movie /> `.

> Remember, you'll need to create the component first, and then require and nest it inside of a parent component.

> What other components might appear inside of a `<Movie />` component?


### I Do: Creating Components from an Array

Right now, we've hard-coded two `<Movie />` components inside of our `<App />`. If we only ever had two movies that we wanted to show, this would be fine. In the real world, we could be displaying any number of `<Movie />s`. Let's explore this real-world scenario in our `App.js` component.

* First, we'll mock up some movie data in an array. Don't worry that this is some obviously fake data. We'll learn how to build components with dynamic data very soon:

```javascript
  // src/App.js
  import React, {Component} from 'react';
  import logo from './logo.svg';
  import './App.css';

  import Movie from './components/Movie';

  class App extends Component {

    render() {

      const movies = [
        {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
        {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
        {title: 'A Third Movie', rating: 'PG', description: 'this is yet another movie'},
      ];

      return (
          <div>
            <Movie/>
            <Movie/>
          </div>
      );
    }
  }
  export default App;
```

* Now, instead of typing a new `<Movie />` component into our JSX every time we want to display a new movie, we can use the Javascript `.map()` function inside of our `.render()` function to display as many movies as we have in our array. We'll do this by `.mapping` our list of movie objects, turning each into a `<Movie />` component. The output will be an array of `<Movie />` components.

We can plug this array of components straight into our JSX using a new, but very simple of React syntax: `{ variableName }`. This bracket syntax allows us to reference variables inside of our JSX / HTML.

> NOTE: Does this syntax remind you of Handlebars? That's because many different libraries use very similar syntax to do this type of `binding`.

* Let's try it out!

```javascript
  // src/App.js

  import React, {Component} from 'react';
  import './App.css';

  import Movie from './components/Movie';

  class App extends Component {

    render() {

      const movies = [
        {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
        {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
        {title: 'A Third Movie', rating: 'PG', description: 'this is yet another movie'},
      ];

      const movieComponents = movies.map((movie) => {
        return <Movie />;
      });

      return (
          <div>
            { movieComponents }
          </div>
      );

    }
  }

  export default App;
```

* When we refresh the page, we should now see three movies appear. Ignoring the fact that they all have the same data (for now), this is far more dynamic than our previous implementation. Now we can display dynamic lists of components, no matter how large our data set. Let's test this out by adding a few more movies:

```javascript

  // src/App.js
  import React, {Component} from 'react';
  import './App.css';

  import Movie from './components/Movie';

  class App extends Component {

    render() {

      const movies = [
        {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
        {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
        {title: 'A Third Movie', rating: 'PG', description: 'this is yet another movie'},
        {title: 'A Fourth Movie', rating: 'PG', description: 'this is yet another movie'},
        {title: 'A Fifth Movie', rating: 'PG', description: 'this is yet another movie'},
        {title: 'A Sixth Movie', rating: 'PG', description: 'this is yet another movie'}
      ];

      const movieComponents = movies.map((movie) => {
        return <Movie />;
      });

      return (
          <div>
            { movieComponents }
          </div>
      );
    }
  }

  export default App;
```

* When we refresh again, we'll see six movies appear instead of three!

### We Do: Wrapper Components

If we take a look at the current state of our `App.js`, we'll see that there is now a fair amount of code that deals with Movies. This is fine for now, as we are only showing Movies on the home page. But what would this look like if we also displayed information about Users on the home page? Or Bikes? Or Cats? The amount of code in this file would grow quickly.

`Separation of Concerns` is particularly important when building React components. Because we are putting all of our Javascript and HTML in the same file, these files will have to be especially small to be maintainable.

Currently our `App.js` file is simultaneously concerned with:

* Displaying the home page
* Containing our Movie data
* Parsing our movie data into separate `<Movie />` components
* AND displaying those Movies on the screen

That's a lot for one file! Let's instead let the `<App />` component simply display our homepage, and let a new `<MovieList />` component handle the rest of these concerns:

* First, we'll create a new, empty `<MovieList />` component in `/src/components/MovieList.js`:

```bash
  # In the terminal:
  $ touch src/components/MovieList.js
```

```javascript
  // Then in the new .js file: 
  // src/components/MovieList.js

  import React, {Component} from 'react';

  class MovieList extends Component {
    render() {
      return (
          <div>
            The Movie List
          </div>
      );
    }
  }

  export default MovieList;
```

* Let's test out our new component by rendering it inside of our `App.js`:

```javascript
  import React, {Component} from 'react';
  import './App.css';

  import Movie from './components/Movie';
  import MovieList from './components/MovieList';

  class App extends Component {

    render() {

      const movies = [
        {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
        {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
        {title: 'A Third Movie', rating: 'PG', description: 'this is a yet another movie'},
        {title: 'A Fourth Movie', rating: 'PG', description: 'this is a yet another movie'},
        {title: 'A Fifth Movie', rating: 'PG', description: 'this is a yet another movie'},
        {title: 'A Sixth Movie', rating: 'PG', description: 'this is a yet another movie'}
      ];

      const movieComponents = movies.map((movie) => {
        return <Movie />;
      });

      return (
          <div>
            <MovieList />
            { movieComponents }
          </div>
      );
    }
  }

  export default App;
```

* Now we should see our `<MovieList />` component rendering above all of our Movie info.
* Once we have created our "wrapper" component for Movie information, it's time to move all of Movie-related code out of our `App.js` and into the new component. We should end up with something like this:

  * `src/App.js`:

  ```javascript
		import React, {Component} from 'react';
		import './App.css';
		
		import MovieList from './components/MovieList';
		
		class App extends Component {
		
		  render() {
		    return (
		        <div>
		          <MovieList />
		        </div>
		    );
		  }
		}
		
		export default App;
  ```

  * `src/components/MovieList.js`:

		```javascript
		import React, {Component} from 'react';
		import Movie from './Movie';
		
		class MovieList extends Component {
		  render() {
		
		    const movies = [
		      {title: 'A Movie', rating: 'PG-13', description: 'this is a movie'},
		      {title: 'Another Movie', rating: 'R', description: 'this is another movie'},
		      {title: 'A Third Movie', rating: 'PG', description: 'this is a yet another movie'},
		      {title: 'A Fourth Movie', rating: 'PG', description: 'this is a yet another movie'},
		      {title: 'A Fifth Movie', rating: 'PG', description: 'this is a yet another movie'},
		      {title: 'A Sixth Movie', rating: 'PG', description: 'this is a yet another movie'}
		    ];
		
		    const movieComponents = movies.map((movie) => {
		      return <Movie />;
		    });
		
		    return (
		
		        <div>
		          { movieComponents }
		        </div>
		    );
		  }
		}
		
		export default MovieList;
	```

* When we refresh the page, everything should be the same as before, but our `App.js` is much, much cleaner.

### You Do: Creating Movie Reviews

Now let's add some Reviews to each movie! Pair up for this exercise, and remember to do the following:

* Create a "wrapper" component for each set of Reviews
* Within the Reviews wrapper component, create some "seed" Review data
* Display each Reviews within the wrapper component
* Display the wrapper component within each Movie

> NOTE: Don't worry about giving each Review separate content. We'll worry about that very soon.
