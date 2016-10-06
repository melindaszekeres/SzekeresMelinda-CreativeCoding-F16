var rotAmount = 0;


function setup() {
	createCanvas(500, 500);
}

function draw() {

	// Shape 1
	push();
		translate(100, 100);

		rotAmount = map(mouseX, 0, width, 0, 2*PI);

		rotate(rotAmount);

		rect(0, 0,40, 40);

	pop();

	// Shape 2

	push();
		translate(200, 150);

		rotAmount = map(mouseX, 0, width, 0, PI);

		rotate(rotAmount);

		rect(0, 0, 30, 30);

	pop();
	
	// Shape 3

	push();
		translate(300, 75);

		rotAmount = map(mouseX, 0, width, 0, HALF_PI);

		rotate(rotAmount);

		rect(0, 0, 45, 15);

	pop();


}