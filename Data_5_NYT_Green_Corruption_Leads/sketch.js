var url;
var globalData;
var urlBase;
var apiKey;
var query;

var myTerms = ["corrupt", "fraud", "self-dealing", "bribe", "misconduct", "crooked", "dishonest", "profiteering", "extortion", "double-dealing"];
var index = 0;

function setup(){
	createCanvas(600, 600);

	urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	apiKey = "84cb43cf32194333a1f0620944c24abd";
	query = myTerms[index];

	url = urlBase + "?api-key=" + apiKey + "&q=" + query;
	
	setInterval(loadNewData, 2000);
}

function draw(){
	if (globalData){
		text(globalData.response.docs[index].lead_paragraph, 0, index * 100, 500, 500);
		//text(globalData.response.docs[index].lead_paragraph, 0, index * 100, 500, 500);
	}
	for (var j = 0; j < 10; j++) {
		noStroke();
		fill(index*50, j*120, 190);
	}
}
//callback function
function gotData(myData){
	globalData = myData;
	console.log(globalData.response.docs[index].headline);
}
// repeating interval function
function loadNewData(){
	loadJSON(url, gotData);
	if (index >= 3){
		index = 0;
	}
	else{
		index++
	}
	println(index);
}
	


