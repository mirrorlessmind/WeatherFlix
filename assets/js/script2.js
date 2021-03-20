console.log("Hello World!");

$(document).ready(function(){
    var currentWeather = $("#current-weather");
    //from hw
    var apiKey = "6291995da3ff0287da0ec9ee69a1e3a7";
    var baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
    //for weather icon
    var iconBaseUrl = "http://openweathermap.org/img/w/" 
    var citySearch = $("#city-search");
    citySearch.submit(function(event) {
        event.preventDefault();
        // this = the form that just submitted!
        var formValues = $(this).serializeArray();
        var city = formValues[0].value;
        console.log(city);
        searchForCityWeather(city);
    });
    function searchForCityWeather(city) {
        var fullUrl = baseUrl + "q=" + city + "&appid=" + apiKey;
        console.log(fullUrl);
        fetch(fullUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                var weather = data.weather;
                var iconUrl = iconBaseUrl + weather[0].icon + ".png";
                console.log(weather);
                var weatherDiv = $('<img class="icon-name">');
                weatherDiv.attr("src" , iconUrl);
                currentWeather.append(weatherDiv);
                console.log(iconUrl);
            });
    }
})