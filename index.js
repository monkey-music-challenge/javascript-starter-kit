// Hi! Welcome to the Monkey Music Challenge JavaScript starter kit!

// You control your monkey by sending POST requests to the Monkey Music server
var serverUrl = process.env.SERVER_URL || 'http://warmup.monkeymusicchallenge.com';

// You identify yourselves by your team name and your API key
var teamName = process.argv[2];
var apiKey = process.argv[3];
if (!teamName || !apiKey) {
  console.log('Usage: node index.js <your-team-name> <your-api-key>');
  process.exit(1);
}

// All our API keys are 28 characters long, make sure you copy-paste it properly
if (!apiKey.length === 28) {
  console.log('Invalid API key. Please make sure you copy-pasted the entire key.');
  process.exit(1);
}

// In this starter kit, we use the request-json library to send POST requests
var request = require('request-json');
var client = request.newClient(serverUrl);

// You POST to a team-specific URL:
// warmup.monkeymusicchallenge.com/<your-team-name>
// Surf to this URL and watch your monkey carry out your commands!
var teamUrl = '/' + teamName;

// We've put the AI-code in a separate module
var ai = require('./ai');

// Every time we POST a command to the server, we get a reply back
function handleReplyFromServer(error, response, responseBody) {
  if (error) return console.error(error);
  if (response.statusCode !== 200) return console.error(responseBody);

  // The server replies with the current state of the game
  var currentGameState = responseBody;

  // The state tells you if you have any turns left
  if (currentGameState.turns <= 0) {
    // If the game is over, our server will tell you how you did
    // You can also see how you did on
    // warmup.monkeymusicchallenge.com/<your-team-name>
    console.log('Game over! Here\'s what happened:');
    console.log(currentGameState.hint);
    return;
  }

  // You then use your AI to decide in which direction to move...
  var nextMoveDirection = ai.move(currentGameState);

  // ...and send a new move command to the server
  var nextMoveCommand = {
    command: 'move',
    direction: nextMoveDirection,
    apiKey: apiKey
  };

  // After sending your new move, you'll get a new reply,
  // and this function will run again
  client.post(teamUrl, nextMoveCommand, handleReplyFromServer);
}

// Allright, time to get started!

// To start a game, we send a 'new game' command to the server
var newGameCommand = {
  command: 'new game',
  apiKey: apiKey
};

// Here we go!
client.post(teamUrl, newGameCommand, handleReplyFromServer);

// If you have any questions, don't hesitate to drop us an email at
// monkeymusicchallenge@gmail.com
