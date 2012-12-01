//load the AMD modules we need
define(['frozen/ResourceManager'], function(ResourceManager){
  return {
    columns: null,
    numberOfColumns: 7,// perhaps make this parameterizable?
    numberOfRows: 6, // perhaps make this parameterizable?
    init: function(context){
      // draw canvas or use background image
      var resourceManager = new ResourceManager();
      var backgroundImage = resourceManager.loadImage('connect4/images/board.png');
      context.drawImage(backgroundImage, 0, 70, 790, 560);
    },

    addColumns: function(){
      this.columns = [];
      for (var i=0; i<this.numberOfColumns; i++){
        this.columns[i] = 0;
      }
    },

    setColumn: function(columnIndex){
      if( (columnIndex < 0) || (columnIndex > (this.numberOfColumns - 1)) ){
        console.log("invalid column");
        return false;
      }
      if (this.columns[columnIndex] > (this.numberOfRows - 1)){
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