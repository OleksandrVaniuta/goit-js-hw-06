const ref = {
	decrementBtn: document.querySelector('[data-action="decrement"]'),
	incrementBtn: document.querySelector('[data-action="increment"]'),
	spanText: document.querySelector("#value"),
};

ref.incrementBtn.addEventListener("click", onIncrementClick);
ref.decrementBtn.addEventListener("click", onDecrementClick);
let value = 0;

function onIncrementClick(event) {
	value += 1;
	ref.spanText.textContent = `${value}`;
}

function onDecrementClick(event) {
	value -= 1;
	ref.spanText.textContent = `${value}`;
}
