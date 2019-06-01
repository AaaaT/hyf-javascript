let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
//console.log("blowfish, meerkat, turtle, capricorn, giraffe ");
console.log(favoriteAnimals);

console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);


let meerkatIndex = favoriteAnimals.indexOf("meerkat", 0);
console.log("The item you are looking for is at index: " + meerkatIndex);