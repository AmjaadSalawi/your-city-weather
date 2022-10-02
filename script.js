const input = document.querySelector("#input");
const city = document.querySelector("#city");
const cityName = document.querySelector("#cityName");
const temp = document.querySelector("#temp");
const main = document.querySelector("#main");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const image = document.querySelector("#image");

input.onsubmit = (e) => {
e.preventDefault();
weatherUpdate(city.value);
city.value = "";
};

weatherUpdate = (city) => {
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70f51a71c21ee5ca6fcc5004cfcfb35d`, true);
xhr.send();
xhr.onload = () => {
    
    if (xhr.status === 404) {
    alert("Place not found");
    } else {
    const data = JSON.parse(xhr.response);

    cityName.innerHTML = "Weather in " + data.name;
    temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
    
    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    description.innerHTML = data.weather[0].description;
    
    humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
    wind.innerHTML = "Wind speed: " + data.wind.speed + " km/h";
    }

};
};

weatherUpdate();