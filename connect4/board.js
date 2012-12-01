//load the AMD modules we need
define(['frozen/ResourceManager', ], function(ResourceManager){
  return {
    init: function(context){
      // draw canvas or use background image
        var resourceManager = new ResourceManager();
        var backgroundImage = resourceManager.loadImage('connect4/images/board.png');
        context.drawImage(backgroundImage, 0, 70, 790, 560);
    },

    reset: function(){
      // reset the board when the game is over
    }
  };
});