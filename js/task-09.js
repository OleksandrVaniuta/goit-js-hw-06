function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const spanText = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
	spanText.textContent = getRandomHexColor();
	bodyEl.style.backgroundColor = getRandomHexColor();
});
