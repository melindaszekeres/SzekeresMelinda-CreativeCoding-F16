var rotAmount = 0;


function setup() {
	createCanvas(500, 500);
}

function draw() {

 for (i = 1; i<=3; i++){
	push();
		translate(i*100, 100);

		rotAmount = map(mouseX, 0, width, 0, i*(2*PI));

		rotate(rotAmount);

		rect(0, 0,40, 40);

	pop();
	}
}