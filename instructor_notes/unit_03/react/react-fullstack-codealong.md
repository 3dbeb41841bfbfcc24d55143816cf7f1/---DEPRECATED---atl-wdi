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

We've learned a lot about the modern tooling and practicing around the React ecosystem over the past couple of days.  Today we will be pulling in everything we've learned to build a full stack application using the MERN stack.

## MERN Stack
When you see MERN stack, this is typically just a shorthand way of saying that the application is a full-stack JavaScript app.  The tools that we use for MERN apps are: Mongo (Mongoose), Express, React, and Node.  While there are some boilerplate tools to build out a full MERN stack app, we are going to build our own using `create-react-app` and the Express and Mongo patterns we've used in the past.  This allows us to fully understand our application and prevents introducing a bunch of code that we haven't written and understand.

## Full Stack Jeopardy
Today we are going to be building a full stack version of Jeopardy!  We will be storing all of our questions in a Mongo database, serving that info via Express, and serving the views using React. Cool!  

Before we get started writing our app.  Let's consider the user stories for what we want to build.

### User Stories
**Client-Side**
- Given I am a User, When I load the app, Then I am presented an option to play the game and see a jeopardy board
- Given I am a User, When I load the app, Then I am able to add new categories and questions
- Given I am a User, When I click on a board value, Then I am given a Jeopardy question
- Given I am a User, When I answer a question correctly, Then the game updates the score and disables the question

**Server Side**
- Given I am a UI, When I make a GET API call, Then I am given an array of Objects to populate a game board
- Given I am a UI, When I make a POST API call, Then I am able to post new information to the API.


## Getting Started
Go ahead and create a repo on github called `fullstack-react-jeopardy`. Make sure to include the `.gitignore` for Node apps.

After creating the repo, go ahead and clone it locally into your `exercises` folder.

## Express Set Up
We're going to be building a lean Express app that will focus mainly on retrieving and serving API information. To start, we are only going to install `express` and `mongoose`

```
npm init -y
npm install --save express mongoose
touch server.js
```

## Creating server.js
In our `server.js` file, we are going to create the most basic server possible.  As our needs grow, we will refactor and build onto the file.

```js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fullstack-jeopardy');

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {  
  console.log('Mongoose default connection error: ' + err);
}); 

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

## Integrating create-react-app
Before we start working building out our models and controllers, let's first use `create-react-app` to get our UI up and running.
```bash
# Inside of Fullstack-React-Jeopardy
create-react-app client
```
This will create a new React application for us to begin building our game.  Let's try and start our application.

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
  "start:dev": "concurrently \"nodemon server.js\" \"cd ./client  && yarn start \" ",
  "test": "echo \"Error: no test specified\" && exit 1"
},
...
```

Now we can run `npm run start:dev` and our application will start on both port 3000 and 3001! Let's verify both are working by visiting both ports in the browser.

> COMMIT

## Setting up a Database
Now that we've verified that we can run both apps at the same time, let's start building out the Schemas for our database.

Today's example app is going to have 3 Models. Game, Category, and Question

### You do
Create a new directory called `db` and create a `schema.js` within there. Create a Mongoose model for each model.

* Game has a user, points, and categories.
* Category has a name and questions
* Question has a value, question, answer, and a boolean value for whether a question is answered or not.

After the schema is created, create a `models` directory and add a file for each model in our DB. 

**Hint:** If you need a reminded on how to do this, check out the [Project 2 Cheat Codes](https://github.com/dphurley/project-two-cheat-codes)

> COMMIT

## Seed data
Now that we have 3 models, let's go ahead and supply some seed data.  Let's populate a seeds file with one Jeopardy column.

```js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fullstack-jeopardy');

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

game.save().then(() => console.log("Game Saved!"))

mongoose.connection.close();
```

Next we run `node db/seeds.js` to populate our database.  Now we finally have enough info to build out our API.

> COMMIT

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
  Game.findOne({}).then((games) => {
    res.json(games);
  });
});

