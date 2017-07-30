---
title: React & JSX Lab
type: Lab
duration: 3:30
creator:
    name: Jamie King
    city: ATL
competencies: Front-end frameworks
---

# JSX and React

## Introduction

We've now seen how React is able to render HTML in the DOM with the help of JSX.  We've also combined JavaScript and JSX to loop through arrays of data and apply that data to components via `this.props`.

Your mission now is to build a static site for a pizza place.  On this site you will be using React to build out small components for each section of the site, and show info about their menu and locations through data we've provided.

Your end product should look something like this: [https://wdi11-pizza.herokuapp.com/](https://wdi11-pizza.herokuapp.com/)

## Setup

You will be working in the `pizza-express` folder.  This repository was created using `create-react-app`, but has additional data and styling to help you get started with the site.

1. Install the dependencies using `yarn` or `npm install`
2. Open your text editor.
3. Start the dev server using `yarn start` or `npm start`

## Components
Use the deployed version of the app to build your own version.  We've created a components folder to create your new components in.  Use these 8 component names to build your app:
  * Contact
  * Description
  * Location  
  * Locations
  * Menu
  * MenuItem
  * Navbar
  * SplashImage

We have also provided css for you in `index.css`.  Many of the classes match the component names, take a look at the CSS or look at the deployed version to get an idea of where to apply the classes.  

## Hints
  * Import the location and menu items using the import command. Example: `import menuData from '../pizzaData.js`
  * Loop through the provided data by using `.map`.
  * Use the `Location` & `MenuItem` component as a single instance of a location or item. You will apply props to these components from the mapped array of data.

## Deployment
Once you finish your site, let's deploy it onto Heroku using the `create-react-app` buildpack.
```bash
git init
heroku create --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Deploying with create-react-app"
git push heroku master
```

## Submission
When you complete the app, submit via schoology.  Include both a link to this repo, and a link to the deployed app.

## Additional Resources

- [React For Everyone](https://www.youtube.com/watch?v=eOctQZ1EV0E&list=PLLnpHn493BHFfs3Uj5tvx17mXk4B4ws4p)
- [Facebook's Intro to React Tutorial](https://facebook.github.io/react/tutorial/tutorial.html)
