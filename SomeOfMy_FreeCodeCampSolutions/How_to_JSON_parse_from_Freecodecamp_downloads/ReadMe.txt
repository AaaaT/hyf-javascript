
I have solved an exercise on FreeCodeCamp and downloaded the solution, that comes in json format.
Then I wanted to edit it and did not know how to convert it back to Javascript. 
After some trial and error, I found out how:

-In index.js I am parsing the json to be able to edit it in Javascript again (in Visual Studio Code).
-I run node index.js in the Git Bash (Command Line or Terminal) and it throws an error.
-I go back (to Visual Studio Code) and change all of the \n to \\n and it works! (ctrl + h, replace all).
-I run node index.js in the Git Bash (Command Line) again.
-There is the original Javascript function I have solved displayed on my Command Line Terminal now!
-I copy my original function from the Command Line Terminal into index.js and continue editing it.
