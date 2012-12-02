//load the AMD modules we need
require(['frozen/GameCore', 'frozen/ResourceManager', 'frozen/box2d/Box', 'frozen/box2d/RectangleEntity', 'frozen/box2d/CircleEntity', 'connect4/board', 'connect4/move', 'connect4/config']
, function(GameCore, ResourceManager, Box, Rectangle, Circle, board, move, config){

  // game state
  var x = 0;
  var y = 0;
  move.setPositions();
  var world = {};
  var scale = 30.0;
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
  var numberOfCheckers = config.numberOfColumns * config.numberOfRows;  
  this.checkerIds = [];
  var colors = ["#0000ff","#ff0000"];
  for (var i=0; i<numberOfCheckers; i++){
    var checkerId = "checker" + i;
    this.checkerIds.push(checkerId);
    console.log(move.columnPositions[0], config.startYPosition, config.radius);
    createChecker(colors[i%2], checkerId, i);
  }

  var resourceManager = new ResourceManager();
  var backgroundImage = resourceManager.loadImage('connect4/images/board.png');

  board.init(document.getElementById("canvas"), box, world, 30.0);
  move.init(document.getElementById("canvas"), box, world, 30.0);
  /*move.play(0, 0, "#ff0000");
  move.play(1, 0, "#0000ff");
  move.play(2, 1, "#ff0000");
  move.play(3, 2, "#0000ff");
  move.play(4, 3, "#ff0000");
  move.play(5, 4, "#0000ff");
  move.play(6, 5, "#ff0000");*/


  //setup a GameCore instance
  var game = new GameCore({
    canvasId: 'canvas',
    update: function(millis){
     /* box.update(); 
      var bodiesState = box.getState();
      for (var id in bodiesState) {
        var entity = world[id];
        if (entity && !entity.staticBody){
          entity.update(bodiesState[id]);
        }
      }*/
    },
    draw: function(context){
      context.drawImage(backgroundImage, 0, 70, 790, 560);
      for (var x in world){
        world[x].draw(context, 30.0);
      }
    }
  });

  function createChecker(color, checkerId, i){
    var checker = new Circle({
      id: checkerId,
      x: move.columnPositions[i % config.numberOfColumns] / 30.0,
      y: (config.initialYPosition + (config.yIncrement * parseInt(i % config.numberOfRows)) ) / 30.0,
      radius: config.radius / 30.0,
      staticBody: false,
      density: 0.5,  // a little lighter
      restitution: 0.8, // a little bouncier
      draw: function(ctx, scale){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x * scale, this.y * scale, this.radius * scale, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = 'none';
        ctx.beginPath();
        ctx.arc(this.x * scale, this.y * scale, this.radius * scale, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.stroke();
        //this.inherited(arguments);
      }
    });
    box.addBody(checker);
    world[checkerId] = checker;

  }

  //if you want to take a look at the game object in dev tools
  console.log(game);

  //launch the game!
  game.run();
});