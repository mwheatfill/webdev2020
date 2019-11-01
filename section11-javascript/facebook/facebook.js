var database = [
    {
        username: "Mike",
        password: "SuperSecret"
    },
    {
        username: "Sally",
        password: "pass"
    },
    {
        username: "Ingrid",
        password: "123"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all the learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool!"
    },
    {
        username: "Mitch",
        timeline: "I wanna manipulate the DOM!"
    }
];

function isUserValid(username, password) {
    for (let i = 0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

var usernamePrompt = prompt("What is your username");
var passwordPrompt = prompt("What is your password?");

signIn(usernamePrompt, passwordPrompt);