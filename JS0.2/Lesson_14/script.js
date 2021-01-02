// task 1 --------------------
// https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE
// &
// appid=439d4b804bc8187953eb36d2a8c26a02

fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7b38c58d43ef6dc8faefee791c824eef')
	.then(function (resp) {
		return resp.json()
	})
	.then(function (data) {
		console.log(data);
		document.querySelector('.city').textContent = data.name;
		document.querySelector('.temp').innerHTML = Math.round((data.main.temp - 273)) + '&deg;';
		document.querySelector('.type_weather').innerHTML = data.weather[0]['description'];
		document.querySelector('.speed').innerHTML = data.wind.speed;
	})
	.catch(function () {
		// catch any errors
	});