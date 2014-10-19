#!/usr/bin/env node

var SERVER = process.env.SERVER || 'http://warmup.monkeymusicchallenge.com';
var TEAM = process.env.TEAM;
var API = process.env.API;

var monkey = require('./monkey');
var request = require('request-json');
var client = request.newClient(SERVER);

/**
 * Handles post loop to the server.
 * This should only be modified in rare cases
 * The game is solvable by only modifying the move function
 * @param  {Error} error An error response from the server
 * @param  {Object} response The full response with headers and all
 * @param  {Object} body The actual body, the interesting part of the response
 */
function handlePost(error, response, body) {
  if (error) return console.error(error);
  if (response.statusCode !== 200) return console.error(body);

  var direction = move(body);

  if (body.turns <= 0) {
    return console.log('Game over.');
  }

  // Prepare next move
  var data = {
    command: 'move',
    direction: direction,
    apiKey: API
  };
  client.post('/' + TEAM, data, handlePost);
}

/**
 * Chooses direction for next move
 * by analysing the game state sent by the server
 * @param  {Object} gameState The current game state
 * @return {String} A direction 'up', 'down', 'left' or 'right', nothing else.
 */
function move(gameState) {

  var layout = gameState.layout;
  var turns = gameState.turns;
  var pickedUp = gameState.pickedUp;
  // Note that the position comes in an array of [y,x]
  // while all other positions in this example are handled
  // as [x,y]
  var position = {
    x: gameState.position[1],
    y: gameState.position[0]
  };

  var direction = monkey.move(layout, position, pickedUp);

  // Send next move and bind state to next move
  return direction;
}

var data = {
  command: 'new game',
  apiKey: API
};

client.post('/' + TEAM, data, handlePost);
