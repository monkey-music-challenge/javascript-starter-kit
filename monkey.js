/**
 * Chooses direction for next move
 * by analysing the game state sent by the server
 * @param  {Object} gameState The current game state
 * @return {String} A direction 'up', 'down', 'left' or 'right', nothing else.
 */
function move(gameState) {

  var direction = '';
  var d = Math.floor(Math.random() * 3);
  switch (d) {
    case 0:
      direction = 'up';
      break;
    case 1:
      direction = 'down';
      break;
    case 2:
      direction = 'left';
      break;
    case 3:
      direction = 'right';
      break;
  }

  return direction;
}

exports.move = move;