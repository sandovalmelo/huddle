const form = document.getElementById("form");
const email = document.getElementById("email");
const validationMessage = document.querySelector(".validation-message");

function validateEmail(email) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true;
	}

	return false;
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const isEmailValid = validateEmail(email.value);

	if (!isEmailValid) {
		validationMessage.innerText = "Check your email please";

		setTimeout(() => {
			validationMessage.innerText = "";
		}, 2000);
	}
});
