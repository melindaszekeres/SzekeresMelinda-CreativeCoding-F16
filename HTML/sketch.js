var url;
var globalData;
var urlBase;
var apiKey;
var query;
var input;


function setup(){
	createCanvas(600, 600);

	urlBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	apiKey = "84cb43cf32194333a1f0620944c24abd";
	//query = myTerms[index];
//#query = input;

	//create a Paragraph element
	myPar = createP("Follow the Leads");
	myPar.position(30,30);

	//create an Input element
	input = createInput("Favorite corrupt polititian?");
	console.log(input);
	input.position(400,150);
	inputButton = createButton("Submit");
	inputButton.position(530, 150);
	inputButton.mousePressed(input);
	setInterval(loadNewData, 2000);


url = urlBase + "?api-key=" + apiKey + "&q=" + input;


}

//function draw(){

function printLead(){
	if(globalData){
		text(globalData.response.docs[index].lead_paragraph, 0, 100, 500, 500);
		text(globalData.response.docs[index].lead_paragraph, 0, index * 100, 500, 500);
	}
	for (var j = 0; j < 10; j++) {
		noStroke();
		fill(50, j*120, 190);
	}
}
//callback function
function gotData(myData){
	globalData = myData;

}

// repeating interval function
function loadNewData(){
	loadJSON(url, gotData);
}

function readValue(){
	query = input.value();
	loadNewData();
}


