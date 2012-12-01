define(["./rules"], function(rules){
	return {
		initialXPosition: 95,
		xIncrement: 98,
		columnPositions: [],
		setPositions: function(numberOfColumns){
			for (var i=0; i<numberOfColumns; i++){
				this.columnPositions[i] = this.initialXPosition + (this.xIncrement * i);
				console.log(this.columnPositions[i]);
			}
		},
		init: function(context){
			this.context = context;
			
		},
		play: function(column, color){
			// attempt to take a turn
			this.context.beginPath();
			this.context.arc(this.columnPositions[column], 136, 38, 0, Math.PI*2, true); 
			this.context.closePath();
			this.context.fillStyle = color;
			this.context.fill();
		},
		test: function(){
			// validate a move
		}

	};
});