
document.getElementById('search_btn').addEventListener('click', function(){
	var title = document.getElementById('title_text').value;
	var request = new Request('https://www.omdbapi.com/?apikey=bb99287f&s='+title);
	
    
    fetch(request).then(function(result){
		return result.json();
	})

    .then(function(data){
		console.log(data);
		var searchEl = document.getElementById('search_result');
		var len = data.Search.length;


		for(var i = 0; i < len; i++){
			var movieContainer = document.createElement('div');
			movieContainer.className = 'search-result--item';

			var titleEl = document.createElement('div');
			titleEl.innerText = data.Search[i].Title;

			var yearEl = document.createElement('div');
			yearEl.innerText = data.Search[i].Year;

			var typeEl = document.createElement('div');
			typeEl.innerText = data.Search[i].Type;

			var posterEl = document.createElement('img');
			posterEl.src = data.Search[i].Poster;

			// possible alternative?
			// var emojis = document.createElement('div');
			// emojis.innerHTML = `<label for="mood">How is your mood?</label>
			// <select id="emojis" name="emojis">
			// 	<option value="happy"> &#128512; </option>
			// 	<option value="sad"> &#128546; </option>
			// 	<option value="mindblown"> &#129327;</option>
			// 	<option value="flirty"> &#128536; </option>
			// 	<option value="scared"> &#128552; </option>
			// 	<option value="angry"> &#128545; </option>
			// </select>
			// <button class="savemood" data-title="${data.Search[i].Title}" >Save Mood for this movie</button>`
			// var weather = document.createElement("div")
			// weather.innerHTML = `
			// <button data-value="icon" ><img src=''/></button>
			// `
			movieContainer.appendChild(posterEl);
			movieContainer.appendChild(titleEl);
			movieContainer.appendChild(yearEl);
			movieContainer.appendChild(typeEl);
			// movieContainer.appendChild(emojis);
			searchEl.appendChild(movieContainer);
		}
	});
});