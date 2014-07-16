// Bradley Perkins
// SDI 1407
// Project 2
// 7-15-14


// Variables

var bike = "mountain bike ";
var rack = "bike rack";
var air = "air compressor";
var ready = "you\'re ready to go!"
var minPsi =  50 ;
var maxPsi =  65 ;

// prompt
start = prompt("Hello. Do you want to start getting ready for the " + bike + " trail?  yes or no");
	
	if(start === "yes"){
	console.log("Let's get started!");
	}else {
		console.log("Have a nice day!");
		}


// Procedure
var totalBikes = function(numBikes){
	if (numBikes <= 4){
		console.log("The " + numBikes + " bikes will fit on the rack together.");
	}else {
		console.log("All of the bikes will not fit on the rack at the same time.");
	}
};
totalBikes(3);


// Boolean Function with while loop.
tires = confirm("Check the air in every tire from all the bikes on the rack. There are 3 bikes total.");
if (tires === true){
	
	var bikeTires = 1;

	while(bikeTires <= 6){
		console.log("The air from " + bikeTires + " of the 6 tires is checked."); 
		bikeTires++;
	}

}
else {
	console.log("Move along then.");
};


// Number Function


























