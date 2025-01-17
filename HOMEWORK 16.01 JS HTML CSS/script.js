const inputButton = document.getElementById("Search");

inputButton.addEventListener("click", () => {
  const inputSearch = document.getElementById("inputSearch").value;
  const apiKey = "fb2cff02b71168e9f0c68fd3f83d168a";

  const weatherContainer = document.getElementById("weatherContainer");
  weatherContainer.innerHTML = "";

  async function AsyncF() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&appid=${apiKey}&units=metric&lang=kk`
      );
      const data = await response.json()
      weatherContainer.innerHTML = `
                <h2>City: ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                `;
    } catch (error) {
          weatherContainer.innerHTML =
              ("<h3>Unfortunately there was an error...</h3>", error)
    }
  }
  AsyncF()
});