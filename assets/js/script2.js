$(document).ready(function () {
    var currentWeather = $("#current-weather");
    //from hw
    var genre1 = ['Action', 'Adeventure', 'Crime', 'Documentary', 'Horor', 'Mystery', 'Thriller', 'War'];
    var genre2 = ['Animated', 'Comedy', 'Family', 'History', 'Musicals', 'Romance', 'Sci-Fi', 'Western'];
    var emotions = ['happy', 'sad', 'mindblown', 'flirty', 'scared', 'angry'];
    var selectedGenre;
    var apiKey = "6291995da3ff0287da0ec9ee69a1e3a7";
    var baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
    var baseUrl2 = 'https://www.omdbapi.com/?apikey=bb99287f&s=';
    var apiKey2 = 'bb99287f'
    //for weather icon
    var iconBaseUrl = "http://openweathermap.org/img/w/";
    var citySearch = $("#city-search");
    citySearch.submit(function (event) {
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
                console.log($('#emojis').val());
                var weather = data.weather;
                switch (weather[0].icon) {
                    case 'rainy':
                    case 'sunny':
                    case 'cloudy':
                    case 'snow':
                    case 'fog':
                    case 'tornados':
                        selectedGenre = genre1;
                        console.log(genre1);
                        // var genreSelect = $('#genre1');
                        // for (var i = 0; i < genre1.length; i++) {
                        //     var option = $('<option>');
                        //     option.text(genre1[i]);
                        //     option.val(genre1[i]);
                        //     genreSelect.append(option);
                        // }
                        break;

                    default:
                        selectedGenre = genre2;
                        console.log(genre2);

                        break;
                }
                console.log(selectedGenre);
                var filteredArray;
                switch ($('#emojis').val().trim()) {
                    case 'happy':
                        var happyArray = ['Action', 'Animated'];
                        filteredArray = selectedGenre.filter(genre => {
                            if (happyArray.includes(genre)) {
                                return genre;
                            }
                        })
                        console.log(filteredArray);
                        break;
                    case 'sad':
                        var sadArray = ['Action', 'Animated'];
                        filteredArray = selectedGenre.filter(genre => {
                            if (sadArray.includes(genre)) {
                                return genre;
                            }
                        })
                        console.log(filteredArray);
                        break;
                    case 'happy':
                        var happyArray = ['Action', 'Animated'];
                        filteredArray = selectedGenre.filter(genre => {
                            if (happyArray.includes(genre)) {
                                return genre;
                            }
                        })
                        console.log(filteredArray);
                            break;

                    default:
                        break;
                }
                var genreSelect = $('#genre');
                for (var i = 0; i < filteredArray.length; i++) {
                    var option = $('<option>');
                    option.text(filteredArray[i]);
                    option.val (filteredArray[i]);
                    genreSelect.append(option);
                }



                var iconUrl = iconBaseUrl + weather[0].icon + ".png";
                console.log(weather);
                var weatherDiv = $('<img class="icon-name">');
                weatherDiv.attr("src", iconUrl);
                currentWeather.append(weatherDiv);
                console.log(iconUrl);
            });
    }
});


document.getElementById('search_btn').addEventListener('onClick', function () {
    var title = document.getElementById('title_text').value;
    var request = new Request('https://www.omdbapi.com/?apikey=bb99287f&s=' + title);


    fetch(request).then(function (result) {
        return result.json();
    })

        .then(function (data) {
            var searchEl = document.getElementById('search_result');
            var len = data.Search.length;


            for (var i = 0; i < len; i++) {
                var movieContainer = document.createElement('div');
                movieContainer.className = 'search-result--item';

                var titleEl = document.createElement('div');
                titleEl.innerText = data.Search[i].Title;

                var yearEl = document.createElement('div');
                yearEl.innerText = data.Search[i].Year;

                var genreEl = document.createElement('div');
                genreEl.innerText = data.Search[i].Genre;

                var typeEl = document.createElement('div');
                typeEl.innerText = data.Search[i].Type;

                var posterEl = document.createElement('img');
                posterEl.src = data.Search[i].Poster;


                movieContainer.appendChild(posterEl);
                movieContainer.appendChild(titleEl);
                movieContainer.appendChild(yearEl);
                movieContainer.appendChild(typeEl);
                movieContainer.appendChild(genreEl)
                searchEl.appendChild(movieContainer);
            }
        });
});
