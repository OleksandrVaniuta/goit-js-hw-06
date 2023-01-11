const formEL = document.querySelector(".login-form");
formEL.addEventListener("submit", onLoginDataSumbit);

function onLoginDataSumbit(event) {
	event.preventDefault();
	if (event.currentTarget.email.value === "" || event.currentTarget.password.value === "") {
		alert("all fields must be filled");
	}
	console.log({ email: `${event.currentTarget.email.value}`, password: `${event.currentTarget.password.value}` });
	event.currentTarget.reset();
}
