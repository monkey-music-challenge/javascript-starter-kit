// This is where you put your AI code!
//
// The AI looks at the current game state and decides the monkey's next move.
function move(gameState) {

  // Go to http://github.com/monkey-music-challenge/core
  // for more info about the rules of Monkey Music Challenge!

  return {
    command: "move",
    direction: randomDirection()
  };
}

function randomDirection() {
  return ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 3)];
}

exports.move = move;
