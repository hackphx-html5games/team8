define(["./rules"], function(rules){
	return {
		init: function(context){
			this.context = context;
		},
		play: function(column){
			// attempt to take a turn
			this.context.beginPath();
			this.context.arc(75, 75, 100, 0, Math.PI*2, true); 
			this.context.closePath();
			this.context.fill();
		},
		test: function(){
			// validate a move
		}

	};
});