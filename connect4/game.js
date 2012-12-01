//load the AMD modules we need
require(['frozen/GameCore', 'frozen/ResourceManager', 'connect4/board'], function(GameCore, ResourceManager, board){

  // game state
  var x = 0;
  var y = 0;

  //setup a GameCore instance
  var game = new GameCore({
    canvasId: 'canvas',
    update: function(millis){
      // 
    },
    draw: function(context){
      board.init(context);
    }
  });

  //if you want to take a look at the game object in dev tools
  console.log(game);

  //launch the game!
  game.run();
});