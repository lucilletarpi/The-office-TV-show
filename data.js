function listOffice() {
	const divEpisodeSeason1 = document.querySelector(".listEpisodes"); // Utilisez l'id correct ici

	console.log(divEpisodeSeason1);
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjExZGYwYTIxMGIyYWI4MjU2YjU1YmZjNzkwNTA5OCIsInN1YiI6IjY0YzBmMzBjMmYxYmUwMDE0ZWY1YzA2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PLURScAQ52WfKCV6D51NYU8LHKMxcICd1jyWJHPova0",
		},
	};

	fetch("https://api.themoviedb.org/3/tv/2316/season/1", options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response.episodes);
			for (let i = 0; i < response.episodes.length; i++) {
				// Assurez-vous de commencer par l'index 0
				console.log(response.episodes[i]);
				const numListEpisode = document.createElement("li");
				numListEpisode.innerHTML =
					"Episode" + " " + response.episodes[i].episode_number;
				numListEpisode.className = "numbEpisode";
				const titleEpisode = document.createElement("h2");
				titleEpisode.innerHTML =
					"Titre de l'épisode" + ": " + response.episodes[i].name;
				titleEpisode.className = "titleEpisode";
				const summaryEpisode = document.createElement("p");
				summaryEpisode.innerHTML = "Résumé";
				numListEpisode.appendChild(titleEpisode);

				divEpisodeSeason1.appendChild(numListEpisode);
			}
		})
		.catch((err) => console.error(err));
}
document.addEventListener("DOMContentLoaded", function () {
	listOffice();
});
