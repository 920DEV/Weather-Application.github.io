// http://api.weatherapi.com/v1/current.json?key=f9b1eccd8bb34a02baf173439230401&q=New delhi&aqi=no


let location_name=document.querySelector(".city");
let timel=document.querySelector(".date-time-info");
let temp=document.querySelector(".temperature");
let humid=document.querySelector(".humidity");
let cond=document.querySelector(".condition");

const t_zone=document.querySelector(".timezone");
const search_area=document.querySelector(".find_location");
const form =document.querySelector('form');

	
let weather_location="New Delhi";

const fetch_weather_api= async(weather_location)=>{
	let url=`https://api.weatherapi.com/v1/current.json?key=f9b1eccd8bb34a02baf173439230401&q=${weather_location}&aqi=no`

	const fetch_api =await fetch(url);

	const data = await fetch_api.json();
	console.log(data);
	let c_ountry=data.location.country;
	let State_name= data.location.region;
	let local_time =data.location.localtime;
	let time_zone= data.location.tz_id;
	let cond_ition=data.current.condition.text;
	let hum=data.current.humidity;
	let temper= data.current.temp_c;
	locationDetails(c_ountry,State_name,local_time,time_zone,cond_ition,hum,temper)
};
fetch_weather_api(weather_location);

// function for search value;
function searchlocation(e){
	e.preventDefault();

	weather_location = search_area.value;
	fetch_weather_api(weather_location);
	 
}
// function calling for submitting the given locaiton

form.addEventListener("submit",searchlocation);

// function for populating the data of given location

function locationDetails(c_ountry,State_name,local_time,time_zone,cond_ition,hum,temper){
	location_name.innerHTML=weather_location;
	cond.innerHTML=cond_ition;
	temp.innerHTML=temper;
	humid.innerHTML=hum;
	timel.innerHTML=local_time;
	t_zone.innerHTML=time_zone;
}