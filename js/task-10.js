function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEL = document.querySelector("input");

const allBtn = document.querySelectorAll("button");
const buttons = {
	createBtn: allBtn[0],
	destroyBtn: allBtn[1],
};
const { createBtn, destroyBtn } = buttons;
const parrentBoxEl = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
	createBoxes(inputEL.value);
});

function createBoxes(amount) {
	const divArr = [];
	const divSizes = [];
	divSizes[0] = 30;
	for (let i = 0; i < amount; i += 1) {
		divArr[i] = document.createElement("div");
		divArr[i].style.backgroundColor = getRandomHexColor();
		divSizes[i + 1] = divSizes[i] + 10;
		divArr[i].style.width = `${divSizes[i]}px`;
		divArr[i].style.height = `${divSizes[i]}px`;
	}
	parrentBoxEl.append(...divArr);
}
destroyBtn.addEventListener("click", () => {
	parrentBoxEl.innerHTML = "";
});
