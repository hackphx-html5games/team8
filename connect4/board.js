//load the AMD modules we need
define(["./config", 'frozen/ResourceManager'], function(config, ResourceManager){
  return {
    columns: null,
    init: function(context, box, world, scale){
      // draw canvas or use background image
      var resourceManager = new ResourceManager();
      var backgroundImage = resourceManager.loadImage('connect4/images/board.png');
      context.drawImage(backgroundImage, 0, 70, 790, 560);
      this.box = box;
      this.context = context;
      this.world = world;
      this.scale = scale;
    },

    addColumns: function(){
      this.columns = [];
      for (var i=0; i<config.numberOfColumns; i++){
        this.columns[i] = 0;
      }
    },

    setColumn: function(columnIndex){
      if( (columnIndex < 0) || (columnIndex > (config.numberOfColumns - 1)) ){
        console.log("invalid column");
        return false;
      }
      if (this.columns[columnIndex] > (config.numberOfRows - 1)){
        console.log("column full");
        return false;
      }
      this.columns[columnIndex] = this.columns[columnIndex]++;
      return true;
    },

    reset: function(){
      // reset the board when the game is over
    }
  };
});