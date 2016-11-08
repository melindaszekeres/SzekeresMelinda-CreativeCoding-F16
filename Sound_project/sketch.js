// move in both axis, create a 3D animation, e.g. hit a wall


var mySample1;
var mySample2;
var mySample3;
var mySample4;
var shapeArray = [];
var loopMode;

function preload(){
	mySample1 = loadSound("snare.wav");
	mySample2 = loadSound("synth.wav");
	mySample3 = loadSound("ecco.wav");
	mySample4 = loadSound("loop.wav");
}

function setup() {
  createCanvas(600, 600);

  for (var i = 0; i < 10; i++) {
    shapeArray[i] = new Shape(random(0, width), random(0, height), 3, mySample1, mySample2, mySample3, mySample4);
    println(i);
  }
	loopMode = "restart";
	mySound1.playMode(loopMode);
	mySound2.playMode(loopMode);
	mySound3.playMode(loopMode);
	mySound4.playMode(loopMode);
}

function draw() {
  background(255, 0, 125);
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].animate();
    shapeArray[i].display();
    
    println(i);
  }

  shapeArray[i].audio();
}

function mouseClicked() {
  var tempShape = new Shape(mouseX, mouseY, random(1, 8), random(1, 8), mySample1, mySample2, mySample3, mySample4);
  shapeArray.push(tempShape);
}

function Shape(_x, _y, _xVel, _yVel, _1, _2, _3, _4) {

  this.x = _x;
  this.y = _y;
  this.xVel = _xVel;
  this.yVel = _yVel;
  this.sample1 = _1;
  this.sample2 = _2;
  this.sample3 = _3;
  this.sample4 = _4;

  this.animate = function() {
    this.x += this.xVel;
    if (this.x > width || this.x < 0) {
      this.xVel = -this.xVel;
      this.sample1.play();
    }
    this.y += this.yVel;
    if (this.y > height || this.y < 0) {
      this.yVel = -this.yVel;
      this.sample2.play();
    }
  }

  this.display = function() {
    rect(this.x, this.y, 30, 30);
  }

  this.audio = function(){

    if (this.x = 0){
  	 	mySample3.play();
  	}
  	if (this.y = 0){
  	 	mySample4.play();
    }

    }


};

