const apiKey = '22907ed0c20788e202c4a82fcbb1d8d4';
function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();
    cityInput.value = '';
    fetchWeatherData(city);
}

function fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.style.display = 'block';
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const weatherHTML = `
                <h2>Weather in ${city}</h2>
                <p>Description: ${weatherDescription}</p>
                <p>Temperature: ${temperature} C</p>
                <p>Humidity: ${humidity}%</p>
            `;
            weatherInfo.innerHTML = weatherHTML;
        })
        .catch(error => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.style.display = 'none';
            alert('Weather data not found for the given city.');
            console.error('Error fetching weather data:', error);
        });
}
