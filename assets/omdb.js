document.getElementById("genre").addEventListener("change", function (event) {
	event.preventDefault();
	// this keywword = <select>
	var title = $(this).val();
	console.log(title);
	var apiKey = '44f8669609bc7b2064fe2508a8114ac5'; 
	var url = 
	  `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=`;
	var genreList = [
	  {
		id: 28,
		name: "Action",
	  },
	  {
		id: 12,
		name: "Adventure",
	  },
	  {
		id: 16,
		name: "Animation",
	  },
	  {
		id: 35,
		name: "Comedy",
	  },
	  {
		id: 80,
		name: "Crime",
	  },
	  {
		id: 99,
		name: "Documentary",
	  },
	  {
		id: 18,
		name: "Drama",
	  },
	  {
		id: 10751,
		name: "Family",
	  },
	  {
		id: 14,
		name: "Fantasy",
	  },
	  {
		id: 36,
		name: "History",
	  },
	  {
		id: 27,
		name: "Horror",
	  },
	  {
		id: 10402,
		name: "Music",
	  },
	  {
		id: 9648,
		name: "Mystery",
	  },
	  {
		id: 10749,
		name: "Romance",
	  },
	  {
		id: 878,
		name: "Science Fiction",
	  },
	  {
		id: 10770,
		name: "TV Movie",
	  },
	  {
		id: 53,
		name: "Thriller",
	  },
	  {
		id: 10752,
		name: "War",
	  },
	  {
		id: 37,
		name: "Western",
	  },
	];
	var selectedGenre = genreList.filter((genre) => {
	  return genre.name === title;
	});
	console.log(selectedGenre);
	if (selectedGenre.length > 0) {
	  url = url += selectedGenre[0].id;
	  fetch(url)
		.then(function (result) {
		  return result.json();
		})
  
		.then(function (data) {
		  var searchEl = document.getElementById("search_result");
		  searchEl.innerHTML = "" ;
		  console.log(data);
		  var len = data.results.length;
		  for (var i = 0; i < len; i++) {
			var currentMovie = data.results[i];
		  // adult: false
		  // backdrop_path: "/9NlswPRK5Kap6KVr59Feah9EBLP.jpg"
		  // genre_ids: (3) [36, 28, 12]
		  // id: 631939
		  // original_language: "en"
		  // original_title: "Legionnaire's Trail"
		  // overview: "Noreno, a half-Roman, is entrusted with the mission of crossing the snowy mountains of Armenia, swarming with Parthian patrols, to seek help for his slowly dying men."
		  // popularity: 345.522
		  // poster_path: "/6ssoBXQOxNhrsGJoM6Tcvm57V79.jpg"
		  // release_date: "2020-05-08"
		  // title: "Legionnaire's Trail"
		  // video: false
		  // vote_average: 6.6
		  // vote_count: 59
			var movieContainer = document.createElement("div");
			movieContainer.className = "search-result--item";
  
			var titleEl = document.createElement("div");
			titleEl.innerText = currentMovie.original_title;
  
			// Moment JS .format()
			var yearEl = document.createElement("div");
			yearEl.innerText = currentMovie.release_date;
  
			var typeEl = document.createElement("div");
			typeEl.innerText = selectedGenre[0].name;
  
			var posterEl = document.createElement("img");
			posterEl.src = `https://image.tmdb.org/t/p/original${currentMovie.backdrop_path}`;
  
			movieContainer.appendChild(posterEl);
			movieContainer.appendChild(titleEl);
			movieContainer.appendChild(yearEl);
			movieContainer.appendChild(typeEl);
			searchEl.appendChild(movieContainer);
		  }
		});
	}
  });