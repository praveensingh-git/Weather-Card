const apiKey = process.env.API_KEY;
const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function weatherUpdate(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        console.log(data.weather[0].main);

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "png/cloudy.svg";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "png/rain.svg";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "png/snow.svg";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "png/drizzle.svg";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "png/mist.svg";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "png/sun-svgrepo-com.svg";
        } else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "png/haze.svg";
        } else if (data.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "png/thunderstorm.svg";
        }

        document.querySelector(".weather").style.display = "block";

        document.querySelector(".error").style.display = "none";
    }
}
searchbtn.addEventListener("click", () => {
    weatherUpdate(searchBox.value);
});
