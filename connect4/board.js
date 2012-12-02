//load the AMD modules we need
define(["./config", "./move"], function(config, move){
  return {
    columns: null,
    init: function(context, box, world, scale){
      // 
      this.context = context.getContext('2d');
    },

    addColumns: function(){
      this.columns = [];
      for (var i=0; i<config.numberOfColumns; i++){
        this.columns[i] = 0;
      }
    },

    setColumn: function(columnId){
      var columnIndex = columnId.charAt( columnId.length-1 );
      if( (columnIndex < 0) || (columnIndex > (config.numberOfColumns - 1)) ){
        console.log("invalid column");
        return false;
      }
      if (this.columns[columnIndex] > (config.numberOfRows - 1)){
        console.log("column full");
        return false;
      }
      this.columns[columnIndex] = this.columns[columnIndex]+1;
      return this.columns[columnIndex];
    },

    reset: function(){
      // reset the board when the game is over
    }
  };
});