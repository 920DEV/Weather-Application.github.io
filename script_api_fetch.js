const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ccda286950msh7e32e2e882e284cp1bfa62jsn849dc874e237',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Himachal Pradesh', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));