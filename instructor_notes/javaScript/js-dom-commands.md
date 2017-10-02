---
title: The DOM and JS in the Browser
type: lesson
duration: "2:00"
creator:
  name: Colin Hart
edited: 
  name: Jamie King
competencies: Programming
---

## Learning Objectives

* Use the Elements Panel of the Chrome Dev Tools to interact with the DOM
* Access elements in the DOM using Vanilla JS
* Add and remove elements to the DOM using Vanilla JS
* Manipulate existing elements in the DOM using Vanilla JS
* Conceptualize load order in the Browser and how we account for it

<br />

## Elements Tab

You can use the Elements panel for a variety of tasks:

- Inspecting the HTML & CSS of a web page
- Live-editing HTML/CSS on-the-fly

Let's go ahead and play around with some of these tools.

<br />

![We Do](http://i.imgur.com/6Kce0ca.png)

### Modifying CSS On-the-Fly

The Chrome DevTools have made it very easy to quickly test and edit the CSS before incorporating it back into your application. On [http://lifehacker.com/](http://lifehacker.com/) do the following:

- Press `command(⌘) + option + i` to open the inspector view
  - You can open the DevTools with any shortcut that you like, then press the square with the arrow on the top left corner of the tools section.
  - Alternatively, try right-clicking on the page and selecting "Inspect Element" at the bottom; or right-clicking on a particular element and selecting "Inspect"
- Look at the DOM nodes on the left-hand side and select the `body`
- Look at the CSS responsible for a rendered element in the browser

When you are sure that you have the body selected, in the CSS live-editor on the right, change the CSS property `background` value to `red` by clicking on it:

```css
body {
    background: red;
}
```

What happened? When we have are looking at CSS via the DOM, we are able to do whatever we want to change it!  But remember that if you refresh the page, everything will re-render in the way that it was originally intentioned and you will lose your changes!  Your browser will have sent a new request and received a new response back - aka the default HTML + CSS files and folders associated with the `lifehacker` endpoint.

A few other things to try:

- Notice that as you start typing background, the css properties autocomplete.
- After choosing your color, a little colored box will show up (if Chrome recognizes the color that you typed).
- If you press `SHIFT` and click on the colored box, you can see that the color changes format rgb, hex, etc.
- If you click on the colored box, you will also see a color selector.
- If you click on the color you will also get a color selector!

Pretty sweet, eh?

<br />

![You Do](http://i.imgur.com/ylb6WX9.gif)

### YOU DO - Alter the GA logo (5m)
- Go to the [General Assemb.ly site](https://generalassemb.ly/).  Inspect the General Assemb.ly logo in the top left corner and change the image to an image of your choosing (from somewhere on the internet)
- Change the values of the logo margin to make the image fit
- Change the font-family of the first `h1` on the page to Arial and the font-color to red

The goal of this exercise is to try to get you comfortable editing and manipulating the DOM in your browser, as these will come in handy for every one of your projects. <!-- I often use dev tools to play around with the CSS for whatever page I happen to be working on. -->

<br />

![You Do](http://i.imgur.com/ylb6WX9.gif)

### YOU DO (2 min)

- Change the text of the first `h1` on the page to "WDI ATL 10 gets down with Chrome Dev Tools!".
- If you finish with this task, experiment with what else you can manipulate on the page.

<br />

## Document Object Model (5m)

The [**D**ocument **O**bject **M**odel](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) is the in browser representation of your HTML document.  And manipulating the DOM is like taking a recipe and making it your own.

The DOM makes the HTML available for us to manipulate, and this object is structured like a tree:

Like this:

![](http://www.tuxradar.com/files/LXF118.tut_grease.diagram.png)

Or this:

```
html
└── head
│   ├──title
│   ├──meta
│   ├──link[rel="stylesheet"]
|   └──script[type="text/javascript"]
|
└── body
    ├── header
    │   ├── h1
    │   └── nav
    └── section.simplicity
    |   └── h2
    │   └── article
    ├── section.life
    |   └── h2
    │   └── article
    │       └── block_quote
    │       └── block_quote
    └── footer
```

Let's create a web page and begin to inspect its structure.

<br />

![](http://i.imgur.com/ylb6WX9.gif)

- Open your terminal
- `cd` into your `ga` folder
  - (`cd ~/Desktop/ga/class-exercises`)
- Create a new directory called `dom-intro-lesson`
  - (`mkdir dom-intro-lesson`)
- `cd` into it and create a new file called `index.html`
  - `cd dom-intro-lesson`
  - `touch index.html` 
- Open the file in VS Code
  - `code .`
- Copy this code into the file then open it in Chrome:
  - to open in Chrome, right click on the html page and, click on 'Open in Browser'

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Sample HTML5 Page</title>
    <meta name="description" content="Sample HTML Page">
  </head>

  <body>
    <section id="main">
      <h1>The DOM Rocks!</h1>
      <p>When this document gets loaded into the browser's memory, it is transformed from a static HTML document to a dynamic DOM tree. At this point we can use JavaScript to inspect and manipulate the nodes in the DOM tree.</p>
    </section>
  </body>
</html>
```

<br />

### Everything is a Node
In the HTML DOM (Document Object Model), everything is a node:

* The document itself is a document node
* All HTML elements are element nodes
* All HTML attributes are attribute nodes
* Text inside HTML elements are text nodes
* Comments are comment nodes

<br />

![YOU DO](http://i.imgur.com/ylb6WX9.gif)

### Doc Dive (15m)
Each group researches the methods they were assigned on MDN. 

Each group will research and test each method in the Chrome developer tools and write a brief explanation about what each method does. 

We will then come back together as class. Each group will briefly demo and explain what each method does. 

* **Search** 
  * document.getElementById
  * document.getElementsByClassName
  * document.getElementsByName
* **Creation** 
  * document.querySelector (*technically a search method*)
  * node.style
  * node.setAttribute
* **Traversal** 
  * node.childNodes
  * node.children
  * node.firstChild
* **DOM editing** 
  * document.createElement
  * node.appendChild
  * node.removeChild
* **Node editing** 
  * node.innerHTML
  * node.id
  * node.classList

<br />

## What are the ways that we can add JS to our HTML page?

### Inside the `<head>` tag

We can run JS inside of `<script></script>` tags inside of our head tags.

### Script tags before the closing `</body>` tag

We can run JS inside of `<script></script>` tags before the closing `</body>`tag of an html document.

### Exercise: (10m) I'll demonstrate this in front of you first, and then you can try on your own.

Open up the HTML file from earlier. At the end of the `<body>` tag write a script tag with the following JS inside of it.
    
```html
<script>
  var response = prompt("Hi! What is your favorite food?");
  alert(`I wish I liked ${response} too. Sometimes, it is sad to be a computer. :( `);  
</script>   
```

To run this code in Chrome, in index.html file, you can right click and scroll to the 'Open in Browser' option.

<br />

### External JS file, similar to how we linked our css

Instead of the `<link>` tag we will keep using our script tag. 

### Exercise: (10m)

1. Touch a file called main.js
2. Let's move the JS code that you wrote inside of the script tag in the index.html, to your main.js file. However, we will change it up a bit and add our message to the DOM via a new Element:

```javascript
var response = prompt("Hi! What's your favorite food?");

var newElement = document.createElement("p");
newElement.textContent = `I wish I liked ${response} too. Sometimes, it is sad to be a computer. :( `;
document.body.appendChild(newElement);    
```
    
### Before the closing `body` tag in the `index.html`

We can run JS inside of `<script type="text/javascript" src="main.js"></script>` tags before the closing `</body>`tag of an html document.  These script tags would point to an external JS file called `main.js`.  Why is this the best option?

### Exercise (5m)
    
```html
<script src='main.js'></script>
```

This is going to load our main.js file into the browser.

<br />

### Load Order

Here's what happens when a browser loads a website:

1. It makes a request for and fetches the HTML page (e.g. index.html)
2. It starts parsing the HTML, i.e. building the dom.
3. If the script tag is in the head of your html document, the parser sees a `<script>` tag referencing an external script file.
4. The browser makes a second request for the script file. Meanwhile, the parser stops and and waits. This is called **Blocking**.
5. Once the script is downloaded and executed, the parser continues parsing the rest of the HTML document.

There are several advanced techniques that load our JS, but for now we can just make sure that our script tag is at the end of our html so that the DOM loads before our script runs.  You should therefore make sure to put the script tags just before your closing body tag.

<br />

### window.onload

There is a pattern we can follow to help our page load properly, and execute it in the right order.  Although we should still keep the script tags just before the closing body tag.

We can surround our JavaScript in a function called `window.onload = function() {}`. This function will wait until the entire window/dom is loaded before allowing any of our JavaScript to run.

In your `main.js` file, wrap your JavaScript code in the following function:

```js
window.onload = function() {
  var response = prompt("Hi! What's your favorite food?");

  var newElement = document.createElement("p");
  newElement.textContent = `I wish I liked ${response} too. Sometimes, it is sad to be a computer. :( `;
  document.body.appendChild(newElement); 
}
```

Refresh your window and make sure your script is still running!

<br />

### Combining DOM selectors with other JS tricks

Now that we know how to create and edit HTML elements in JavaScript, we can create entire apps just using JavaScript! (sneak peek: This is exactly what frameworks like React, Angular, and Vue are doing)

#### Random Quotes Generator

Let's use JavaScript DOM manipulation to make an app that will give us a random quote every time you load the page.

1. First, let's create an `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Random Quotes</title>
</head>
<body>
  <script src="app.js"></script>
</body>
</html>
```
2. That's ALL the html that we're going to write for this app.  Everything else, we'll do in JavaScript.

3. Let's create an `app.js` and start things off with an object that contains some random quotes for our app.

4. First we'll create an array of objects that contain an `author` and a `quote` (I'll provide this in class)

5. Now let's use `Math.random()` to get a random quote from this array.
  `var randomQuote = quotes[Math.random() * quotes.length];`

6. After we have our quote, we need to create an HTML node to insert into our DOM.
  `var newElement = document.createElement("p");`

7. Now let's add text to this new node.  We'll use our random quote and author here.
  ```js
    newElement.textContent = `${randomQuote.quote} -${randomQuote.author}`
  ```

8. Now we have a basic element that is ready to be inserted into the DOM. 
  `document.body.appendChild(newElement)`

9. Let's open up our page and see what happens!


### You Do!

1. Research how to add styling onto a HTML node in JavaScript
  - Change the color of the text to Red
  - Change the margin-left to 15px
  - Increase the font-size to 24px

2. Create a loop in JavaScript that will take all of our quotes and add each of them to an unordered list.  (Hint: Create a `<ul></ul>` element in your index.html and append many `<li></li>` tags to them.)


### Closing
With this knowledge of how to manipulate the DOM, you now know the secret weapon behind all of the modern front-end frameworks.  Next up, we will learn how to use JavaScript to make our apps interactive through click events!


<!-- If you have time, you can add the lab back in, but usually the class exercise/presentations take a few minutes -->
---

![Labtime](http://i.imgur.com/WzTTdIe.jpg)

## Independent Practice

##### Exercise #1 - GA DOM Mod

[GA Dom Instructions (using Vanilla Javascript)](https://github.com/ATL-WDI-Curriculum/atl-wdi/tree/master/labs/javaScript/ga-dom.md)

<br />

---

## References

* [DOM Reference](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference)
* [DOM CheatSheet](http://christianheilmann.com/stuff/JavaScript-DOM-Cheatsheet.pdf)

---

### Some of my favorite JS books
* [A Smarter Way to Learn JS](http://www.cpp.edu/~jcmcgarvey/513_2016/ASmarterWaytoLearnJavaScript.pdf)
* [A Smarter Way to Learn jQuery](https://github.com/JideLambo/javascript-books/blob/master/A%20Smarter%20Way%20to%20Learn%20jQuery%20-%20Mark%20Myers.pdf)
* [JavaScript + JQuery](https://www.dropbox.com/s/05je29f3oxj7oa0/JavaScript%20and%20JQuery%20Interactive%20Front-End%20Web%20Development%202014.pdf?dl=0) - So good! Might be worth buying...
* [JavaScript the Good Parts](http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf)
* [Eloquent JS](http://eloquentjavascript.net/)
* [DOM Enlightenment](http://domenlightenment.com/#1.1)
* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
* [You Don't Know ES6](https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond)


**Quotes for In Class Exercise**
```js
const quotes = [{
  quote: "At any rate, that is happiness; to be dissolved into something completely and great.",
  author: "Willa Cather",
  image: "http://www.brainpickings.org/wp-content/uploads/2014/06/willacather.jpg"  
}, {
  quote: "In our village, folks say God crumbles up the old moon into stars.",
  author: "Alexander Solzhenitsyn",
  image: "http://media.economist.com/images/20080809/3208OB1.jpg"
}, {
  quote: "She wasn’t doing a thing that I could see, except standing there leaning on the balcony railing, holding the universe together.",
  author: "J. D. Salinger",
  image: "https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/11/28/1385673448859/JD-Salinger-portrait-New--010.jpg"
}, {
  quote: "I took a deep breath and listened to the old brag of my heart; I am, I am, I am.",
  author: "Sylvia Plath",
  image: "https://vsramblings.files.wordpress.com/2013/05/sylvia-plath-1.jpg"
}, {
  quote: "Isn’t it pretty to think so?",
  author: "Ernest Hemingway",
  image: "http://arbiteronline.com/files/2013/09/Hemingway-2.jpg"
}, {
  quote: "Beauty is an enormous, unmerited gift given randomly, stupidly.",
  author: "Khaled Hosseini",
  image: "http://payload181.cargocollective.com/1/1/45850/5922559/khaled_Time68846-1_2048.jpg"
}]
```