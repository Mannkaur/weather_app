

let APPID ="04356fd5b604bdc8f2c7851705dddeec";
let temp;
let humid;
let loc;
let status;

var cities=[]; 


function updateByCity(){
	var url = "http://samples.openweathermap.org/data/2.5/weather?" + "city" + city + "&APPID=" + APPID;

	sendRequest(url);
}



function sendRequest(url){
	var xml = new XMLHttpRequest();
	xml.http.onreadyStatechange = function(){
	let	weather 
   	status.innerHTML= weather.main;

    temp.innerHTML= weather.main.temp

    humidity.innerHTML=weather.main.humidity

	}
}