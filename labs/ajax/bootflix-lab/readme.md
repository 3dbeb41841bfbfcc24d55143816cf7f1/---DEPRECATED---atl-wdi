<img src="bootflix-logo.png" alt="Bootflix">
### Summary

Today you are going to build a movie search application, similar to Netflix's search feature. You will do this using **jQuery** and **Ajax**. You will also create a **model** and a **view** in this project. When you're on the job in the real world you will need to make requests to APIs and present that data to your users. This project is meant to mimic the functionality of a real-world application's (Netflix) feature.

### Project Overview

It is the year 2015. You've just been hired by a startup called **Bootflix** that plans to challenge Netflix's reign! As their newest developer, you have been provided your first task: to *create a working movie search feature*. Your boss walks in to your office and tells you, *"Hey, newbie! Guess what?! Design has created a beta layout and a search form for our brand new search feature! Can you take some time to make it work? That'd be great... mmmkay? Jane in design is going to forward her work along for you to finish."*

### Jane from Design

<img src="img.jpeg" alt="Jane from Design" height="60%" width="60%">

Hi! I wanted to let you know that I've created our beta page and you'll be working with that today. I used jQuery to set up two forms but I don't really know how to code because I'm a designer... Anyways, you're smart and all that so could you actually write the code that gets movies? The forms work. That's it, though.

### Requirements
- You need to use four Javascript constructors inside of `scripts/bootflixAjax.js`.
  - app.getMovieById() [this is a controller/whatever]
  - app.getMovieByTitle() [this is a controller/whatever]
  - app.movieModel() [this is a model]
  - app.movieView() [this is a view]
- You will need to research the *omdb* api to complete this project (http://www.omdbapi.com/). Examples are provided in the code but you should read over the API documentation to understand it.

**To get started:**

1. You will need to add functionality to the app.getMovieById() constructor. This will require adding an `$.ajax` call to **omdb**.
2. Once your ajax call is successful, you will need to create a new model and view and then call view.render().
3. You will repeat this process for app.getMovieByTitle().
4. Detailed notes are included in the source code.
5. Jane has created the forms and jQuery form events that call getMovieById() and getMovieByTitle(); you will not need to edit this at all.

### Notes

- Jane has created a `bootflix/` folder. It contains both a `scripts/` and `style/` directory.
- You will be using **omdb** (http://www.omdbapi.com/) to search for movies by title and/or ID.
- A sample result object has been provided for reference in `omdb_result_sample.json`. This shows you what to expect as a result from your `$.ajax` calls.
- You will be doing your work inside of `scripts/bootflixAjax.js` and only inside of there.
- Jane has created a mockup file to show you what your view should render. It can be seen inside of `design/movielayout.html`. You should use the first example and format your view.render() method to output your view like this.

### Bonus

You probably saw the bonus example inside of `movielayout.html`. Jane has created a mockup that includes an image tag that will allow you to include the movie poster! To include the movie poster, you need to use the **omdb** posters API. No additional ajax call should be needed; you can link directly to the movie's poster image as follows:

- The image source url will look like the following: `http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94`
- Example: `<img src='http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94' alt='Frozen'>`
- You will be using the following **apikey**: `d31f1a94`. Do not use this key outside of this project.
