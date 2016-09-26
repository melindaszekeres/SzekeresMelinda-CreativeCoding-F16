//Game Project
//Kat & Melinda
//Sept. 15, 2016

//screens
int startPage = 0;
PFont start;

// check if game is over
int over = 0;

//score
int score = 0;

// check if game hasn't begun yet
int beginGame = 0;

//user variables
int circleSize;
float xPap;
float yPap;
int xPapVelocity;
int yPapVelocity;
int xPapDirection;
int yPapDirection;

//distractor1 variables 
int rect1;
float xDis;
float yDis;
int xDisVelocity;
int yDisVelocity;
int xDisDirection;
int yDisDirection;

//distractor2 variables 
int rect2;
float xDis2;
float yDis2;
int xDisVelocity2;
int yDisVelocity2;
int xDisDirection2;
int yDisDirection2;

//distractor3 variables 
int rect3;
float xDis3;
float yDis3;
int xDisVelocity3;
int yDisVelocity3;
int xDisDirection3;
int yDisDirection3;

//distractor4 variables 
int rect4;
float xDis4;
float yDis4;
int xDisVelocity4;
int yDisVelocity4;
int xDisDirection4;
int yDisDirection4;

//distractor5 variables 
int rect5;
float xDis5;
float yDis5;
int xDisVelocity5;
int yDisVelocity5;
int xDisDirection5;
int yDisDirection5;

//trying to make different screens - start, point, and gameover 
void startPage() {
        
  background(255,182,193);
  delay(50);

}

void pointPage() {
  
}

void gameoverPage() {

}

void setup() {
  
    size(1100,800);
    background(255,182,193);

      //font
      start = createFont("Arial",25,true); 
       
 
  //Pap properties - user's character
    xPap = width/2; //x position of Paparazzi 
    yPap = (height + 10); //y position of Paparazzi
    
    xPapVelocity = 1;
    yPapVelocity = 1;
    
    xPapDirection = 1;
    yPapDirection = 1;
    
    circleSize = 50;
    
  //Distractor1 properties 
    xDis = random(250, 750);
    yDis = random(250, 750);
    
    xDisVelocity = 3;
    yDisVelocity = 3;
    
    xDisDirection = 1;
    yDisDirection = 1;
    
  //Distractor2 properties 
    xDis2 = random(0, 1000); 
    yDis2 = random(200, 1000);
    
    xDisVelocity2 = 5;
    yDisVelocity2 = 5;
    
    xDisDirection2 = 1;
    yDisDirection2 = 1;
    
  //Distractor3 properties 
    xDis3 = random(0, 1000); 
    yDis3 = random(200, 1000);
    
    xDisVelocity3 = 7;
    yDisVelocity3 = 7;
    
    xDisDirection3 = 1;
    yDisDirection3 = 1;
    
   //Distractor4 properties 
    xDis4 = random(0, 1000); 
    yDis4= random(200, 1000);
    
    xDisVelocity4 = 6;
    yDisVelocity4 = 6;
    
    xDisDirection4 = 1;
    yDisDirection4 = 1;
    
   //Distractor5 properties 
    xDis5 = random(0, 1000); 
    yDis5 = random(200, 1000);
    
    xDisVelocity5 = 5;
    yDisVelocity5 = 5;
    
    xDisDirection5 = 1;
    yDisDirection5 = 1;
  
}



