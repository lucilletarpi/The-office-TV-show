function listOffice() {
	const nav = document.getElementById("nav");
	console.log(nav);
	const divEpisodeSeason1 = document.getElementById("listDivEpisodesDisplay");
	const divPresentation = document.querySelector(".introduction");
	const saison = document.querySelectorAll(".dropdown-item");
	const titleSaison = document.querySelector(".titleSaison");

	saison.forEach((saisons) => {
		saisons.addEventListener("click", () => {
			console.log(saisons.textContent);
			const valeur = saisons.textContent;

			const options = {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjExZGYwYTIxMGIyYWI4MjU2YjU1YmZjNzkwNTA5OCIsInN1YiI6IjY0YzBmMzBjMmYxYmUwMDE0ZWY1YzA2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PLURScAQ52WfKCV6D51NYU8LHKMxcICd1jyWJHPova0",
				},
			};
			// season info
			fetch(`https://api.themoviedb.org/3/tv/2316/season/${valeur}`, options)
				.then((response) => response.json())
				.then((response) => {
					console.log(response);

					divEpisodeSeason1.innerHTML = " ";
					divEpisodeSeason1.id = "listEpisodes";
					divPresentation.className = "display";
					titleSaison.innerHTML = "Season: " + " " + valeur;

					for (let i = 0; i < response.episodes.length; i++) {
						console.log(divEpisodeSeason1);
						//LI creation for episode number
						const numListEpisode = document.createElement("li");
						numListEpisode.innerHTML =
							"Episode" + " " + response.episodes[i].episode_number;
						numListEpisode.className = "numbEpisode";
						numListEpisode.id = response.episodes[i].episode_number;
						//
						// h2 creation for episode title
						const titleEpisode = document.createElement("h2");
						titleEpisode.innerHTML =
							"Episode Title" + ": " + response.episodes[i].name;
						titleEpisode.className = "titleEpisode";
						//
						// p creation for episode summary
						const summaryEpisode = document.createElement("p");
						summaryEpisode.className = "summaryEpisode";
						summaryEpisode.innerHTML =
							"Summary" + " : " + response.episodes[i].overview;
						//
						divEpisodeSeason1.appendChild(numListEpisode);
						numListEpisode.appendChild(titleEpisode);
						numListEpisode.appendChild(summaryEpisode);
					}
				})
				.catch((err) => console.error(err));
		});
	});
}
document.addEventListener("DOMContentLoaded", function () {
	listOffice();
});
