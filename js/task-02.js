const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ingredientsList = document.querySelector("#ingredients");
const ingredientEl = ingredients.map(ingredient => {
	const item = document.createElement("li");
	item.textContent = ingredient;
	item.classList.add("item");

	return item;
});
console.log(ingredientEl);
ingredientsList.append(...ingredientEl);
