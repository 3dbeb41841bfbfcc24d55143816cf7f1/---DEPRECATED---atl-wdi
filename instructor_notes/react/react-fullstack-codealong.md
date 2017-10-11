---
title: React Full-Stack
type: lesson
duration: "6:00"
creator:
    name: Jamie King
    city: ATL
competencies: Full-Stack Applications
---
 
# Building a Full Stack Application with the MERN stack

### Objectives
*After this lesson, students will be able to:*
- Use MongoDB and Mongoose to persist data to be served to the UI.
- Build an Express server that serves information in a JSON format.
- Connect API to React via `axios`
- Deploy the full stack application to Heroku

We've learned a lot about the modern tooling and practicing around the React ecosystem over the past couple of days.  A lot of modern JavaScript is focused on knowing the right tools for the job.  Today we will be pulling in everything we've learned about Node and React to build a full stack application using the MERN stack.

## MERN Stack
When you see MERN stack, this is typically just a shorthand way of saying that the application is a full-stack JavaScript app.  The tools that we use for MERN apps are: Mongo (Mongoose), Express, React, and Node.  While there are some boilerplate tools to build out a full MERN stack app, we are going to build our own using `create-react-app` and the Express and Mongo patterns we've used in the past.  This allows us to fully understand our application and prevents introducing a bunch of code that we haven't written and understand.

## Full Stack Jeopardy
Today we are going to be building a full stack version of Jeopardy!  We will be storing all of our questions in a Mongo database, serving that info via Express, and serving the views using React. Cool!  

Before we get started writing our app.  Let's consider the user stories for what we want to build.

### User Stories
**Client-Side**
- Given I am a User, When I load the app, Then I am presented an option to play a new game and enter a username.
- Given I am a User, When I load the app, Then I can select a previously created match to continue.
- Given I am a User, When I load the app, Then I am able to add new categories and questions to the game.
- Given I am a User, When I begin a game, Then am presented with a game that has a Jeopardy board, my points, and my name.
- Given I am a User, When I click on a board value, Then I am given a Jeopardy question.
- Given I am a User, When I answer a question correctly, Then the game updates the score and disables the question

**Server Side**
- Given I am a UI, When I make a GET API call for Game, Then I am given an array of Objects to populate a game board
- Given I am a UI, When I make a POST API call for Game, Then I am able to generate a new Game and with randomly selected categories.
- Given I am a UI, When I make a PUT API call for Game, Then I am able to update the score of a given game.
- Given I am a UI, When I make a POST API call for Category, Then I am able to save a new Category of questions.


### You Do
Work with the students around you for the next 10 minutes.
Given these user stories, wireframe what you think the UI will look like.  Document what Components you think we will need in order to build a Jeopardy game with a `Home` route, a `Game` route, and an `AddCategory` route.

Additionally, think about the API routes that we will need.  What sorts of data do we need to save to a database? What routes do we need to make available to the React app?

## Getting Started
Go ahead and create a repo on github called `fullstack-react-jeopardy`. Make sure to include the `.gitignore` for Node apps.

After creating the repo, go ahead and clone it locally into your `exercises` folder.

## Express Set Up
We're going to be building a lean Express app that will focus mainly on retrieving and serving API information. To start, we are only going to install `express`, `dotenv`, `body-parser`, and `mongoose`

```
npm init -y
npm install express dotenv body-parser mongoose
touch server.js
```

## Creating server.js
In our `server.js` file, we are going to create the most basic server possible.  As our needs grow, we will refactor and build onto the file.

```js
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/fullstack-jeopardy

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());
app.get('/', (req,res) => {
  res.send('Hello world!')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})
```

Let's start our app and test that it is working.

