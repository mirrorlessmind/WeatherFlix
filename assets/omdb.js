
$(document).ready(function(){
    var containerMovieSearch = $ ('#containerMovieSearch')
    var searchForm = $('#searchForm');
    var container = $('#movieContainer');
    var apiKey = '4b93bd1f';
    var baseUrl = 'http://www.omdbapi.com/?';
    searchForm.submit(function(event){
        event.preventDefault();
        console.log(event);
        // $(this) = This form that just submitted
        var formValues = $(this).seralizeArray();
        var movie = formValues[0].values;
        // How to create element with jQUERY Selector
        //var searchTermDiv = $('<div class = "past-search-term">');
        //searchTermDiv.text(movie);
        //containerMovieSearch.append(searchTermDiv);
        //console.log(formValues, movie);
        // Real Value Gotten from form
        //searchForMovie(movie);
    });

    function searchForMovie(movie) {
        var fullUrl = baseUrl + "q=" + movie + "&appid=" + apiKey;
        console.log (movie);
        fetch (fullUrl).then(function (response){
            return response.json ();
        })
        .then (function (data){
            console.log (data);
        });
    }
})

