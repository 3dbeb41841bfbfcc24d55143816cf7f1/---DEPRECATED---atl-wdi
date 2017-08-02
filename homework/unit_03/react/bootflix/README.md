<img src="bootflix-logo.png" alt="Bootflix">
### Summary

Today you are going to build a movie search application, similar to Netflix's search feature. You will do this using **React** and **Axios**. When you're on the job in the real world you will need to make requests to APIs and present that data to your users. This project is meant to mimic the functionality of a real-world application's (Netflix) feature.

### Project Overview
It is the year 2017. You've just been hired by a startup called **Bootflix** that plans to challenge Netflix's reign! As their newest developer, you have been provided your first task: to *create a working movie search feature*. Your boss walks in to your office and tells you, *"Hey, newbie! Guess what?! Design has created a beta layout and a search form for our brand new search feature! Can you take some time to make it work? That'd be great... mmmkay? Jane in design is going to forward her work along for you to finish."*

### Jane from Design

<img src="img.jpeg" alt="Jane from Design" height="60%" width="60%">

Hi! I wanted to let you know that I've created our beta page and you'll be working with that today. I used React start a UI but I don't really know how to code because I'm a designer... Anyways, you're smart and all that so could you actually write the code that gets movies? The forms work. That's it, though.

### Requirements
- You need to add logic to the existing methods in `App.js` to search by id and by title.
  - Pass the methods into the `Search` component.
  - Make an `axios` call to **omdb** with the id/title given by the user.
  - Update the `state` with new movie information
  - Pass the relevant state to the `Movie` component to make the data dynamic.
- You will need to research the **omdb** api to complete this project (http://www.omdbapi.com/).

**To get started:**

1. Review the existing components for hints on what you need to do in each Component to build a working search.
2. Once your AJAX call is successful, you will need to update the state of `App.js` and make sure that the relevant info is being passed down to the relevant child components.
3. Jane has created the forms and CSS. You will need to add the logic to populate and send your API call.

### Notes

- Jane has created a few components for you already.  You will not need to make any additional components.
- You will be using **omdb** (http://www.omdbapi.com/) to search for movies by title and/or ID.
- A sample result object has been provided for reference in `omdbExample.json`. This shows you what to expect as a result from your `axios` calls.
- Jane has created a mockup file to show you what your view should render. It can be seen inside of `Movie.js`. You will need to update the hard coded info with data being retrieved from 

### Bonus

Try to add an image tag to your bootflix app. To include the movie poster, you need to use the **omdb** posters API. No additional ajax call should be needed; you can link directly to the movie's poster image as follows:

- `i` is equal to the omdb id of the film.
- The image source url will look like the following: `http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94`
- Example: `<img src='http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94' alt='Frozen'>`
- You will be using the following **apikey**: `d31f1a94`. Do not use this key outside of this project.

### Submission

When you complete the assignment, submit the repo on Schoology.
