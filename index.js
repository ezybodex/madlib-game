const sample = require('lodash.sample');
const express = require("express");

const app = express();
const port = '4000';

app.use(express.json());  // When we want to be able to accept JSON.
app.use(express.urlencoded({ extended: true }));  // For handling forms.

const COMPLIMENTS = [
  'awesome',
  'terrific',
  'fantastic',
  'neato',
  'fantabulous',
  'wowza',
  'brilliant',
  'ducky',
  'coolio',
  'incredible',
  'wonderful',
  'smashing',
  'lovely',
];

// Display the homepage.
app.get('/', (req, res) => {
  res.sendFile('client/index.html', {root: __dirname});
});

// TODO: Display a form that asks for the user's name.
app.get('/hello', (req, res) => {
  res.sendFile('client/hello.html', {root: __dirname});
});

// Handle the form above and greet the user.
app.get('/greet', (req, res) => {
  const compliment = sample(COMPLIMENTS);  // TODO: Replace with a random compliment
  const name = req.query.person;  // TODO: Replace this with the user's name
  const gameLink = "<a href='/game'>Click here to play Madlibs.</a>";

  res.send(`<p>Welcome ${name}! You're very ${compliment}.</p>${gameLink}`);
});

// TODO: Display the madlib game page.
app.get('/game', (req, res) => {
  res.sendFile('client/game.html', {root: __dirname});
});

// Handle the form above and create the madlib.
app.post('/madlib', (req, res) => {
  const color = req.body.color;
  const noun = req.body.noun;
  const person = req.body.name;
  const adjective = req.body.adjective; 

  res.send(`There once was a ${color} ${noun} sitting in the computer lab. When ${person} went
  to pick it up, it burst into flames in a totally ${adjective} way.`)
});

// Run the server.

app.listen(4000, () => console.log("Server running on 4000"));
