class GuessingGame {
	
    constructor(number) {
    	this.n = number;
    	//console.log("constructor() this.n - " + this.n);  

    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    	this.rnd = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    	//console.log("setRange(min, max) " + "max - " + this.max + "  min - " + this.min + " random - " + this.rnd);
       }

    guess() {   	
    	if(this.rnd > this.n){
    		this.max = this.rnd;
    		this.rnd = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    		//console.log("guess() " + "max - " + this.max + "  min - " + this.min + " random - " + this.rnd);
    		return this.max;
    	}else if(this.rnd < this.n){
    		this.min = this.rnd;
    		this.rnd = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    		//console.log("guess() " + "max - " + this.max + "  min - " + this.min + " random - " + this.rnd);
    		return this.min;
    	}else if(this.rnd == this.n){
    		this.max = this.rnd;
    		this.min = this.rnd;
    		//console.log("guess() " + "max - " + this.max + "  min - " + this.min + " random - " + this.rnd);
    		return this.rnd;    		
    	}
    	
    }

    lower() {
    	if((this.rnd==this.max)&&(this.max!=this.n)){
    		this.max=this.max-1;
    		//console.log("lower() " + "max - " + this.max + "  min - " + this.min + " random - " + this.rnd);
    		return this.max;
    	}else if((this.rnd < this.max)&&(this.rnd > this.n)){
    		this.max = this.rnd;
    		this.rnd = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    		//console.log("lower() " + "max - " + this.max + "  min - " + this.min + " random - " + this.rnd);
    		return this.max;
    	}else if(this.rnd < this.n){
    		this.min = this.rnd;
    		return this.min;
    	}
    }

    greater() {
    	if((this.rnd==this.min)&&(this.min!=this.n)){
    		this.min=this.min+1;
    		//console.log("greater() " + "max - " + this.max + "  min - " + this.min + " random - " + this.rnd);
    		return this.min;
    	}else if((this.rnd > this.min)&&(this.rnd < this.n)){
    		this.min = this.rnd;
    		this.rnd = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    		//console.log("greater() " + "max - " + this.max + "  min - " + this.min + " random - " + this.rnd);
    		return this.min;
    	}else if(this.rnd > this.n){
    		this.max = this.rnd;
    		return this.max;
    	}

    }
}

module.exports = GuessingGame;
