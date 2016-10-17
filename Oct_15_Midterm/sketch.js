/*Sexual Assault searches over time, a p5.js project
  Creative Coding Mid-term Assigmnet - Melinda Szekeres
  Bibliography: Getting Started with P5.js: Making Interactive Graphics in JavaScript and Processing*/


var stats;
var sexualAssault = [];
var sAs = [];
var mx = 29; // mouseX

function preload() {
	stats = loadTable("assets/sexual_assault.csv");
	titleFont = loadFont("assets/titleFont.ttf");
	labelFont = loadFont("assets/labelFont.ttf");	
}

function setup() {
	createCanvas(480, 150);
	var rowCount = stats.getRowCount();
	sexualAssault = [];
	for (var i = 0; i < rowCount; i++) {
		sexualAssault[i] = stats.getNum(i, 1);	
	}
}

function draw() {
  cursor(HAND);
	//noCursor();
	background(255, 255, 255);
	noStroke();
	fill(0,0,0);
	textFont(titleFont);
	textAlign(CENTER);
	text("Google Searches for sexual assault (over the last year)", width/2, 130);

	// Draw lines based on search frequency
	noFill();
	stroke(0);
	beginShape();
	for (var i = 0; i < sexualAssault.length; i++){
		var x = map(i, 0, sexualAssault.length-1, 20, 460);
		var y = map(sexualAssault[i], 0, 60, 120, 50);
		sAs.push(new drawEllipse(x,y));
	
	//	if (mouseX>x-20, mouseX<x+20){
	//	sAs[i].display();
	//	}
			vertex(x, y);
		}
		for (var i = 0; i < sexualAssault.length; i++){
		var x = map(i, 0, sexualAssault.length-1, 20, 460);
		var y = map(sexualAssault[i], 0, 60, 120, 50);
		sAs.push(new drawEllipse(x,y));
	
		if (mouseX>x-5 && mouseX<x+5){
		sAs[i].display();
		}
		}

	endShape();

		label();

}	
	
function drawEllipse(eX, eY){
this.elX = eX;
this.elY = eY;
 
this.display = function(){
  noFill;
  fill(255,10,20);
  ellipse(this.elX,this.elY,10,10);
  noFill();
}
}

function label(){
  noStroke();
	if(mouseX >300 && mouseX < 310) {
	  noCursor();
	  textFont(labelFont);
	  fill(255,105,180);
	  	 	  fill(255,10,10);
	 // ellipse(304, 54, 10,10);
	  text("Stanford rape case", mouseX-20,mouseY,30);

	} else if(mouseX >455 && mouseX < 465) {
	  noCursor();
	  textFont(labelFont);
	 // fill(199,21,133);
	 	  	 noFill;
	  	 	  fill(255,10,10);
	 // ellipse(460, 7, 10,10);
	  text("Trump sexual assault", mouseX-20, mouseY, 30);
	}
}
