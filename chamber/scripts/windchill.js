const jsonWeather = "https://api.openweathermap.org/data/2.5/weather?lat=-33.5947&lon=-71.6075&units=metric&appid=8858983065863e23c3d5a33999223d4c";

fetch(jsonWeather)
    .then(response => response.json())
    .then(data => {
        const calculateT = data.main.temp;
        const calculateS = data.wind.speed;

        const windChill = calculateWindChill(calculateT, calculateS);

        const windChillText = windChill !== null ? windChill.toFixed(1) : "N/A"
        const windChillElement = document.getElementById("windChill");
        windChillElement.textContent = windChillText;
    })

    .catch(error => {
        console.log("Error fetching JSON:", error);
    });

function calculateWindChill(calculateT, calculateS) {
    if (calculateT <= 50 && calculateS >= 3) {
        const windChillIndex = 35.74 + (0.6215 * calculateT) - (35.75 * Math.pow(calculateS, 0.16)) + (0.4275 * calculateT *Math.pow(calculateS, 0.16));
        return windChillIndex;
    } else {
        return null;
    }
}

// var temperature = 68;
// var windSpeed = 3.1;
// var windChill = (35.74 + (0.6215 + temperature))-(35.75 * Math.pow(windSpeed,0.16));

// var windChill = Math.round(windChill);
// document.getElementById("windChill").innerHTML = windChill;