void draw() {
  if (beginGame == 0) {
    background(255,182,193);
    text("PRESS UP KEY TO CONTINUE",500,400);
  } else if (over == 0) {
    background(255,182,193); //new clean page per frame
     
     textFont(start,25);
         fill(0);
         text("ONLY ATTACK THE BLACK BOX!",10,25);
         delay(5);
    
    textFont(start,25);
         fill(0);
         text("POINTS: " + score,900,25);
         delay(5);
    
      fill(255,255,255);
      ellipseMode(RADIUS); 
      ellipse(xPap, yPap, circleSize, circleSize); //user
      
      ellipseMode(CENTER);
      fill(255,255,0);
      ellipse(xPap, yPap, circleSize, circleSize);
      
      
      fill(0,0,0);
      rect(xDis, yDis, 80, 80); //distractor1 - black
      fill(170,0,255);
      rect(xDis2, yDis2, 80, 80); //distractor2 - light purple
      fill(200,10,100);
      rect(xDis3, yDis3, 80, 80); //distractor3
      fill(0,70,200);
      rect(xDis4, yDis4, 80, 80); //distractor4
      fill(200,10,0);
      rect(xDis5, yDis5, 80, 80); //distractor5
      
    //Distractor1 
    xDis = xDis + xDisVelocity;
    yDis = yDis + yDisVelocity;
    
    if(xDis >= width || xDis <= 0) { //keep inside right and left boundaries
      xDisDirection = -xDisDirection; //now my direction is -1, moving to the left
      xDisVelocity = xDisVelocity * xDisDirection; //makes xVelocity negative   
    }
    
     if(yDis >= height || yDis <= 0) { //keep inside top and bottom boundaries
      yDisDirection = -yDisDirection; //now my direction is -1, moving down
      yDisVelocity = yDisVelocity * yDisDirection; //makes xVelocity negative
    }
  
      //Distractor2
    xDis2 = xDis2 + xDisVelocity2;
    yDis2 = yDis2 + yDisVelocity2;
    
    if(xDis2 >= width || xDis2 <= 0) { //keep inside right and left boundaries
      xDisDirection2 = -xDisDirection2; //now my direction is -1, moving to the left
      xDisVelocity2 = xDisVelocity2 * xDisDirection2; //makes xVelocity negative   
    }
    
     if(yDis2 >= height || yDis2 <= 0) { //keep inside top and bottom boundaries
      yDisDirection2 = -yDisDirection2; //now my direction is -1, moving down
      yDisVelocity2 = yDisVelocity2 * yDisDirection2; //makes xVelocity negative
    }
      
      //Distractor3
    xDis3 = xDis3 + xDisVelocity3;
    yDis3 = yDis3 + yDisVelocity3;
    
    if(xDis3 >= width || xDis3 <= 0) { //keep inside right and left boundaries
      xDisDirection3 = -xDisDirection3; //now my direction is -1, moving to the left
      xDisVelocity3 = xDisVelocity3 * xDisDirection3; //makes xVelocity negative   
    }
    
     if(yDis3 >= height || yDis3 <= 0) { //keep inside top and bottom boundaries
      yDisDirection3 = -yDisDirection3; //now my direction is -1, moving down
      yDisVelocity3 = yDisVelocity3 * yDisDirection3; //makes xVelocity negative
    }
      
      //Distractor4
    xDis4 = xDis4 + xDisVelocity4;
    yDis4 = yDis4 + yDisVelocity4;
    
    if(xDis4 >= width || xDis4 <= 0) { //keep inside right and left boundaries
      xDisDirection4 = -xDisDirection4; //now my direction is -1, moving to the left
      xDisVelocity4 = xDisVelocity4 * xDisDirection4; //makes xVelocity negative   
    }
    
     if(yDis4 >= height || yDis4 <= 0) { //keep inside top and bottom boundaries
      yDisDirection4 = -yDisDirection4; //now my direction is -1, moving down
      yDisVelocity4 = yDisVelocity4 * yDisDirection4; //makes xVelocity negative
    }
    
    //Distractor5
    xDis5 = xDis5 + xDisVelocity5;
    yDis5 = yDis5 + yDisVelocity5;
    
    if(xDis5 >= width || xDis5 <= 0) { //keep inside right and left boundaries
      xDisDirection5 = -xDisDirection5; //now my direction is -1, moving to the left
      xDisVelocity5 = xDisVelocity5 * xDisDirection5; //makes xVelocity negative   
    }
    
     if(yDis5 >= height || yDis5 <= 0) { //keep inside top and bottom boundaries
      yDisDirection5 = -yDisDirection5; //now my direction is -1, moving down
      yDisVelocity5 = yDisVelocity5 * yDisDirection5; //makes xVelocity negative
    }
  
  
    //distance and collision code
    delay(int(3.1));
    if((xPap + RADIUS) <= (xDis + 40) && (yPap + RADIUS) <= (yDis + 40) && (xPap - RADIUS) >= (xDis - 40) && (yPap - RADIUS) >= (yDis - 40)) {
     println("Success!!!!!");
     score += 1;
     delay(int(.75));
    }
    
   if((xPap + RADIUS) <= (xDis2 + 40) && (yPap + RADIUS) <= (yDis2 + 40) && (xPap - RADIUS) >= (xDis2 - 40) && (yPap - RADIUS) >= (yDis2 - 40)) {
     println("GAMEOVER"); 
     over=1;
    }
    
   if((xPap + RADIUS) <= (xDis3 + 40) && (yPap + RADIUS) <= (yDis3 + 40) && (xPap - RADIUS) >= (xDis3 - 40) && (yPap - RADIUS) >= (yDis3 - 40)) {
     println("GAMEOVER"); 
     over=1;
    }
    
   if((xPap + RADIUS) <= (xDis4 + 40) && (yPap + RADIUS) <= (yDis4 + 40) && (xPap - RADIUS) >= (xDis4 - 40) && (yPap - RADIUS) >= (yDis4 - 40)) {
     println("GAMEOVER"); 
     over = 1;
  
    }
    
   if((xPap + RADIUS) <= (xDis5 + 40) && (yPap + RADIUS) <= (yDis5 + 40) && (xPap - RADIUS) >= (xDis5 - 40) && (yPap - RADIUS) >= (yDis5 - 40)) {
     println("GAMEOVER"); 
     over = 1;
    }
  } else if (over == 1) {
     background(0);
     text("GAME OVER", 500, 400);
  }

}


  
 void keyPressed() {
  
   //arrow keys
    
    if (key == CODED) {
      if (keyCode == (UP)) {
        yPap = yPap - 15; //go UP 
        beginGame += 1;
      }
        else if (keyCode == (DOWN)) {
           yPap = yPap + 15; //go DOWN
        }
        else if (keyCode == (LEFT)) {
          xPap = xPap - 15; //go LEFT
        }
        
        else if (keyCode == (RIGHT)) {
          xPap = xPap + 15; //go RIGHT
        }
        
        else if (keyCode == (UP) && keyCode == (LEFT)) {
          yPap = yPap - 15;
          xPap = xPap - 15;
         
    }
   }
 }