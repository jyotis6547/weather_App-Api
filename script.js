const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

const apiKey = "e041666b5eff9fc9c2212bd585a08b57";

searchBtn.addEventListener('click', () => {
    const city = inputBox.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the weather data
            console.log(data);

            temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
            description.innerHTML = `${data.weather[0].description}`;
            humidity.innerHTML = `${data.main.humidity}%`;
            wind_speed.innerHTML = `${data.wind.speed}Km/H`;

            switch (data.weather[0].main) {
                case 'Clouds':
                    weather_img.src = "https://img.freepik.com/premium-psd/sunny-rainy-cloudy-day-weather-forecast-icon-illustration_47987-10695 cloud.jpg";
                    break;
                case 'Clear':
                    weather_img.src = "https://img.freepik.com/premium-psd/sunny-rainy-cloudy-day-weather-forecast-icon-illustration_47987-10695 clear.jpg";
                    break;
                case 'Rain':
                    weather_img.src = "https://img.freepik.com/premium-psd/sunny-rainy-cloudy-day-weather-forecast-icon-illustration_47987-10695 rain.jpg";
                    break;
                case 'Mist':
                    weather_img.src = "https://img.freepik.com/premium-psd/sunny-rainy-cloudy-day-weather-forecast-icon-illustration_47987-10695 mist.jpg";
                    break;
                case 'Snow':
                    weather_img.src = "https://img.freepik.com/premium-psd/sunny-rainy-cloudy-day-weather-forecast-icon-illustration_47987-10695 snow.jpg";
                    break;
            }
        })
        .catch(error => {
            // Handle errors
            console.error('Error fetching weather data:', error);
        });
});

