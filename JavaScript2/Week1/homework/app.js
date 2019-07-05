'use strict';

{
  const favoriteBooks = [
    //1_1 
    //Replace with your own book titles
    'harry_potter_chamber_secrets',
    'call_of_the_wild',
    'the_turtle',
    'snowball_and_the_bunny_adventures',
    'chicken_little',
    'hey_friend',
    'it_is_chilly_out_there',
    'stone_and_pain',
    'maybe_tomorrow',
    'alise_in_wonderland',
  ];

  // Replace with your own code
  //1_2  
  //console.log(favoriteBooks);

 //1_3 Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop. 
   
    let unorderedList = document.createElement("ul"); 
    for (const gameIndex in favoriteBooks) { 
      const listItem = document.createElement("li"); 
      listItem.textContent = favoriteBooks[gameIndex];
      unorderedList.appendChild(listItem); 
    }

    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("gameDiv"); 
    document.body.insertBefore(unorderedList, currentDiv); 
}
