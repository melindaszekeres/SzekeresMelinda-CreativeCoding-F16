// move in both axis, create a 3D animation, e.g. hit a wall


var shapeArray = [];

function setup() {
	createCanvas(600, 600);

	for (var i = 0; i < 10; i++){
		shapeArray[i] = new Shape(random(0, width), random(0, height), 3);
	}	
}

function draw() {

	background(255, 0, 125);

	for(var i = 0; i < shapeArray.length; i++){
		shapeArray[i].animate();
		shapeArray[i].display();
	}
}

function mouseClicked(){
	var tempShape = new Shape(mouseX, mouseY, random(1, 8), random(1, 8));
	shapeArray.push(tempShape);
}

function Shape(_x, _y, _xVel, _yVel){

	this.x = _x;
	this.y = _y;
	this.xVel = _xVel;
	this.yVel = _yVel;

	this.animate = function(){
		this.x += this.xVel;
		if(this.x > width || this.x < 0){
			this.xVel = -this.xVel;
		}
		this.y += this.yVel;
		if(this.y > height || this.y <0){
		  this.yVel = -this.yVel;
		}
		}
		//animate shape
	}

	this.display = function(){
		//draw shape
		ellipse(this.x, this.y, 30, 30);
	}
};


