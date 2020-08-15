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

// function for get api data from openweathermap.org