> COMMIT!
[Step 1](https://github.com/king0120/inclass-fullstack-jeopardy/tree/step-1)

## Integrating create-react-app
Before we start working building out our models and controllers, let's first connect our Express app to React. Use `create-react-app` to get our UI up and running.
```bash
# Inside of Fullstack-React-Jeopardy
create-react-app client
```

Your folder structure should now look something like this.
```
|- client
  |- node_modules
  |- public
  |- src
  |- package.json
  |- ...
|- node_modules
|- server.js
|- package.json
...
```

This will create a new React application for us to begin building our game.  Let's try to start our application.

**OH NO**
You may have gotten an error that looks something like this:
```bash
? Something is already running on port 3000. Probably:
  node server.js
  in /path_to_directory/FullStack-React-Jeopardy
Would you like to run the app on another port instead? (Y/n)
```

Webpack uses the port 3000 when ever we start our application.  This conflicts with our Express server that is also attached to port 3000.  In order to fix this, we will change our Express app to listen on 3001. 

Now we can run both servers at the same time. We can do that by starting our server in one window and our React app in another.  However, there is a tool we can use to run both of these servers within the same window.

## Concurrently
In order to run both our server and app at the same time, we are going to use an npm library called [`concurrently`](https://www.npmjs.com/package/concurrently). `concurrently` is going to allow us to run both our api server and webpack server at the same time.

```bash
# Inside fullstack-jeopardy directory
npm install concurrently --save
```
```json
//Inside package.json
...
"scripts": {
  "start": "node server.js",
  "dev": "concurrently \"nodemon server.js\" \"cd ./client  && yarn start \" ",
  "test": "echo \"Error: no test specified\" && exit 1"
},
...
```

Now we can run `npm run dev` and our application will start on both port 3000 and 3001! Let's verify both are working by visiting both ports in the browser.

> COMMIT
[Step 2](https://github.com/king0120/inclass-fullstack-jeopardy/tree/step-2)

## Setting up a Database
Now that we've verified that we can run both apps at the same time, let's start building out the Schemas for our database.

Today's example app is going to have 3 Models. Game, Category, and Question

### You Do
Create a new directory called `db` and create a `schema.js` within there. Create a Mongoose model for each model.

* Game has a user, points, board(an array of booleans to signal if a question is answered or not), and categories.
* Category has a name and questions
* Question has a value, question, and answer.

After the schema is created, create a `models` directory and add a file for each model in our DB. 

**Hint:** If you need a reminded on how to do this, check out the [Project 2 Cheat Codes](https://github.com/dphurley/project-two-cheat-codes)

> COMMIT

## Seed data
Now that we have 3 models, let's go ahead and supply some seed data.  Let's populate a seeds file with one Jeopardy column.

```js
require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Game = require('../models/game');
var Category = require('../models/category');
var Question = require('../models/question');

// Use native promises
mongoose.Promise = global.Promise;

Game.remove({}, (err) => console.log(err));
Category.remove({}, (err) => console.log(err));
Question.remove({}, (err) => console.log(err));

const beibs = new Question({
  question: "He's the Canadian pop sensation being sensational here\"There's gonna be one less lonely girl...\"",
  answer: "Justin Bieber",	
  value: 200
});
const jayz = new Question({
  question: 'This roc-a-fella introduced us to a "Hard Knock Life (Ghetto Anthem)"',
  answer:	"Jay-Z",
  value: 400
});
const amy = new Question({
  question:"\"You Sent Me Flying\", sang this British woman who died young in 2011.",
  answer: "Amy Winehouse",
  value: 600
})
const avril = new Question({
  question: "Ontario native seen hereback in high school. We hear she had a thingfor \"Sk8er Bois\"",
  answer:	"Avril Lavigne",
  value: 800
})
const zooey = new Question({
  question: "M. Ward & Zooey Deschanel, I now pronoun you this duo.",
  answer: "She & Him",
  value: 1000
})

const popMusic = new Category({
  name: "Pop Music",
  questions: [beibs, jayz, amy, avril, zooey]
})

const game = new Game({
  user: "WDI11",
  points: 0,
  categories: [popMusic]
})

popMusic.save().then(() => console.log("Category Saved!"));
game.save().then(() => console.log("Game Saved!"))

mongoose.connection.close();
```

Next we run `node db/seeds.js` to populate our database.  Now we finally have enough info to build out our API.

> COMMIT
[Step 3](https://github.com/king0120/inclass-fullstack-jeopardy/tree/step-3)

## Building an API
Now that we have data within our database, let's use Express to retrieve that info and serve it as JSON for our React app to consume.  In order to do that, we need to use Express Router to build routes for our API. This is going to look similar to the server side rendered controllers we built in the past, but with one major difference.

```js
// ./server.js
  app.use('/api/game', GamesController);
// ./controllers/games
const express = require('express');
const Game = require('../models/game');
const router = express.Router();

router.get("/", (req,res) => {
  Game.find().then(games => {
    res.json(games);
  })
});

router.get("/:id", (req,res) => {
  Game.findById(req.params.id).then((games) => {
    res.json(games);
  });
});

...

module.exports = router;
```

Now if we check our route at `localhost:3001/api/games` we should see that we get a JSON object back.  We are able to get this JSON object by using `res.json` instead of `.render` or `.send`.

We can now retrieve a game with one category.  This gives us enough to get started on building a UI for the Jeopardy game.
We will need to build more routes later in the app, but this will work for the moment.

> COMMIT
[Step 4](https://github.com/king0120/inclass-fullstack-jeopardy/tree/step-4)

### Scaffolding out our Jeopardy UI.
For the UI of our game, lets get started by building out a client side router using `react-router`.
```bash
# inside of client directory
yarn add react-router-dom
```
As we previously mentioned, our game will have 3 separate views:
  - `Home`
  - `Game`
  - `AddCategory`

Within our `components` folder, we will go ahead and create a basic component for each route.  Once these are created, we can add React Router to the `App.js` component.

```jsx
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Game from "./components/Game";
import AddCategory from "./components/AddCategory";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/add-category">Add Category</Link>
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/game/:gameId" component={Game} />
            <Route path="/add-category" component={AddCategory} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
```

### Route Params in React Router
We can add route params to our client side routes, much like what we've seen when working in Express.  The value defined will be passed in props.  For example, the above Route param will be available as `props.match.params.gameId`.

> COMMIT
[Step 5](https://github.com/king0120/inclass-fullstack-jeopardy/tree/step-5)

## Creating the Home Route
The first thing we'll focus on in the UI is the page users will see when they first load the page. On this page, we want to allow a user to create a new game and enter their username.  The user should also be able to select from a list of existing games to resume a match.  This is going to be the first part of our UI that will be interacting with our server. 

In order to make API calls, we'll install Axios into our client directory.
```bash
yarn add axios
```

```jsx
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      user: "",
      redirect: false,
      games: []
    }
  }

  componentWillMount(){
    axios.get('localhost:3001/api/game').then(res => {
      console.log(res.data);
      this.setState({games: res.data})
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>What is your username?</h1>
          <input type="text" name="user" />
          <button>New Game</button>
        </div>
        {this.state.games.map((game, i) => (
          <div key={i}>
            <Link to={`/game/${game._id}`}>
              {game.user}'s Game
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
```

Unfortunately, when we load our UI we get an error! 

```
XMLHttpRequest cannot load localhost:3001/api/game. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
```

This is an example of what's commonly referred to as a CORS error (Cross-Origin Resource Sharing)

### CORS
CORS is a mechanism that restricts API calls from domains that are outside of the domain from which the resource was initially served.  Basically this is a layer of protection for servers, because it prevents unwanted use of your API.

There are several ways that we can handle CORS requests, but for our app we are going to take advantage of the tooling provided by `create-react-app`.  We can add a "proxy" server to our React application, which will allow us to make requests that look they are coming from our current server but actually hit the server we define in the `package.json`

```json
...
"proxy": "http://localhost:3001",
...
```

**NOTE** When you add this proxy, you have to restart your server.  The auto-refresh will not pick up on the proxy addition.  

> COMMIT
[Step 6](https://github.com/king0120/inclass-fullstack-jeopardy/tree/step-6)

## Starting The Game

This should now give us the ability to click through to the game we created in the seeds file.  We'll work on creating new games a little later this afternoon.  For now, let's focus on the core logic of our game.  Our `Game` component currently doesn't have anything more than a "Hello World".  However, we now have the Mongo id of a game that is saved in our database.  This means that we can use `axios` and the Show route that we created earlier to fetch data to place in the state of our app.

```jsx
import React, { Component } from 'react';
import axios from 'axios';
import GameBoard from './components/GameBoard';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      user: "",
      points: 0,
      categories: [],
      board: []
    }
  }

  componentWillMount(){
    const id = this.props.match.params.gameId;
    axios.get(`/api/game/${id}`).then(res => {
      this.setState({
        id: res.data._id,
        user: res.data.user,
        points: res.data.points,
        categories: res.data.categories,
        board: res.data.board
      });
    });
  }

  render() {
    return (
      <div>
        <h1>This Is Jeopardy!</h1>
        <h3>Welcome {this.state.user}</h3>
        <h3>Points: {this.state.points}</h3>
        <GameBoard board={this.state.board} categories={this.state.categories} /> 
      </div>
    );
  }
}

export default Game;
```

> COMMIT
[Step 7](https://github.com/king0120/inclass-fullstack-jeopardy/tree/step-7)

## You Do: Scaffold the Board, Categories, and Questions
We now have the data we need to create the application. Create a few more components to craft out the rest of the game.  Your component hierarchy should look something like this:
```
|- Game
    |- GameBoard
        |- 6 Categories
            |- 5 Questions
```

After you build these components and loop through them as outlined above, use `styled-components` to style the board to look like a Jeopardy board.
``` bash
  # Inside the client folder
  yarn add styled-components 
```

![](https://larryfire.files.wordpress.com/2013/03/jeopardy-stephen-king_510x317.jpg)

Use the Lato font with a font-weight of 700.
  - Inject this link into index.html 
  ```html
    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet">
  ```
Colors
  - Yellow: #ffff5f
  - Blue: #2a3698
  - Black: #000

> COMMIT
[Step 8](https://github.com/king0120/inclass-fullstack-jeopardy/tree/step-8)

**NOTE** Are you getting and error that looks something similar to this when trying to call `.map()`?

```
TypeError: Cannot read property 'categories' of undefined
```  

This is because when we initially create our components, the state in the `Game` component is still an empty object.  That means that we are trying to call `.map` on an undefined value in `Game`'s child components.  

#### Default Props
Another feature of React is the ability to set default values for any props that you may expect in your application. This will allow us to set a default value while we are waiting for our API call is still being made.
```js
GameBoard.defaultProps = {
  categories: []
}
```

## Adding Click Events to Question
Once we have something that resembles a Jeopardy board, we need to add an event that allows users to click a question board and switch from the number value to the question.
```js
import React, { Component } from "react";
import styled from "styled-components";

const QuestionStyles = styled.div`
  background: ${props => props.answered ? "grey" : "#2a3698"};
  color: #ffff5f;
  border: 3px solid black;
  height: 125px;
`;

const ActiveQuestion = (props) => (
  <QuestionStyles answered={props.answered}>
    <div>{props.question}</div>
    <form onSubmit={props.submitAnswer}>
      <input type="text" name="answer"/>
      <button>Submit</button>
    </form>
  </QuestionStyles>
);

class Question extends Component {
  constructor(){
    super();
    this.state = {
      active: false,
    };
  }
  _toggleActive = () => {
    this.setState({active: !this.state.active});
  }
  render() {
    if (this.state.active){
      return <ActiveQuestion answered={this.state.answered} question={this.props.question.question}/>;
    } else {
      return <QuestionStyles answered={this.state.answered} onClick={this._toggleActive}>{this.props.question.value}</QuestionStyles>;
    }
  }
}

export default Question;
```

> COMMIT 

### Adding Events
Now it's time for us to create an event that will check a question's answer against user input and update the score as necessary. In the `Game` component, we will create an event called `this._submitAnswer` and pass it down to the form value in the `Question` component.
```js
...
// Notice we pass 3 arguments to the function
  _submitAnswer = (e, question, id) => {
    //Prevents page refresh
    e.preventDefault();
    //Grabs the user input value
    const answerGiven = e.target.answer.value;

    //Creates a new copy of the state.
    const newState = {...this.state}

    //Update the points based on whether or not the answer is correct.
    if (answerGiven === question.answer){
      newState.points += question.value;
    } else {
      newState.points -= question.value;
    }
    //Change the flag that tracks which questions have been answered
    //Making this show up in the UI is a stretch goal.
    newState.board[id] = true;

    //Update our state in the client
    this.setState(newState);
    //Update our Game in the DB
    axios.put('/api/game/' + this.state.id, newState).then((res) => {
      console.log("Successful update");
    });
  }
...
```

The put route doesn't exist in our API yet, so we will need to add the route to our `/controllers/game.js` file.
```js
...
  router.put("/:id", (req,res) => {
    const { board, points } = req.body;
    Game.findOneAndUpdate({_id: req.params.id}, {board, points}).then((game) => {
      res.json(game);
    })
    .catch(err => console.log(err));
  });
...
```

> COMMIT
[Step 9](https://github.com/king0120/inclass-fullstack-jeopardy/tree/step-9)

## Adding Categories
Now that we have a basic game, let's focus on building out the route that will allow users to add a new Category.  In order to do this, we will need to update both our server-side and client-side code.

If we review our Category model, we will see that a category has 2 properties, a name and an array of questions.  That means that we will need to create a form that has about 13 different input tags.  After the user passes these values, the server will create a new Category model and save it to the database.  Let's start this out by building the new server-side code.

```js
// ./controllers/categories
const express = require('express');
const Question = require('../models/question');
const Category = require('../models/category');
const router = express.Router();

router.get("/", (req,res) => {
  Category.find({}).then((categories) => {
    res.json(categories);
  });
});

router.post("/", (req, res) => {
  const questions = req.body.questions.map(question => {
    return new Question(question);
  });
  const category = new Category({
    name: req.body.name,
    questions
  });
  category.save().then((category) => {
    console.log("Success!");
    res.json(category);
  });
})

module.exports = router;
```

```js
// ./component/AddCategory 
import React, { Component } from "react";
import axios from "axios";
import QuestionInput from "./QuestionInput";

class AddCategory extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      questions: [
        {
          value: 200,
          question: "",
          answer: ""
        },
        {
          value: 400,
          question: "",
          answer: ""
        },
        {
          value: 600,
          question: "",
          answer: ""
        },
        {
          value: 800,
          question: "",
          answer: ""
        },
        {
          value: 1000,
          question: "",
          answer: ""
        }
      ]
    };
  }

  _changeCategory = e => {
    this.setState({name: e.target.value});
  }
  
  _changeEvent = e => {
    const newState = { ...this.state };
    const pointValue = e.target.attributes.points.value;
    const typeValue = e.target.attributes.type.value;
    const changedQuestion = newState.questions.find(v => {
      return v.value === parseInt(pointValue);
    });

    if (typeValue === "question") {
      changedQuestion.question = e.target.value;
    } else if( typeValue === "answer" ) {
      changedQuestion.answer = e.target.value;
    }

    this.setState(newState);
  };

  _addNewCategory = e => {
    e.preventDefault();
    axios.post("/api/category", this.state).then(res => {
      console.log(res.data);
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this._addNewCategory}>
          <label htmlFor="category">Category: </label>
          <input onChange={this._changeCategory} type="text" value={this.state.category} />
          <br />
          {this.state.questions.map((q, i) => {
            return (
              <QuestionInput key={i} question={q} _changeEvent={this._changeEvent}
              />
            );
          })}
          <button>Save Category</button>
        </form>
      </div>
    );
  }
}

export default AddCategory;
```

```js
// ./components/QuestionInput
import React from "react";

const QuestionInput = props => {
  return (
    <div>
      <label htmlFor={`${props.question.value}question`}> {props.question.value} Question: </label>
      <input onChange={props._changeEvent} type="text"
        name={`${props.question.value}question`} points={props.question.value}
        type="question" value={props.question.question}
      />
      <br />
      <label htmlFor={`${props.question.value}answer`}> {props.question.value} Answer: </label>
      <input onChange={props._changeEvent} type="text"
        name={`${props.question.value}answer`} points={props.question.value}
        type="answer" value={props.question.answer}
      />
      <hr />
    </div>
  );
};

export default QuestionInput;
```

We can test our new route by calling a GET request on `/api/category` in Postman. We should see multiple Categories in the response.

> COMMIT

## Generate a New Game 
The last feature we are going to worry about today is the ability to generate a new game when a user clicks the `New Game` button on the homepage.  We already have most of the front end figured out.  All we need to do here is add an `axios` call to post the username the User provides. After we get a response back from our API, we will need to redirect to the `Game` view with the new Mongo ID that has been generated. 
```js
  _changeEvent = e => {
    this.setState({ user: e.target.value });
  };
  _createNewGame = () => {
    axios.post("/api/game/new", { user: this.state.user }).then(res => {
      console.log(res.data);
      this.setState({ gameId: res.data._id, redirect: true });
    });
  };
  render() {
    return this.state.redirect
      ? <Redirect to={{ pathname: "/game/" + this.state.gameId }} />
      : (<div>
          <h1>What is your username?</h1>
          <input onChange={this._changeEvent} type="text" name="user" />
          <button onClick={this._createNewGame}>New Game</button>
          {this.state.games.map(game =>
            <div>
              <Link to={`/game/${game._id}`}>
                {game.user}'s Game
              </Link>
            </div>
          )}
        </div>);
  }

```

One important detail to notice here is `this.state.redirect`.  This state value controls a ternary statement that hold our normal render, but now also has a Redirect component coming from `react-router-dom`.  The redirect component will transfer us to the Game view once we have a valid Game ID from the server.

Now that our UI is wired up, lets move to the back end.

```js
router.post("/new", (req,res) => {
  //Return all categories in our database
  Category.find().then((categories) => {
    //Initialize a new Game
    const newGame = new Game();

    //Loops through an empty array 6 times. and returns a random category
    const randomCategories = [...Array(6)].map((i) => {
      const randomVal = Math.floor(Math.random() * categories.length);
      return categories[randomVal];
    });

    //Set values for the new Game
    newGame.user = req.body.user;
    newGame.points = 0;
    newGame.categories = randomCategories;
    
    //Save to database and return the Game object
    newGame.save().then(game => {
      res.json(game);
    });
  });
});
```

Now there are definitely some improvements we can make here, for example we can randomly get the same category when creating a game.  See if you can work on this logic and make it more reliable.

We now have a fully feature rich Jeopardy game with multiple routes and a persistent database.  Let's wrap up today by deploying the application on Heroku.

> COMMIT

## Deploying The App
In order to deploy the app we need to follow several of the same steps that did previously when deploying MEN apps, but with a couple additional steps.

### Building a Production React App
Within our client folder, we can run a command through `npm` or `yarn` called build.  This will take all of the code that we've been running through webpack and bundle it all into a minified build ready for production deployment.  That will live inside a `build` directory.  

After we build the app, we need to let Express know that it needs to be aware of the new static files. Afterwards, we need to make a get route at the index that will serve the `index.html` of the built production React app.

```js
...
  app.use(express.static(__dirname + '/client/build/'));
...
  app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })
...
```
We can test the production app now, by running `node server.js`.  If our app looks like what we intend, then we can proceed with deploying our app. 

Let's update the `package.json` to help Heroku understand more about our app.
```js
...
  //Set the Heroku version of Node to the most recent available.
  "engines": {
    "node": "8.1.2"
  },
...
  "scripts": {
    "start": "node server.js",
    "dev": "concurrently \"nodemon server.js\" \"cd ./client  && yarn start \" ",
    "test": "echo \"Error: no test specified\" && exit 1",
    //Will install the client packages and build the minified UI in Heroku.
    "postinstall": "cd client && npm install && npm run build"
  },
...
```

Now we can proceed our Heroku deployment like normal.

```bash
heroku create inclass-wdi-jeopardy
heroku addons:create mongolab:sandbox
git add -A
git commit -m "commit message"
git push heroku master
```

SUCCESS! We've now build a full stack MERN app in just one day!
>COMMIT 

[Step 10](https://github.com/king0120/inclass-fullstack-jeopardy/tree/step-10)

## Next Steps:
- Use the Game board array of booleans to prevent users from answering questions that have previously been answered.
- Add logic that detects when a user has answered all questions and post the user's score to a leaderboard.
- Refine the new Game route to prevent categories from being included multiple times in one game.

## Further Reading:

* [Using `create-react-app` with a server](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)
* [94 Examples of Fullstack React Apps](https://react.rocks/tag/FullStack)
