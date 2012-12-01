//load the AMD modules we need
require(['frozen/GameCore', 'frozen/ResourceManager', 'connect4/board', 'connect4/move'], function(GameCore, ResourceManager, board, move){

  // game state
  var x = 0;
  var y = 0;
  move.setPositions(7);

  //setup a GameCore instance
  var game = new GameCore({
    canvasId: 'canvas',
    //update: function(millis){
      // 
    //},
    draw: function(context){
      board.init(context);
      move.init(context);
      move.play(0, "#ff0000");
      move.play(1, "#0000ff");
    }
  });

  //if you want to take a look at the game object in dev tools
  console.log(game);

  //launch the game!
  game.run();
});