const inputText = document.querySelector("#name-input");
const titleSpan = document.querySelector("#name-output");

inputText.addEventListener("input", event => {
	if (event.currentTarget.value === "") {
		titleSpan.textContent = "Anonymous";
	} else {
		titleSpan.textContent = event.currentTarget.value;
	}
});
