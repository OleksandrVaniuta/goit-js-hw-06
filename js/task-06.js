const inputValue = document.querySelector("#validation-input");

inputValue.addEventListener("blur", () => {
	inputValue.classList.add("invalid");
	if (inputValue.value.length == inputValue.dataset.length) {
		inputValue.classList.replace("invalid", "valid");
	}
});
