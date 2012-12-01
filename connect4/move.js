define(["./rules", "./config", 'frozen/box2d/RectangleEntity', 'frozen/box2d/CircleEntity']
, function(rules, config, Rectangle, Circle){
	return {
		columnPositions: [],
		rowPositions: [],
		setPositions: function(){
			for (var i=0; i<config.numberOfColumns; i++){
				this.columnPositions[i] = config.initialXPosition + (config.xIncrement * i);
			}
			for (var i=0; i<config.numberOfRows; i++){
				this.rowPositions[i] = config.initialYPosition + (config.yIncrement * i);
			}
		},

		init: function(context, box, world, scale){
			this.context = context;
			this.box = box;
			this.world = world;
			this.scale = scale;
		},

		play: function(column, row, color){
			// attempt to take a turn
		},

		test: function(color, row, color){
			// validate a move
			return true;
		}

	};
});