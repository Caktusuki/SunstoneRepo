document.getElementById("getWeather").addEventListener("click", getWeather);

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.cod === "404") {
      document.getElementById("weatherInfo").innerHTML = `<p>City not found</p>`;
      return;
    }

    const weather = data.weather[0].description;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    const weatherHtml = `
      <h2>${city}</h2>
      <p>Weather: ${weather}</p>
      <p>Temperature: ${temp}°C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Wind Speed: ${windSpeed} m/s</p>
    `;

    document.getElementById("weatherInfo").innerHTML = weatherHtml;
  } catch (error) {
    document.getElementById("weatherInfo").innerHTML = `<p>Error fetching weather data</p>`;
  }
}
