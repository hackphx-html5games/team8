define(["./rules", "./config", 'frozen/box2d/RectangleEntity', 'frozen/box2d/CircleEntity']
, function(rules, config, Rectangle, Circle){
	return {
		checkerId: 0,
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
			var id = this.checkerId;
			this.checkerId++; // increment for next usage
			if(this.test(column, row, color)){
				var checker = new Circle({
					id: id,
					x: this.columnPositions[column],
					y: config.startYPosition,
					radius: config.radius,
					staticBody: false,
					density: 0.5,  // al little lighter
					restitution: 0.8, // a little bouncier
					draw: function(context){  //we also want to render the yarn with an image
						this.context.save();
						this.context.translate(this.x * this.scale, this.y * this.scale);
						this.context.beginPath();
						this.context.closePath();
						this.context.fillStyle = color;
						this.context.fill();
						this.context.restore();
					}
  				});
				this.box.addBody(checker);
				this.world[id] = checker;
			}
		},

		test: function(color, row, color){
			// validate a move
			return true;
		}

	};
});