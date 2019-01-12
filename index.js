/*
Title: Random Joke Generator
Descripton: Library that exports random jokes
Author: Aman Mender
Date: 12.01.19
*/

const jokes = require('./lib/jokes')
const math = require('./lib/math')

let intervall;
if(process.argv.length > 2) {
    intervall = parseInt(process.argv[3]);
}

const app = {};
app.config = {
    'jokeIntervall': intervall ? intervall : 2000
}

app.printJoke = () => {
    const allJokes =  jokes.getAll();
    const randomNumber = math.getRandomNumber(1,allJokes.length);
    const selectedJoke = allJokes[randomNumber - 1];
    console.log(selectedJoke)
}

app.indefiniteLoop = () => {
    setInterval(app.printJoke,app.config.jokeIntervall)
}

app.indefiniteLoop();