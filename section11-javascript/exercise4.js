//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

age = prompt("What is yoru age?");

if (age < 18) {
    alert("Sorry, you are too young to drive, powering off now!");
} else if (age = 18) {
    alert("Congrats on your first year of driving. Don't crash!");
} else {
    alert("Powering on. Enjoy the ride!");
}