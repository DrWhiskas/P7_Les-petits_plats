import { getData } from "../api/Api";

export const toto = () => {
	getData().then((data) => {
		/* do what you want to do in promise resolve callback function */
        data.forEach((recipe) => {
            console.log(recipe);
        })
	});
};
toto()



/*
export function recipesCard (recipes) {
    const recipesSelection = document.getElementById('recipes');
    recipes.forEach((recipe) => {
        const oui = document.createElement('div')
        oui.innerHTML=`
        <div>oui</di>
        `
    });

}*/