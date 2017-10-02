# Functional Programming & Higher-Order Functions

## Learning Objectives

- Explain the idea of programming paradigms
- Highlight advantages of functional programming
- Identify the benefits of pure functions
- Define the concepts of state and immutability
- Explain the benefits of higher order functions
- Implement `filter`, `map`, `reduce`, `sort` and other higher order functions

## Framing (5 minutes)

Programming at its most basic level is the process developers undergo to instruct a computer to perform a task. But there are a number of programmatic approaches that can be taken to enable your computer to solve a specific problem. We call these approaches **programming paradigms.**

So far in WDI, we've largely relied on the *procedural programming* paradigm, which is the notion of writing a series of step-by-step instructions for your computer to carry out.

Earlier, we dipped our toes into the **object-oriented programming** paradigm. This design pattern allows us to considerably DRY up our code to achieve ***abstraction***, ***encapsulation*** and ***modularity***.

Let's look at another programming paradigm...

## Why Functional Programming? (10 minutes)

Though Object Oriented Programming is historically the most popular programming paradigm, functional programming has made a recent resurgence due to the popularity of libraries like React and Redux. But it's far from being a new concept. Lisp, one of the first programming languages ever created -- back in the 1950s -- had already embraced the paradigm.

[Ardent fans](https://www.youtube.com/watch?v=BMUiFMZr7vk&t=1s) have lauded functional programming for its emphasis on writing programs that will result in fewer bugs and more reusable code. The paradigm has historically been used with high-scale systems spanning thousands of networked computers, where it's critical that the program do exactly what's expected every time in the interest of performance and integrity. Many shied away from it, however, because "pure" functional languages are challenging to grasp and the paradigm was perceived as too "computer science-y" and academic.  Thankfully, many of the new methods in ES5 and ES6 has made functional programming much more approachable.

***So why is functional programming seeing a resurgence?***

[Javascript is cool now.](http://blog.salsitasoft.com/why-now/)

When [Brendan Eich](http://blog.salsitasoft.com/why-now/) created Javascript for his then-employer Netscape, he was ordered by management to make the language look like Java. He obliged somewhat and gave Javascript some key functional programming features. As the language exploded in popularity, Javascript developers are now taking advantage of these features.

## What is Functional Programming? (15 minutes)

Functional programming is characterized by **pure functions** and **function composition** and avoiding:

- Shared State
- Mutable Data
- Side-Effects

***Huh?***

Trying to understand the terminology associated with functional programming can be incredibly daunting. In the scope of this class, we're not going to go too in the weeds with the concepts, but we'll have initial exposure to them.

**Pure Functions**

Pure functions are a fundamental part of functional programming.

When we say __pure__ we mean a function, given the same inputs, will always return the same output. Such a function **does not** rely on or modify the **state** of variables outside it's scope.

The execution of a pure function doesn't depend on the state of the system. That is, it avoids **shared state**.

We also avoid the **side-effect** of modifying an external variable. As discussed earlier in the course, a side effect is an observable change in the application other than the return value of a called function.

* What's an example of a side-effect we've commonly seen?

Here's an example of an impure function:

```js
let age = 27
function increaseAgeBy(int){
  return age += int
}
increaseAgeBy(2)
```

<details>
  <summary>What makes this function impure?</summary>
  <p>The function changes variables outside of the function. This is a side-effect
  of the calling the function.</p>
</details>

<details>
  <summary>How can you demonstrate the impurity?</summary>
  <pre>console.log(age)</pre>
</details>

We can make this function pure by not changing anything outside the function. Instead, we modify the parameter, which is in the scope of the function.

```js
let age = 27
function increaseAgeBy(myAge,int){
  return myAge += int
}
increaseAgeBy(age, 2)
```

<details>
  <summary>How can you demonstrate the purity?</summary>
  <pre>console.log(age)</pre>
</details>

### Immutability

When working with pure functions, it is important to avoid changing (or mutating)
objects outside of the function. Immutability, the idea of not changing data at all, is another core concept in functional programming because it allows you to control data flow.

Why does the example below violate this concept of Immutability?

```js
let instructor = {
  name: 'Jomie',
  age: 999
}

instructor.name = "Jamie"
```
If we wanted to make this change without violating Immutability, we could create a function that would return a **new** and **separate** version of `instructor` without modifying `instructor` directly:

```js
let instructor = {
  name: 'Jomie',
  age: 999
}

function updateName(instructor, newName) {
  let newInstructor = {...instructor}
  newInstructor.name = newName
  return newInstructor
}

let jamie = updateName(instructor, "Jamie")
```

> let newInstructor = {...instructor} is an example of a destructured object. In other words, it is a clone of the original instructor object.

This example does not violate immutability because the original object (`instructor`) is not directly mutated. Instead, a copy of that object is created, then mutated, and finally returned. This way, the original object `instructor` is still accessible with its original values.


## Higher-Order Functions (15 minutes)

How can we start implementing functional programming practices now?

**Higher-Order Functions**

These functions are considered to be another key area -- perhaps the most important -- in the functional programming paradigm.

In functional programming languages, functions are values. That is, they can be stored in variables, or passed into other functions.

Higher-order functions are functions that can take functions as arguments and/or return a function as output. They are good for **function composition.** That is, taking a function and putting it into another allows us to compose a lot of smaller functions into a bigger function.

We've already seen an example of a higher-order function with `forEach`:

```js
let fruits = ["apples", "bananas", "cherries"];

fruits.forEach((currentFruit) => {
  console.log("Every day I eat two " + currentFruit)
});

//vs

for(let i = 0; i < fruits.length; i++) {
  console.log("Every day I eat two " + fruits[i]);
}
```

<details>
  <summary>Anyone remember another one we've used quite frequently?</summary>
  <p>`.on('click', callback)`</p>
  <p>`.get('/', callback)`</p>
  <p>`.listen(port, callback)`</p>
</details>

## Examples of functions that take functions as arguments:

### Filter

 [`Filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) is a method on an array that accepts another function as it’s argument, which it will then use to return a new filtered version of the array.


```js
let naysayers = [
  {name: 'Adam', age: 320},
  {name: 'Jared', age: 222},
  {name: 'Will', age: 187},
  {name: 'Isaac', age: 320},
  {name: 'Rodney', age: 423},
  {name: 'Fiona', age: 320},
  {name: 'Mike', age: 239}
]

let ancient = naysayers.filter((naysayer) => {
  return naysayer.age > 300;
})
```

Much nicer than...

```js
let ancient = [];

for(let i = 0; i < naysayers.length; i++) {
  if(naysayers[i].age > 300) {
    ancient.push(naysayers[i])
  }
}
```

#### YOU DO:
Use `.filter` to solve this problem: 
[Filter REPL](https://repl.it/L33j)

### map

The `map` method creates a new array with the results of calling a provided function on every element in the array. You can think of `map` as _mapping_ the elements of one Array to the elements of a new Array using a mapping function that you provide.  This is similar to `forEach` but it returns a value, which isn't possible using `forEach`

Here is an example using `map`:

```javascript
var values = [1, 2, 3, 4, 5];

var squares = values.map(function(v) {
  return v * v;
});

//or using ES6
var squares = values.map((v) => {
  return v * v;
});

//or even-shorter using ES6
var squares = values.map(v => v * v);

console.log('here are some squares:', squares);
```

And the output is:

```
here are some squares: [ 1, 4, 9, 16, 25 ]
```

vs.

```js
var values = [1, 2, 3, 4, 5];
var squares = [];

for (var i = 0; i < values.length; i++){
  var squared = values[i] * values[i];
  squares.push(squared);
}

console.log('here are some squares:', squares);
```
#### YOU DO
Map Practice
[Map REPL](https://repl.it/L34L/2)

### reduce

The `reduce` method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value. You can think of `reduce` as reducing an Array to a single value using the function you provide.

Here is an example of using `reduce`:

```javascript
var values = [1, -5, -2, 3, 12, -14, 0, 23, -1, 8];

let sum = values.reduce(function(accumulator, v) {
  return accumulator + v;
}, 0);              // zero is the initial value of the accumulator

console.log('The sum is', sum);
```

And the output is:

```
The sum is 25
```

#### YOU DO
Reduce Practice
[Reduce REPL](https://repl.it/L349)

## Resources

- [Fun Fun Function Series on Functional Programming](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
- [Functional Programming Workshop](https://nodeschool.io/)
- [Don't Be Scared of Functional Programming](https://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/)
- [Eloquent Javascript](http://eloquentjavascript.net/05_higher_order.html)
- [Master the Javascript Interview](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0#.9u4dyrpyc)
- [Functional Programming in Javascript](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0#.9u4dyrpyc)
- [Introducing Reduce: Common Patterns](https://egghead.io/lessons/javascript-introducing-reduce-common-patterns)
