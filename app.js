// weather api

const weatherApi = {
    key : "111b2b7dcab903931f3402986604b406",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
};

// add event listener on the search button and take value from search box

document.getElementById("search-btn").addEventListener('click' , () => {
    const cityName = document.getElementById("search-box-data").value;
    getApiData(cityName);
});

document.getElementById("search-btn").addEventListener('keypress' , () => {
    const cityName = document.getElementById("search-box-data").value;
    getApiData(cityName);
});

// function for get api data from openweathermap.org

function getApiData(cityName){
    fetch(`${weatherApi.baseUrl}?q=${cityName}&appid=${weatherApi.key}&units=metric`)
    .then(response => response.json())
    .then(data => showData(data))
    return cityName;
};

// show city name , temperature in degree , weather type and image change

function showData(weather){
    document.getElementById("city-name").innerText = weather.name + " " + weather.sys.country;
    document.getElementById("temp").innerText = weather.main.temp;
    document.getElementById("weather-type").innerText = weather.weather[0].main;

    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;
    document.getElementById('icon-change').setAttribute('src' , iconUrl);
}