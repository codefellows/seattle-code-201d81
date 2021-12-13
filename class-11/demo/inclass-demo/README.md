# Inclass Demo Insructions

## Problem Domain

You have been hired by a goat fan club called GoatPick to build an app that helps users determine the cutest goat picture out of a collection of photographs.  

Since catalogs are expensive to print and distribute, and goats need only the loyalest of fans, and GoatPick is a lean startup that needs to carefully watch its expenditures, GoatPick wants to feature only the most loved goats in its catalog that are the most likely to acheive loyal fandom.

This means that GoatPick wants to do market analysis  to test their potential fan interest… before actually putting them into the catalog.

To make this market analysis maximally effective, GoatPick wants you to build an app that displays potential goat candidates to individuals in focus groups (two goats at a time, side-by-side) so you’ll need to manage the size and the aspect ratio of the images.

The app’s purpose is to have the group members choose which goat, of the two displayed images, that they would most likely be fans of, and then store, calculate, and visually display the resulting data.

To keep the goat selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 15 selections made.

The marketing team is not only interested in the total number of clicks, but also the number of times that an item was shown. So, you’ll also need to keep track of how many times each image is displayed.

You are also responsible for the look and feel of the app, so don’t forget a custom font, color palette, layout with semantic HTML, and so on.

### To recap:  

Your app will randomly display two of these unique pictures at a time, the user should be able to click on their favorite.  Once clicked, the images will rerender another set of random pictures.  Although it is acceptable for the pictures to be shown back to back on today's iteration of this app, the two pictures rendered may not be the same.  

after choosing your favorite goat 15 times, the voting session will conclude, the user can press a view results "button" and the app will render a list showing all of the goats names, the number of times they were viewed, and the number of clicks received.



#### What Do We Need?

// global variables
// array - all goats array and things
// global counter - number of clicks allowed (15) 
// window into the DOM.  declare a container variable and assign an element
// window into the dom for the 2 images: images hard coded in HTML with ids of img-one and img-two

// constructor - for each goats
// image source - base on the goat name
// name
// number of views of the image
// number of clicks or "votes"
// push into allGoats array

// functions:
// random number generator to get random index - SO we can show TWO DIFFERENT random goats
// validation / control flow - index is unique identifier.  if goatOne is the same as a goatTwo, get a different goat for goatTwo
// SPOILER - use loop to see if the single thing is already in the collection.  the collection === an array.  ask yourself:  how do you tell if something is inculded in an array?  array method WORKS WELL
// once we have two unique goatswe:  display the two images
// how to display images?  
// CHANGE ATTRIBUTES:  src, alt



// event handler #1
// triggered everytime we have a click, and shut off when we hit 15 clciks
// what happens when clicked?
// make note of the views, the clicks, and rerender
// when we hit 15 - dont allow any more clicks / views / votes

// event listener  #1

// another event cycle for the button once 15 clicks happen.  render list of results when button clicked




### Brainstormings and other ideas
