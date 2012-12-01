//load the AMD modules we need
require(['frozen/GameCore', 'frozen/ResourceManager', 'frozen/box2d/Box', 'frozen/box2d/RectangleEntity', 'connect4/board', 'connect4/move', 'connect4/config']
, function(GameCore, ResourceManager, Box, Rectangle, board, move, config){

  // game state
  var x = 0;
  var y = 0;
  move.setPositions(7, 6);
  var world = {};
  var box = new Box({intervalRate:60, adaptive:false, width:config.width, height:config.height, scale:30.0, gravityY:9.8});
  var groundId = 'ground';
  var ground = new Rectangle({
    id: groundId,
    x: 800,
    y: 800,
    staticBody: true
  });
  box.addBody(ground); //add the shape to the box
  world[groundId] = ground; //keep a reference to the shape for fast lookup

  //setup a GameCore instance
  var game = new GameCore({
    canvasId: 'canvas',
    update: function(millis){
      box.update(); 
      var bodiesState = box.getState();
      for (var id in bodiesState) {
        var entity = world[id];
        if (entity && !entity.staticBody){
          entity.update(bodiesState[id]);
        }
      }
    },
    draw: function(context){
      board.init(context, box, world, 30.0);
      move.init(context, box, world, 30.0);
      move.play(0, 0, "#ff0000");
      move.play(1, 0, "#0000ff");
      move.play(2, 1, "#ff0000");
      move.play(3, 2, "#0000ff");
      move.play(4, 3, "#ff0000");
      move.play(5, 4, "#0000ff");
      move.play(6, 5, "#ff0000");
    }
  });


  //if you want to take a look at the game object in dev tools
  console.log(game);

  //launch the game!
  game.run();
});