const newArray = []

function recipesDisplay(recipesArray) {
	const recipesSelection = document.getElementById('recipes')
	recipesArray.forEach((recipe) => {
		const recipesCard = document.createElement('article')
		recipesCard.classList.add('recipes__card')
		/* HEADER */
		const recipesHeader = document.createElement('header')
		recipesHeader.classList.add('recipes__card__header');
		//recipesCard.appendChild(recipesHeader)
	});
}
recipesDisplay(recipes);

