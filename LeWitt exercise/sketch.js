var d = 1000;
var offset = 20;

function setup()
{

  createCanvas(600,754);

}

function draw() // can copy below into setup
{
stroke(0);
ellipse(width/2, height/2, d, d);

//strokeWeight(10);

for (var i = 0; i < 50; i++)
{
  println("test");
  ellipse(width/2, height/2, d-(i*offset), d-(i*offset));
}

line(0, 16, 600, 16);
stroke(220,20,60);

for (var i = 0; i < 45; i++)
{
  line(0,16+i*offset, 600, 16+i*offset);
}

line(20, 0, 20, 754);

for (var i = 0; i < 45; i++)
{
  line(20+i*offset, 0, 20+i*offset, 754);
}


// bottom right
noFill();
for(var i = 0; i < 49; i++){
arc(width, height, i*offset, i*offset, PI, PI+HALF_PI);
stroke(255,255,0);
}

stroke(255,255,0);
// bottom left
for(var i = 0; i < 49; i++){
arc(0, height, i*offset, i*offset, PI+HALF_PI, 0);
}

// top right
for(var i = 0; i < 60; i++){
arc(width,0, i*offset, i*offset, HALF_PI, PI);
}

// top left
for(var i = 0; i < 60; i++){
arc(0,0, i*offset, i*offset, 0, HALF_PI);
}


// midpoint right
stroke(0,0,255);

for(var i = 0; i < 49; i++){
arc(width, height/2, i*offset, i*offset, HALF_PI, PI+HALF_PI);
}

// midpoint left
for(var i = 0; i < 49; i++){
arc(0, height/2, i*offset, i*offset, PI+HALF_PI, HALF_PI);
}

}



