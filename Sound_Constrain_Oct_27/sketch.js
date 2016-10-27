///alexis and melinda
var mySound;
var loopMode;
var minX = 100;
var maxX = 400;
var constrainedEllipseX = 0;
var mappedEllipseX = 0;

function preload(){
	//credit to Gabby for sound idea.
	mySound = loadSound("assets/Doorbell.wav");
}

function setup(){
	createCanvas(500, 400);
	//mySound.play();
	loopMode = "restart";
	mySound.playMode(loopMode);

	//mySound.loop(true);
	// mySound.play();
}

function draw(){
	background(240);

	line(minX, 0, minX, height);
	line(maxX, 0, maxX, height);
	
	//constrain(value, min, max)
	constrainedEllipseX = constrain(mouseX, minX, maxX);

	// map(value, inputMin, inputMax, inputMinm outputMin, outputMax)
	mappedEllipseX = map(mouseX, 0, width, minX, maxX);

	fill(255, 0, 0);
	ellipse(constrainedEllipseX, height/3, 20, 20);

	fill(0,255,0);
	ellipse(mappedEllipseX, height*2/3, 20, 20);
}

/*function mouseClicked(){

// if(mySound.isPlaying()){
// 	mySound.pause();
// }
// else{
	mySound.play();
 // }*/

}

function mouseDragged() > maxX {

// if(mySound.isPlaying()){
// 	mySound.pause();
// }
// else{
	mySound.play();
}
 // }




function keyReleased(){
	changeMode();
	//mySound.play();

}

//cutom function 

function changeMode(){

	if(loopMode == "restart"){
		loopMode = "sustain";
		println("changed");
	}

	else{
	loopMode="restart"; 
    }

    mySound.playMode(loopMode);
}