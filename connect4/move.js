define(["./rules", "./config", 'frozen/box2d/Box', 'frozen/box2d/RectangleEntity', 'frozen/box2d/CircleEntity']
, function(rules, config, Box, Rectangle, Circle){
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

		init: function(context){
			this.context = context;
		},

		play: function(column, row, color){
			// attempt to take a turn
			var id = this.checkerId;
			this.checkerId++; // increment for next usage
			if(this.test(column, row, color)){
				this.context.beginPath();
				this.context.arc(this.columnPositions[column], config.startYPosition, 38, 0, Math.PI*2, true); 
				this.context.closePath();
				this.context.fillStyle = color;
				this.context.fill();
/*

				var checker = new Circle({
					id: id,
					x: this.columnPositions[column],
					y: config.startYPosition,
					radius: config.radius,
					staticBody: false,
					density: 0.5,  // al little lighter
					restitution: 0.8, // a little bouncier
					draw: function(context, scale){  //we also want to render the yarn with an image
						ctx.save();
						ctx.translate(this.x * scale, this.y * scale);
						ctx.fillStyle = this.color;
						ctx.drawImage("", (this.x-this.radius) * scale, (this.y-this.radius) * scale);
						ctx.restore();
					}
  				});
				box.addBody(yarn);
				world[geomId] = yarn;
				});
*/				
			}
		},

		test: function(color, row, color){
			// validate a move
			return true;
		}

	};
});