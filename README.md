# Form Validation

At first we need to assign an id attribute in our form element. Then in our script we need to make a function


	function formValidate(e) {
		e.preventDefault();
	}
Parameter e is an event of the form element, then we are preventing the form to submit itself with e.preventDefault() method;

Then we need to get all our form element by assigning a variable with var elms = e.target.elements. And will iterate through all our form elements with for loop.


	function formValidate(e) {
		e.preventDefault();
		var elms = e.target.elements;
		for (var i = 0; i < elms.length; i++) {
			
		}
	}
Now we need to make a logic statement that when the form element is empty we will create a div element which will have a text content "Form field can not be empty".

	function formValidate(e) {
		e.preventDefault();
		var elms = e.target.elements;
		for (var i = 0; i < elms.length; i++) {
			if (elms[i].value === "") {
				var error = document.createElement('div');
				error.textContent = "Form field can not be empty.";
			}
		}
	}
After that we will assign a class name of that error div element with error.className = "validate-error"; and we will add this element in the parent element of that empty input field.

	function formValidate(e) {
		e.preventDefault();
		var elms = e.target.elements;
		for (var i = 0; i < elms.length; i++) {
			if (elms[i].value === "") {
				var error = document.createElement('div');
				error.className = "validate-error";
				error.textContent = "Form field can not be empty.";
				elms[i].parentElement.appendChild(error);
			}
		}
	}
We are almost finished, now we will move the cursor in that corresponding empty field for the user. And we will output(return) a false Boolean value. It means that our function will stop here and will return a false value. All statement we put after the return statement will not work, I mean will not execute.

	function formValidate(e) {
		e.preventDefault();
		var elms = e.target.elements;
		for (var i = 0; i < elms.length; i++) {
			if (elms[i].value === "") {
				var error = document.createElement('div');
				error.className = "validate-error";
				error.textContent = "Form field can not be empty.";
				elms[i].parentElement.appendChild(error);
				elms[i].focus();
				return false;
			}
		}
	}
After the if statement block, we will make the form to submit itself with e.target.submit();

And we will make another if logic statement before our first logic statement that will check that parent element of that empty input element has a div element with .validate-error class. If that parent element has that child element we will remove that child element.

	function formValidate(e) {
		e.preventDefault();
		var elms = e.target.elements;
		for (var i = 0; i < elms.length; i++) {
			if (elms[i].parentElement.querySelector('.validate-error')) {
				elms[i].parentElement.removeChild(elms[i].parentElement.querySelector('.validate-error'));
			}
			if (elms[i].value === "") {
				var error = document.createElement('div');
				error.className = "validate-error";
				error.textContent = "Form field can not be empty.";
				elms[i].parentElement.appendChild(error);
				elms[i].focus();
				return false;
			}
		}
		e.target.submit();
	}
Our main form validation function has been made, now we need to call this function.

	function init() {
		var signUPForm = document.getElementById('sign-up-form');
		if (signUPForm) {
			signUPForm.addEventListener('submit', formValidate);
		}
	}
	window.addEventListener('load', init);
## Full code

	function init() {
		var signUPForm = document.getElementById('sign-up-form');
		if (signUPForm) {
			signUPForm.addEventListener('submit', formValidate);
		}
	}
	window.addEventListener('load', init);
	function formValidate(e) {
		e.preventDefault();
		var elms = e.target.elements;
		for (var i = 0; i < elms.length; i++) {
			if (elms[i].parentElement.querySelector('.validate-error')) {
				elms[i].parentElement.removeChild(elms[i].parentElement.querySelector('.validate-error'));
			}
			if (elms[i].value === "") {
				var error = document.createElement('div');
				error.className = "validate-error";
				error.textContent = "Form field can not be empty.";
				elms[i].parentElement.appendChild(error);
				elms[i].focus();
				return false;
			}
		}
		e.target.submit();
	}
