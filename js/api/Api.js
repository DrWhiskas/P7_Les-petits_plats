	// Penser à remplacer par les données récupérées dans le json
	export const toto = fetch('./data/recipes.json')
		.then((res) => res.json()) // convertisseur json => js
		.then((data) => {
       
        const non = document.getElementById('recipes');
        data.recipes.forEach((recipe) => {
             const oui = document.createElement('section');
            console.log(recipe);
            oui.innerHTML = `
                ${recipe}
            `;
           non.appendChild(oui)
        }


        
        );
        
            
        }); 


