const inputValue = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputValue.addEventListener("input", () => {
	spanText.style.fontSize = `${inputValue.value}px`;
});