module.exports = router;
```

Now if we check our route at `localhost:3001/api/games` we should see that we get a JSON object back.  We are able to get this JSON object by using `res.json` instead of `.render` or `.send`.

We can now retrieve a game with one category.  This gives us enough to get started on building a UI for the Jeopardy game.

> COMMIT

### Scaffolding out our Jeopardy UI.
To get a MVP for our game, we need to create several components.  We will build the following components: 
  * Game
  * GameBoard
  * Category
  * Question

Before we link our UI to our API, let's first build these components and provide some mock data to help us get an idea on how we want to style the app.

### We Do
Let's build each component, and provide it with dummy data for the moment.  At the end, we'll have a game with a gameboard that has 6 categories and each category has 5 questions.

After we have the structure of our app, let's use `styled-components` to style the application.
``` bash
  # Inside the client folder
  yarn add styled-components 
  # or
  npm i --save styled-components
```

### You Do
Use `styled-components` to style the React components to look more like a Jeopardy board.
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

### Connect the UI to the API
Now we have a basic static UI that looks sorta like Jeopardy.  Let's now connect our UI to the API. To do this, we will need to install the `axios` library.  Let's set up our API call in the Game component on the `componentWillMount` lifecycle method.

```js
 constructor(){
    super();
    this.state = {
      game: {}
    }
  }

  componentWillMount(){
    axios.get('localhost:3001/api/game').then(res => {
      this.setState({game: res.data});
    });
  }
```
Unfortunately, when we load our UI we get an error! 

```
XMLHttpRequest cannot load localhost:3001/api/game. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
```

This is an example of what's commonly referred to as a CORS error (Cross-Origin Resource Sharing)

## CORS
CORS is a mechanism that restricts API calls from domains that are outside of the domain from which the resource was initially served.  Basically this is a layer of protection for servers, because it prevents unwanted use of your API.

There are several ways that we can handle CORS requests, but for our app we are going to take advantage of the tooling provided by `create-react-app`.  We can add a "proxy" server to our React application, which will allow us to make requests that look they are coming from our current server but actually hit the server we define in the `package.json`

```json
...
"proxy": "http://localhost:3001",
...
```
```js
  componentWillMount(){
    axios.get('/api/game').then(res => {
      this.setState({game: res.data});
    });
  }
```
**NOTE** When you add this proxy, you have to restart your server.  The auto-refresh will not pick up on the proxy addition.  

### Applying API Call to the Game Board
Now that we have set our `this.state` to the response from our server, we can start to pass this data down to the various layers of our application. When we grab our categories and try to map it on the `GameBoard` we'll find that our application breaks.

```
TypeError: Cannot read property 'categories' of undefined
```  

This is because when we initially create our components, the state in the `Game` component is still an empty object.  That means that we are trying to call `.map` on an undefined value.  

### Default Props
Another feature of React is the ability to set default values for any props that you may expect in your application. This will allow us to set a default value while we are waiting for our API call is still being made.
```js
GameBoard.defaultProps = {
  categories: []
}
```

### You Do
Use `props` to pass the information all the way down to the `<Question />` component.  Use default props along the way to set initial values.

### Adding Events
Now that we have our information, we need to add events to make it dynamic.

- First, off we need to add a way to toggle between the value and question for each individual question.
- Second, we need to create an event that will take a user input and check it against the answer.
- Third, we need to send an update to the server that updates the points and flags answered questions.

### Adding onto the API
In order to save the user's score, we will need to add a PUT route to the Games controller. Since 
we have saved the React state in a way that is very similar to the Game controller, we can send over the entire new state to our Game controller.  Then we can use the Mongoose `findOneAndUpdate` method in order to update the state of our game.
```jsx
router.put("/:id", (req,res) => {
  Game.findOneAndUpdate(req.body.game).then((game) => {
    res.json(game);
  })
});
```

After we verify that our API call updates successfully, we can test to make sure that our points persists despite leaving the browser.

### Adding React Router and Additional Routes
We now have a basic game, but we currently only have one category of questions.  It would be useful to have a route with a form that allows users to push a new category of questions into our database.

```bash
yarn add react-router;
```


ToDo:
- Take time to design app. ERD/User Stories/etc
- Build Mongoose app w/ seed data for jeopardy
- Create Express API to generate game, and to add new column
- Create React App, 2 views... Game view and question add view
- 
-

#### We Do:

#### JSX Conditionals

### You Do: 

## Further Reading:

* [Using `create-react-app` with a server](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)
* [94 Examples of Fullstack React Apps](https://react.rocks/tag/FullStack)
