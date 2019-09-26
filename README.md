# Book 2 Review

## Setup

1. Fork this repository into your Github account.
1. Clone your repo to your machine.
1. Create a branch named `make-pottery-{your initials}`.
1. Do all of your work on this branch.

## The Hairy Potter - Part I

In this exercise, your task to build a workflow for making, and firing pottery, and then determining if it should be sold at a craft show.

1. Define a factory function that is responsible for making a piece of pottery. The function should output an object that represents a piece of pottery. It should describe its shape, weight, and height. The function should take all three of those properties as input to generate the object.
1. Define a function that is responsible for acting as a kiln. It should take a pottery object as input and also the temperature of the kiln as input. It should add a new property of `fired` with the value of `true` to the object. It should output the pottery object.
    1. If the temperature of the kiln is above 2200 degrees then the pottery object should have a new property of `cracked` added to it, with a value of `true`.
    1. If the temperature of the kiln is below, or equal to, 2200 degrees then the pottery object should have a new property of `cracked` added to it, with a value of `false`.
1. Define a function that is responsible for determining if a piece of pottery should be sold. Cracked pottery should not be sold, and non-cracked pottery should be sold. If the weight of the piece of pottery is over 3, then it should get a `price` property with a value of 40. If it's under 3, its price should be 20.

```js
const potteryToSell = []


// Define your functions


// Create 5 pieces of pottery, some cracked and some not.
// Non-cracked pottery should be added to the collection
// of pottery to sell at the craft show.
```

When you are done, push your branch to Github, create a pull request and then merge your branch into `master`. Then pull the new master down to your machine.

## The Hairy Potter - Part II

In this exercise, you are going to create HTML representations of the pottery you want to sell at the craft fair and display them on the DOM. Then you will track which ones you sell.

1. Create a branch named `sell-pottery-{your initials}`.
1. Do all of your work on this branch.
1. Create a function that outputs an HTML representation of a pottery object. The HTML representation should include a button labeled "Sell". The function should take the pottery object as input.
1. Iterate the collection of pottery to sell and create an HTML representation of each one and add that representation to an `<article>` element in your DOM that has an `id` of `inventory`.
1. When you click on the "Sell" button of any piece of pottery, use `window.alert` to present a message in the following format.

```html
You sold a {shape of pottery} for ${price}
```

Once complete, push your branch to Github, create a pull request and merge your branch into master. Then pull down the new master to your machine.