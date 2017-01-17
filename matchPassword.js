window.addEventListener('load', function () {
	var formElm = document.getElementById('signUpForm');
	var password = document.getElementById('password');
	var c_password = document.getElementById('c_password');
	var feedback = document.getElementById('feedback');

	if (formElm)
	{
		matchPassword(password, c_password, feedback);
	}
});

function matchPassword(pw1, pw2, feedback) {
	pw2.addEventListener('input', function (e) {
		if (pw1.value === "")
		{
			feedback.textContent = "You forgot to fill the password field.";
			return false;
		}
		if (e.target.value !== pw1.value)
		{
			feedback.textContent = "Password mismatch.";
		} else {
			feedback.textContent = "Password matches.";
		}
	});
}
