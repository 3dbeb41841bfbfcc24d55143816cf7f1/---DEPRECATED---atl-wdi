# Intro to APIs & AJAX

## Learning Objectives

- Describe what an API is and why we might use one.
- Understand the format of API data.
- Explain the common role of JSON on the web.
- Use Axios to make GET requests for data.
- Use Axios' "promise" methods to handle AJAX responses.
- Render new HTML content using data loaded from an AJAX request.
- Perform POST, PUT and DELETE requests to an API to modify data.


## Framing (5 minutes / 0:05)

**What is an API?**

> Basically, an API is a service that provides raw data for public use.

API stands for "Application Program Interface" and technically applies to all of software design. The DOM, jQuery, and React are actually examples of APIs! Since the explosion of information technology, however, the term now commonly refers to web URLs that can be accessed for raw data.

Many APIs publish data for public use. As third-party software developers, we can access an organization's API and use their data within our own applications.

<details>
  <summary><strong>Q: Why do we care?</strong></summary>

  > Why recreate data when we don't have to? Think about past projects or ideas that would be easier if you could pull in data already gathered elsewhere.

  > APIs can provide us with data that would we would otherwise not be able to create ourselves.

</details>

As we move into building single page applications, now is the perfect time to start understanding how to obtain data on the client side and then render it on the browser.

## API Exploration

**Check out these stock quotes...**

