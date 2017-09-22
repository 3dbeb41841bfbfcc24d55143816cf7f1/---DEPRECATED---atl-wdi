---
title: Intro to the Internet and Node 
type: lesson 
duration: '2:00' 
creator: 
    name: Colin Hart 
    adapted by: Jamie King
    class: ATL-WDI-11
---

# Intro to the Internet and Node

## Objectives
*After this lesson, students will be able to:*

- Understand how information is stored and transmitted across the internet.
- Describe how a server is able to receive data and respond to clients.
- Define the 5 HTTP verbs and have an understanding of HTTP Status codes
-	Understand what Node.js is and why it’s exploded in popularity.
-	Create a simple server using the HTTP module
-	Send different responses to the client based on specific routes.

## How does the internet work?

Think about how the internet works.  There are 4 high level terms that describe how the entire internet works. Take a few minutes and discuss what these terms mean with the person beside you.

![](http://i.imgur.com/vh2LsEz.jpg)

I'm going to call on a couple of you, but would also like you all to type your own answer into Slack as we discuss!

<br />

### The Conceptual

Trying to define just what the internet is can be difficult.  At it's highest level, the internet is just an open network of computers (aka servers) that are able to serve and consume information from other computers.  While this is true, it oversimplifies what the internet actually DOES.  Ever since the first version of 'the internet' was created in 1969, it has revolutionized communication, culture, politics, and more. Take a look at these major world events that have taken place just since Tim Berners-Lee proposed the World Wide Web in 1989.

- **1990**: The World Wide Web comes online.
- **1995**: Craig Newmark creates Craigslist.
- **1995**: Amazon, an online bookstore, opens for business.
- **1998**: Google gets its start as an online search engine.
- **2001**: Wikipedia creates an online, user maintained encyclopedia.
- **2003**: Friendster creates the first online social network.
- **2006**: YouTube debuts it's platform to make it easy to share online videos.
- **2009**: Hundreds of thousands of Iranians use social networks like Twitter to communicate and organize a revolution.

This is just the tip of the iceberg concerning how the internet has changed society as we know it. Despite this impact, the technical concepts can be boiled down to pretty simple terms.

![](http://imgur.com/KelmRFQ.jpg)

1. The **client** (aka the user's computer) sends a **request** out in the form of a URL.

2. The **request** is sent to a DNS server (Domain Name Server) which translates the URL written in English into an IP address.  An IP Address is a unique set of numbers attached to the server that the user is trying to reach. Think of it like a phone number.

3. Once the **request** has made it's way to the **server**, the **server** parses information sent by the **request** and executes code to deliver a **response**.  The **response** can be anything from html/css/js files to images/movies/games/etc.  This step is what we're going to be focusing on during most of this unit.

4. Whenever the **server** is ready to send a **response**, it delivers the data to be served by the client.

5. The **client** receives the **response** and their browser is updated with the files delivered from the **server**.

Let's look at one more example of this: 

![](http://imgur.com/AdJA3h4.jpg)

### Seeing The Internet In Action

*The image below comes from the Chrome developer tools. This is what an actual request looks like:*
![](https://i.imgur.com/TH3R9lv.png)

Open Chrome dev tools, go to the network tab, refresh the page, and you can see all of the requests made for the content. You can see that there is a _lot_ more than just html and css. And if you click on one of those requests, you can then see the headers for it.

<br />

## Sending and Receiving Data

We are not in this class to _just_ demystify the internet.  We are here to learn how to send, receive, and interpret requests and responses to deliver something of value to our end users!

### HTTP verbs (10m)

The act of transmitting data across the internet is described using 7 HTTP verbs. **HTTP** or **Hypertext Transfer Protocol** refers to the way data is sent and received. Requests and responses, as we have been discussing them, are a part of HTTP and are actually very straight forward.

> **EXERCISE**: Take three minutes to think about interactions (hint: think of *verbs*) that you use to engage with the internet and that result in a [persisted change](https://en.wikipedia.org/wiki/Persistence_(computer_science)). Meaning that when you do something on a website, turn your computer off, and then come back to that website the following day, you expect to see that your changes will still exist on the site.

> Write your responses into Slack.

HTTP is made up of seven **HTTP verbs**, though we will just focus on four and today we will only work with one.

- GET, POST, PUT, DELETE are the basic HTTP verbs for CRUD
- Can anyone tell me what CRUD means? 
- Create(POST), Read(GET), Update(PUT), Delete(DELETE) — (CRUD)

If we think about this in terms of a blog: we can ask to see a blog post (Read/GET), we can create blog post and save it (Create/POST), we can then go and edit that blog post (Update/PUT), and if the content becomes out of date, we can delete it (Delete/DELETE).

During Unit One, you likely inadvertently used the GET verb. Can you guess in what context you used it?

<br />

### Request-Response Cycle

So, let's get our hands dirty: what is the easiest way you can come up with to make a **GET** request?

EXERCISE: For the next 10 minutes, complete this [mini-lab](https://github.com/ATL-WDI-Curriculum/atl-wdi/blob/master/labs/node/node-lab/curl-lab.md) with a partner. Read through the explanation of cURL and work through the exercises.

EXERCISE: 5 minute breakout session! With your partner, work together to come up with an explanation, in your own words, of how the internet works, HTTP verbs, and the request-response cycle.

<br />

### The Web as _Resources_

What happens if you put 146.115.8.93 instead of www.google.com?

So, what if I wanted to go across the web (or to the grocer) and GET some resource (like coconut oil)? I could find the unique IP address of that computer and make the request, or I could LOCATE its RESOURCES UNIVERSALLY via its **URL** (Uniform Resource Locator):

 ![resource diagram](https://cloud.githubusercontent.com/assets/25366/8561247/75b73966-24d7-11e5-896a-06506648c4fe.png)

### The Elements of a URL

**URL** stands for Uniform Resource Locator, and it ultimately is just a string of text characters used by web browsers, email clients and other software to format the contents of an internet request message.

Let's breakdown the contents of a URL:



```
    http://www.example.org/hello/world/foo.html?foo=bar&baz=bat#footer
    \___/  \_____________/ \__________________/ \_____________/ \____/
  protocol  host/domain name        path         query-string     hash/fragment
```

Element | About
------|--------
protocol | the most popular application protocol used on the world wide web is HTTP. Other familiar types of application protocols include FTP, SSH, GIT, FILE, HTTPS
host/domain name | the host or domain name is looked up in DNS to find the IP address of the host - the server that's providing the resource
path | web servers can organize resources into what is effectively files in directories; the path indicates to the server which file, from which directory the client wants
query-string | the client can pass parameters to the server through the query-string (in a GET request method); the server can then use these to customize the response - such as values to filter a search result
hash/fragment | the URI fragment is generally used by the client to identify some portion of the content in the response; interestingly, a broken hash will not break the whole link - this is not the case for the previous elements that we have discussed

<br />

_The Schema above is from [Tuts +](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)_

When someone types `http://google.com` in a web browser, a new cycle resulting in an HTTP Request/ Response is initiated.  Essentially, your browser is saying:

_"Hey, there friend.  Please respond with the information located at the web address 'google.com/'."_

<br />

# Framing
For our introduction to programming servers, we are going to be using Node.js. 

## What is Node?

Node was created in 2009 by Ryan Dahl. Dahl was critical of the limitations of the Apache HTTP Server when a lot of connections at once.  He created Node.js using the C++ language and Google's V8 engine to run JavaScript code in C++.

Visit the [Node.js homepage](https://nodejs.org/en) and take a look at Node's one-liner.

>Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Let's break this down...
>Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

All of the JavaScript that we write when writing Node is actually interpreted through several C++ libraries when we run the `node` command.  This is done via the Chrome V8 Engine. V8 powers some of the most widely used tools related to software development including the Chrome and Opera Web Browser, the CouchBase and MongoDB databases, and Electron (the platform used to create apps like Visual Studio Code)

>Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

You'll commonly hear people mention that Node is asynchronous.  What they mean by this is that Node is able to take many requests at once and respond to each in it's own time.  The alternative to this is known as a blocking model.  In a language that uses blocking, the server can only handle one request at a time.  If any of these requests are taking a long time, the program will be blocked and not continue until it is resolved.

In layman's terms:

Imagine a paper delivery boy riding on his bike, delivering papers every morning. Imagine that he stops at each house, throws the paper onto your doorstep, and waits to make sure you come out and pick it up before moving on to the next house. That is what we would call _blocking_ – each line of code must finish before moving on to the next line of code.

Now, imagine the paperboy throwing the newspaper on your porch, but never stopping his bicycle.  He never stops.  He just keeps throwing papers on porches, so that by the time you pick it up he will be at least 3 to 4 houses down. That would be considered _non-blocking input/output (I/O)_, otherwise known as _asynchronous_. This is an extremely awesome feature of node since I/O tends to be very "expensive" as it takes many steps/time to retrieve data from memory.  And each step adds its own amount of delay time.

> Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Finally, the package ecosystem is another killer feature for Node.  Through using a package manager like `npm` or `yarn`, we are able to easily import external libraries and frameworks like jQuery, React, and Express.

## What is Node great at? 
Node's Core Strengths are:
- **Familiarity**: We already know how to write JavaScript.
- **Full Stack JavaScript**: We can write JavaScript throughout the entire app. No need to switch back and forth between multiple languages. 
- **Fast**: Node outperforms similar options due to it's non-blocking nature.
- **NPM**: The package manager in Node is the largest package manager in the world.
- **Rapid Growth**: The number of monthly downloads of Node has increased 500% since 2014. That number is continuing to expand, and with that growth comes the demand for more jobs.

![](https://nodesource.com/assets/node-by-numbers/charts/downloads-per-month-2016.png)

## What are Node's weaknesses
- **Maturity**: Since Node is such a new language, there are still some coding standards that aren't completely clear.  This is becoming less of a problem as the development community continues to grow and tools like ESLint become available.  
- **Debugging**: Node doesn't have many robust debugging tools out of the box.  The developer is responsible for making error logs.

## Our first Node app
We installed `node` a few weeks ago, so we should be able to easily get up and going.  Let's create a file called `helloWorld.js` and log "Hello World" to the terminal.

```js
console.log("Hello World!")
```

Run the program in the command line by using `node helloWorld.js`. That's it! You've created your first Node app.  It's not very useful though.  Let's try and build out a web server to actually say Hello to the whole world.

Let's open up the [node_lab](https://github.com/ATL-WDI-Curriculum/atl-wdi/blob/master/labs/node/node-lab/node-lab.md) and create a web app using only node (we'll learn how to do the same thing with Express.js later today).
