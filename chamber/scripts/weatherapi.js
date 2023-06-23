const currentTemp = document.querySelector(".box3two");
const weatherIcon = document.querySelector(".emoji");
const captionDesc = document.querySelector(".weathercondition");
const currentDegree = document.querySelector(".windspeed");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-33.5947&lon=-71.6075&units=metric&appid=8858983065863e23c3d5a33999223d4c";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    currentDegree.innerHTML = `${weatherData.wind.speed.toFixed(1)}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;
}

apiFetch();