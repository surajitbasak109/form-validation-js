window.addEventListener('load', function () {
	var formElm = document.getElementById('signUpForm');

	if (formElm)
	{
		formElm.addEventListener('submit', validateForm);
	}
	
});


function validateForm(e) {
	e.preventDefault();
	var elms = e.target.elements;

	for (i = 0; i < elms.length; i++)
	{
		var errorElm = elms[i].parentElement.querySelector('.validate-error');
		if (errorElm)
		{
			elms[i].parentElement.removeChild(errorElm);
		}
		
		if (elms[i].value === "")
		{
			var error = document.createElement("div");
			error.textContent = "This form field is empty.";
			error.className = "validate-error";
			elms[i].parentElement.appendChild(error);
			elms[i].focus();
			return false;
		}
	}
	e.target.submit();
}
