class GuessingGame {
	
    constructor() {

    }

    setRange(min, max) {
    	this.left = min;
    	this.right = max;
       }

    guess() {
    	this.mid = Math.ceil((this.right+this.left)/2);
    	return this.mid;
    }

    lower() {
    	this.right = this.mid;
    	return this.mid;
    }

    greater() {
    	this.left = this.mid;
    	return this.mid;
    }
}

module.exports = GuessingGame;
