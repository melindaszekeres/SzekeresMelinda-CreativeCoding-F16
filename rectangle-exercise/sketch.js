function setup(){
 createCanvas(600,500);
  vt=height/3; //define the var (vertical third)
  hh= width/2; // horizontal half
}

//central line
function draw(){
  
  background(255);
  //line(hh, 0, 300, height);

  if(mouseX <hh && mouseY <vt){
    println("yes");
    fill(200,0,0);
    rect(mouseX, mouseY, 50, 50);
  }

else if(mouseX <hh && mouseY >vt){
    println("yes");
    fill(0,200,0);
    rect(mouseX, mouseY, 50, 50);
  }
    
else if(mouseX >hh && mouseX!=500){
    println("yes");
    fill(0,0,300);
    rect(mouseX, mouseY, 50, 50);
  }
else{
  background(0,0,0);
}
}