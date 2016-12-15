//define variables
var stats = [];
var j;
var names = [];
var mp3Links = [];
var photoLinks = [];
var pops = [];

var iksz = [];
var ipszi = [];

var objects = [];


var mySound;
var bobDylan = ["https://api.spotify.com/v1/albums/4MTOvlFGtVby5EuSotjvVS"
,
"https://api.spotify.com/v1/albums/2mVpSZrllFAWhOgCoyz8ow"
,
"https://api.spotify.com/v1/albums/1B6OGpVCRi83QnMK7y8uBh"
,
"https://api.spotify.com/v1/albums/3ZjvMngMKqMOhXoqUFyVoF"
,
"https://api.spotify.com/v1/albums/3uIkl8RFCDyYAJKF5X46XK"
,
"https://api.spotify.com/v1/albums/3LnS0XKSzd2TFoagESGUw3"
,
"https://api.spotify.com/v1/albums/6Ylr6c6snKHzMBaZHXHEWm"
,
"https://api.spotify.com/v1/albums/5mVEtOa0CmXH5nCivFoa4x"
,
"https://api.spotify.com/v1/albums/304a9IyZHyhs14vYKSyzuy"
,
"https://api.spotify.com/v1/albums/6y2WHyqRUCeHrjMXvjnRmD"
,
"https://api.spotify.com/v1/albums/0IN65w1790nVXZxpuoh3gU"
,
"https://api.spotify.com/v1/albums/7tYQ0K4JZZm88WXF1pleZU"
,
"https://api.spotify.com/v1/albums/4BcfuxQ4EO07Y53yr6YhAJ"
,
"https://api.spotify.com/v1/albums/185DHT5SvszXRrezx3lOjt"
,
"https://api.spotify.com/v1/albums/0zTd4xTpA9ytGuH3Gnfnn4"
,
"https://api.spotify.com/v1/albums/6lfZX6OFJRxRcODaxwSRL5"
,
"https://api.spotify.com/v1/albums/4OIFBxR56S44aXiovovyK7"
,
"https://api.spotify.com/v1/albums/0ELQw29ii1k2eHnAYgt5kw"
,
"https://api.spotify.com/v1/albums/5aRiLRWxWoAT6rTUXbGUuI"
,
"https://api.spotify.com/v1/albums/2H8oXIOkww0RuVckCa6Scw"];


function preload(){
for (i = 0; i < 20; i++){
	j = loadJSON(bobDylan[i])
	stats.push(j);
}

//mySound = loadSound('https://p.scdn.co/mp3-preview/f0eec1a1dbd31bf51cf323d2981535ec4fc5a568?cid=null');
}

function setup(){
	createCanvas(1400,1000);
	for (i = 0; i < 1200; i +=240){
		for (j = 0; j < 600; j +=150){
				iksz.push([i,j]);
	}
	}
	console.log(iksz);



for (i = 0; i < 20; i++){
	names.push(stats[i].name);
}
console.log(names);
for (i = 0; i < 20; i++){
	mp3Links.push(stats[i].tracks.items[0].preview_url);
}
console.log(mp3Links);
for (i = 0; i < 20; i++){
	photoLinks.push(stats[i].images[0].url);
}
console.log(photoLinks);
for (i = 0; i < 20; i++){
	pops.push(stats[i].popularity);
}


for (i = 0; i < 20; i ++){
	objects.push(new Circle(names[i],pops[i],photoLinks[i], mp3Links[i],iksz[i][0],iksz[i][1]));
	}
}
console.log(objects);

function draw(){
	for (i = 0; i < 20; i ++){
objects[i].drawCircles();
if (mouseX > i.xPos && mouseX < i.xPos + i.pop && mouseY > i.yPos && mouseY < i.yPos + i.pop){
objects[i].playmusic();
}
}
	for (i = 0; i < 20; i ++){
			if (mouseX > i.xPos && mouseX < i.xPos + i.pop && mouseY > i.yPos && mouseY < i.yPos + i.pop){
objects[i].playmusic();
}
}


image(loadImage(photoLinks[0], 0, 0));


function mousePressed() {
  if ( mySound.isPlaying() ) {
    mySound.stop();
  } else {
    mySound.play();
  }
}


}

function Circle(n,p,i,t, x,y){
	this.name =n;
	this.pop = p;
	this.img=i;
	this.track =t;
	 this.xPos = x+110;
	this.yPos = y+50;
	this.red = random(0,255);
	this.green = random(0,255);
	this.blue = random(0,255);
	this.sound = loadSound(this.track);

this.drawCircles = function(){
	console.log(this.name);
	fill(this.red,this.green,this.blue);
		ellipse(this.xPos, this.yPos,this.pop,this.pop);
		fill(0);
		textSize(12);
		textAlign(CENTER);
	text(this.name, this.xPos+10, this.yPos+ 60);

}

this.playmusic = function(){
	if (mouseX > this.xPos && mouseX < this.xPos + this.pop && mouseY > this.yPos && mouseY < this.yPos + this.pop){
	play(this.sound);
}

}

// kep a play music funcioba



}