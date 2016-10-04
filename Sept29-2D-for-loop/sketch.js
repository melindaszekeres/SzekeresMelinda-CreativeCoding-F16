function setup() {
	createCanvas(600, 600);
}

function draw() {

for (var i = 0; i < 10; i++) {// horizontal 
	for (var j = 0; j < 10; j++) {
	noStroke();
	fill(i*30, j*30, 200);
	rect(i*60, j*50, 30, 30);
	}
	}


}