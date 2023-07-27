function listOffice() {
	// Efface l'ancienne recherche
	// selectResult.innerHTML = "";

	const apiUrl = "http://localhost:3000/api/office";

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			console.log(data); // Les informations de la série seront affichées ici
		})
		.catch((error) => {
			console.error("Erreur lors de la requête vers le serveur:", error);
		});
}
listOffice();
