const apiKey = "7b982505879dd1b0347de049f2e515b4";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
        const SearchBox = document.querySelector(".search input");
        const SearchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-iocn");

        
        async function CheckWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
console.log(data.weather);
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            } else if (data.weather[0].main == "Haze") {
                weatherIcon.src = "images/clouds.png";
            }
        }

        SearchBtn.addEventListener("click", () => {
            CheckWeather(SearchBox.value);
        });