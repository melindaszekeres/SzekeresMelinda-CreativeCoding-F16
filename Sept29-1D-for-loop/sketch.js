var d = 300;
var offset = 10;

function setup(){

  createCanvas(500,600);
  background(255, 204, 0);


}

function draw(){

for (var i = 0; i < 10; i++){

fill(255-(i*15),105,180);
noStroke();

  println("test");
  ellipse(i*50+30, height/2, 30, 30);




}
  
}