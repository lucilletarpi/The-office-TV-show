function listOffice() {
	const divEpisodeSeason1 = document.querySelector(".listEpisodes");
	const saison = document.getElementById("saison");
	const valeur = saison.textContent;
	console.log(valeur);
	console.log(divEpisodeSeason1);
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjExZGYwYTIxMGIyYWI4MjU2YjU1YmZjNzkwNTA5OCIsInN1YiI6IjY0YzBmMzBjMmYxYmUwMDE0ZWY1YzA2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PLURScAQ52WfKCV6D51NYU8LHKMxcICd1jyWJHPova0",
		},
	};
	// season info
	fetch("https://api.themoviedb.org/3/tv/2316/season/${valeur}", options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response.episodes);
			for (let i = 0; i < response.episodes.length; i++) {
				console.log(response.episodes[i]);
				//LI creation for episode number
				const numListEpisode = document.createElement("li");
				numListEpisode.innerHTML =
					"Episode" + " " + response.episodes[i].episode_number;
				numListEpisode.className = "numbEpisode";
				//
				// h2 creation for episode title
				const titleEpisode = document.createElement("h2");
				titleEpisode.innerHTML =
					"Titre de l'épisode" + ": " + response.episodes[i].name;
				titleEpisode.className = "titleEpisode";
				//
				// p creation for episode summary
				const summaryEpisode = document.createElement("p");
				summaryEpisode.className = "summaryEpisode";
				summaryEpisode.innerHTML =
					"Résumé" + " : " + response.episodes[i].overview;
				//
				numListEpisode.appendChild(titleEpisode);
				divEpisodeSeason1.appendChild(numListEpisode);
				titleEpisode.appendChild(summaryEpisode);
			}
		})
		.catch((err) => console.error(err));
}
document.addEventListener("DOMContentLoaded", function () {
	listOffice();
});
