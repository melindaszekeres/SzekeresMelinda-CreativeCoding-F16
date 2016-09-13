
void setup(){
  size(600, 600);
  background(0);
  noStroke();
}

void draw(){
  
  background(240,128,128 );
  fill(0,10);
  //rect(0,0,width, height);
  
fill(255);
 ellipse(random(width), random(height), 25, 25); 
  
// blob hair  
fill(139,69,19);
ellipse(300, 320, 300, 500);
  

//face
  smooth();
  fill(234,192,134);
  stroke(0);
  beginShape();
  vertex(200, 300); // first point
  bezierVertex(100, 100, 500, 100, 400, 300);
  vertex(300, 400);
   endShape(CLOSE);
  
//mouth shape
  // translate(mouseX, mouseY);
  fill(220,20,60);
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(250, 300);
  vertex(275, 250);
  vertex(300, 270);
  vertex(325, 250);
  vertex(350, 300);
  vertex(300, 350);
  endShape(CLOSE);

//mouth line
line(250, 300, 350, 300);

// eyes
fill(255);
arc(250, 225, 20, 20, 0, PI, CHORD);
arc(350, 225, 20, 20, 0, PI, CHORD);

// inner 

arc(350, 230, 6, 6, 0, 2*PI, CHORD);
arc(250, 230, 6, 6, 0, 2*PI, CHORD);

// 
arc(351, 230, 2, 2, 0, 2*PI, CHORD);
arc(251, 230, 2, 2, 0, 2*PI, CHORD);

//eyebrows
  fill(100,69,19);
  stroke(0);
  strokeWeight(2);
   int y = 210;
  int x = 300;
  beginShape();
  //outer tip
  vertex(x + 78, y + 5);
  //apex
  vertex(x + 53, y - 10);
  //start
  vertex(x + 30, y - 5);
  vertex(x + 30, y + 2);
  vertex(x + 53, y - 3);
  endShape(CLOSE);
  
  beginShape();
  //outer tip
  vertex(x - 78, y + 5);
  //apex
  vertex(x - 53, y - 10);
  //start
  vertex(x - 30, y - 5);
  vertex(x - 30, y + 2);
  vertex(x - 53, y - 3);
  endShape(CLOSE);

}
  
  