* [http://dev.markitondemand.com/Api/Quote/json?symbol=AAPL](http://dev.markitondemand.com/Api/Quote/json?symbol=AAPL)
* [http://dev.markitondemand.com/Api/Quote/json?symbol=GOOGL](http://dev.markitondemand.com/Api/Quote/json?symbol=GOOGL)

> Does the JSON look unreadable in the browser? If you're using Chrome, install the [JSON View plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en).

### Think, Pair, Share (5 minutes / 0:10)

Form pairs and explore the API links in the below table. Record any observations that come to mind. In particular, think about what you see in the URL and the API response itself.

| API | Sample URL |
|-----|------------|
| **[This for That](http://itsthisforthat.com/)** | [http://itsthisforthat.com/api.php?json](http://itsthisforthat.com/api.php?json) |
| **[Giphy](https://github.com/Giphy/GiphyAPI)** | [http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC](http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC) |
| **[OMDB API](http://www.omdbapi.com/)** | [http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1](http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1) |
| **[StarWars](http://swapi.co/)** | [http://swapi.co/api/people/3/?format=json](http://swapi.co/api/people/3/?format=json) |
| **[Stocks](http://dev.markitondemand.com/MODApis/)** | [http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL](http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL) |


### Why Just Data?

Sometimes thats's all we need. All this information, from all these browsers and all these servers, has to travel through the network. That's almost certainly the slowest part of the request cycle. We want to minimize the bits. There are times when we just need the data. For those times, we want a concise format.   

### What is Serialized Data? (10 minutes / 0:20)

All data sent via HTTP are strings. Unfortunately, what we really want to pass between web applications is **structured data** (i.e., arrays and hashes). Thus, native data structures can be **serialized** into a string representation of the data. This string can be transmitted and then parsed back into data by another web agent.  

There are **two** major serialized data formats...  

#### JSON

**JSON** stands for "JavaScript Object Notation" and has become a universal standard for serializing native data structures for transmission. It is light-weight, easy to read and quick to parse.

```json
{
  "users": [
    {"name": "Bob", "id": 23},
    {"name": "Tim", "id": 72}
  ]
}
```
> Remember, JSON is a serialized format. While it may look like an object, it needs to be parsed so we can interact with it as a true Javascript object.

#### XML

**XML** stands for "eXtensible Markup Language" and is the granddaddy of serialized data formats (itself based on HTML). XML is fat, ugly and cumbersome to parse. Thankfully, JSON has mostly eliminated the need to ever use XML. You'll probably always favor using a JSON API, if available.

```
<users>
  <user id="23">
    <name><![CDATA[Bob]]></name>
  </user>
  <user id="72">
    <name><![CDATA[Tim]]></name>
  </user>
</users>
```

**Many APIs publish data in multiple formats, for example...**

* [http://dev.markitondemand.com/Api/Quote/json?symbol=AAPL](http://dev.markitondemand.com/Api/Quote/json?symbol=AAPL)
* [http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL](http://dev.markitondemand.com/Api/Quote/xml?symbol=AAPL)

## Where Do We Find APIs? (5 mins)

APIs are published everywhere. Chances are good that most major content sources you follow online publish their data in some type of serialized format. Heck, [even Marvel publishes an API](http://developer.marvel.com/documentation/getting_started). Look around for a "Developers" section on major websites.

**That sounds hard. Can't you just give me a freebie?**

Try the [Programmable Web API Directory](http://www.programmableweb.com/apis/directory) or the [Public APIs Directory](http://www.publicapis.com/).

## What Is An API Key? (5 minutes / 0:25)

While many APIs are free to use, many others require an API "key" that identifies the developer requesting data access. This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.

**Try hitting the [Giphy](https://api.giphy.com/) API...**

* No key: [http://api.giphy.com/v1/gifs/search?q=funny+cat](http://api.giphy.com/v1/gifs/search?q=funny+cat)

* With key: [http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC](http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC)

**It is very important that you not push your API keys to a public Github repo.**

> This is especially true when working with [Amazon Web Services (AWS)](https://aws.amazon.com/). Here's an example of a [stolen key horror story](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight).

## AJAX (5 minutes / 0:30)

**So we know what an API is. Now what?**

How can we use an API to dynamically manipulate the DOM with the given data? **AJAX**. As you'll come to learn, this allows us to build single page applications that do not require refreshes.

**AJAX**, which stands for "Asynchronous Javascript and XML," is the method through which we are able to make HTTP requests. The standard requests we will be making are `GET` `POST` `PUT` `PATCH` and `DELETE`.

| Type of Request | What's It Do? | An Example URL |
|-----------------|---------------|----------------|
| `GET`  | Read | [http://swapi.co/api/planets/](http://swapi.co/api/planets/) |
| `POST` | Create | [http://swapi.co/api/planets/](http://swapi.co/api/planets/) |
| `PUT` | Update | [http://swapi.co/api/planets/2/](http://swapi.co/api/planets/2) |
| `PATCH` | Update | [http://swapi.co/api/planets/2/](http://swapi.co/api/planets/2) |
| `DELETE` | Delete | [http://swapi.co/api/planets/2/](http://swapi.co/api/planets/2) |

<details>
  <summary><strong>Q: Why do you think there is a "2" at the end of the URLs in the last three rows? (Hint: you could replace it with any number)</strong></summary>

  > You'll notice that the URLs for `PUT` `PATCH` and `DELETE` end with a number. That's because these actions are updating or deleting a *particular* student. That number is a unique identifier for a particular student defined on the back-end. More on this next week...

</details>


## Break (10 minutes / 0:45)

## GET Data From an API Using AJAX

### I Do: GET From OMDB (15 minutes / 1:00)

> **Do not follow along for this portion of the lesson.** You will have the opportunity to do it yourself afterwards.

Let's build a very simple app that posts a movie title and poster after searching for it. We'll do this using the [OMDB API](http://www.omdbapi.com/).

**[OMDB movie search](https://github.com/ga-wdi-exercises/omdb-api)**

The starter code is linked above. It contains a basic HTML/CSS/JS setup. If you open up the HTML in the browser, you will notice that searching for something returns no results.

Let's go ahead and add in the AJAX request. There are many ways to write an AJAX request, but we will be using a library called `axios` during this class.  Axios is a Promise-based HTTP client that takes advantage of many new JavaScript features and uses JavaScript's built in Promise API.  Let's see it in action now.

```js
// Get value from search input field.
const keyword = document.getElementById("#keyword").value;
const url = `https://www.omdbapi.com/?t=${keyword}`;
axios.get(url).then(response => {
  console.log(response);
});

```

Three important things to notice about `axios` here...
  1. The method called is `.get()`.  We can also use `.post()`, `.put()`, `.delete()`, and more.
  2. The `.get()` method only takes one argument. The url of the api we want to hit.
  3. We can tell axios what to do with the data by calling `.then()`.

<details>

  <summary><strong>Q: How did we know which URL to use?</strong></summary>

  > The [OMDB API documentation](http://www.omdbapi.com/)

</details>

<details>

  <summary><strong>Q: So our application can make an AJAX call. Why aren't we seeing anything after clicking "Search"?</strong></summary>

  > We haven't told our application what to do once it receives a response.

</details>

### Promises

After making an API call, we need to let our program know what to do with the data when it comes back. We can do this by doing something with the its return value, which comes in the form of a **promise**. We can use **promise methods** to tell the `axios` request what to do if the request is successful or not. We will use two promise methods when working with Axios...

#### `.then()`

`.then()` is called whenever the previous method returns information.  In the case of AJAX calls, this typically means that `.then()` will be called once the information has been requested, processed, and sent back to our program.  We use `.then()` to tell our program what to do with this JSON data.   

```js
axios.get(url).then(function(response){
  var data = response.data
  document.window.append(data);
});
```

<details>
  <summary><strong>Q: What are we passing into the `.then` promise method? Does this remind you of anything we've done previously in class?</strong></summary>

  > `.then` requires a callback that determines what we do after a successful AJAX call. This is an example of a higher order function

</details>

#### `.catch()`

A promise method for when the AJAX call fails.  These failures can occur for a variety of reasons. Internet went down, url is incomplete, the server you're hitting running into errors... it's important to know why things go wrong when they do.  That's why the catch method allows you to catch and interperate errors when they occur.

```js
.catch(function (error){
  console.log("fail");
  console.log(error)
});
```

## Making API Calls in a React Application.

Using AJAX allows us to retreive and save information, update the DOM, and create a single experience without ever having to visit a new page.  This is known as Client Side Rendering and is the style of application that has allowed React, Vue, and Angular to grow as rapidly as they have.  We will be using Axios to handle our API calls.  



## Another API: Tunr

Now let's take a look at an API that resembles those that we'll be working with in class over the next few weeks: Tunr. In its full form, Tunr is an app that lists artists and songs. The link below will take you to the API for the app (i.e., JSON representations of said artists and songs).

**[Check it out.](https://tunr-api.herokuapp.com)**

------Talk about using Postman when learning a new API--------

------Using in React------


### Set Up (5 minutes / 1:15)

We will create a small app that will allow us to interact with the Tunr API. Start out by cloning down the starter code...

`$ git clone git@github.com:ga-wdi-exercises/tunr-ajax.git`

Change into that directory and open its files in Atom. We will only be adding code to `script.js`. Also take a look at the interface we'll be using by opening `index.html` in Chrome.

### You Do: GET (10 minutes / 1:25)

Start by creating an AJAX `GET` request to Tunr that returns **all artists**.
* It should be triggered when the user clicks on the big "GET" button.
* If the AJAX call is successful, it should print the response to the console.
* If the AJAX call is failure, it should print the word "FAIL" as well as the response to the console.

> Think about what we need to make this `GET` request. What might we not need that we did making an AJAX call to OMDB (or vice versa)?

#### Bonus

Render the response on the page. You can modify `index.html` to do this.

> If we access the response object, we can see all of the artists that were seeded in the database. Inside the done promise, we can interact with and display all the contents of the response.

### I Do: POST (15 minutes / 1:40)

> **Do not follow along for this portion of the lesson.** You will have the opportunity to do it yourself afterwards.

Let's try and create an artist using AJAX. In `script.js`...

```js
$("#post").on("click", function(){
  $.ajax({
    type: 'POST',
    data: {
      artist: {
        name: "Limp Bizkit",
        photo_url: "http://sessionsx-magazine.itibitiventuresi.netdna-cdn.com/wp-content/uploads/2016/01/Featured-What-Happened-To-Limp-Bizkit-.jpg",
        nationality: "USA"
      }
    },
    dataType: 'json',
    url: "https://tunr-api.herokuapp.com/artists"
  }).done(function(response) {
    console.log(response);
  }).fail(function(response){
    console.log("Ajax get request failed");
  });
});
```

As you can see, every time we click on this button another artist is generated. We can now `POST` things to our database on the client side. But there's a problem here: we've hardcoded the attributes.

<details>
  <summary><strong>Q: How might we be able to dynamically acquire data on the client side instead of hardcoding values?</strong></summary>

  > By using the values the user enters into the input fields.

</details>

Let's try that out...

```js
$("#post").on("click", function(){
    var name = $("#artist-name").val();
    var photoUrl = $("#artist-photo-url").val();
    var nationality = $("#artist-nationality").val();
    $.ajax({
      type: 'POST',
      data: {
        artist: {
          photo_url: photoUrl,
          name: name,
          nationality: nationality
        }
      },
      dataType: 'json',
      url: "https://tunr-api.herokuapp.com/artists"
    }).done(function(response) {
      console.log(response)
      $("ul").append("<li><a href='/artists/" + response.id + "'>" + response.name + "</a></li>")
    }).fail(function(response){
      console.log("ajax post request failed")
    });
  });
```
### You Do: POST (10 minutes / 1:50)

Now you try it. Again, feel free to reference the code above or give it a shot only using the pseudocode below.

```
When the user clicks the POST button.
  Store the name, photo URL and nationality.
  Make an AJAX call, indicating the proper URL, type and data type.
    Indicate what should be done after a successful API call.
    Indicate what should be done after a failed API call.
```

## Break (10 minutes / 2:05)

### You Do: PUT and DELETE (Rest of the Lesson)

You now know enough to tackle sending `PUT` (updating an artist) and `DELETE` (deleting an artist) AJAX requests on your own! One thing to keep in mind as you're working on these...

<details>

  <summary><strong>Q: How can we identify which artist we want to update or delete in an AJAX call? (Hint: take a look at the HTTP request table earlier in this lesson)</strong></summary>

  > By adding an id (or unique numerical identifier) to the end of the URL.

</details>

Since you will all be modifying the same API, **please only update or delete artists that you yourself have created!**

Some additional notes...
* You can hardcode an artist id into your AJAX request. Don't worry about taking that in as a user input.
* You do not have to render the results of a `PUT` or `DELETE` request on the page. That's a bonus.

#### Bonuses

* If you haven't already, make it so that a successful `GET` request renders artist names in the browser.
* After a successful `POST` `PUT` or `DELETE` request, update the list of artists in the browser to reflect the changes made to the API.

#### Solutions

For reference in case you feel stuck. Don't copy and paste! Take a look and then try to implement yourself from memory.
* [`PUT`](https://github.com/ga-wdi-exercises/tunr-ajax/commit/8cf4b74603c065e5d6a417315ebeba82bcdaa900)
* [`DELETE`](https://github.com/ga-wdi-exercises/tunr-ajax/commit/6706d2bed4aaca253f9a58c55e4b136e232537cf)

## Conclusion (5 mins)

- What is an API?
- Why are APIs useful/important?
- What is AJAX?
- What information might we need to pass into an AJAX call?
- How do we go about interacting with the response of an AJAX call?

## Hungry For More?

[Take a look at the prompts in this week's lab.](https://github.com/ga-wdi-exercises/fun_with_apis#need-an-app-idea)

## Resources

* [Andy's blog](http://andrewsunglaekim.github.io/Server-side-api-calls-wrapped-in-ruby-classes/)
* [Postman](https://www.getpostman.com/)
* [Intro to APIs](https://zapier.com/learn/apis/chapter-1-introduction-to-apis/)
* [Practice with APIs](https://github.com/ga-dc/weather_teller)
* [Beautify your JSON in Chrome](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
