const day = document.querySelector("#day");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const description = document.querySelector("#description");
const icon = document.querySelector("#weather-icon");
const date = document.querySelector("#date");
const captionDesc = document.querySelector("figcaption");


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=33.78985&lon=-117.78610&units=metric&appid=8858983065863e23c3d5a33999223d4c";

async function apiFetch() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    temperature.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    description.innerHTML = `${weatherData.weather[0].description}`;
    humidity.innerHTML = `${weatherData.main.humidity}`;
    date.innerHTML = `${new Date()}`;
    day.innerHTML = `${date.toLocalDateString("en-US", {weekday: "long"})}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
    
    
}

apiFetch();