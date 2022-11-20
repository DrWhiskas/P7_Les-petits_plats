	// Penser à remplacer par les données récupérées dans le json
	 fetch('./data/recipes.json')
		.then((res) => res.json()) // convertisseur json => js
		.then((data) => {
            data.recipes.forEach((recipe) => {
				console.log(data);
				
			});
        }); 


