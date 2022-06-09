const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const adress = document.getElementById('address');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    const addressValue = address.value.trim();

    
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	}  else if(usernameValue.length<5){
		setErrorFor(username, 'Username is too short')
	}
	else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}  else if(passwordValue.length<5){
		setErrorFor(password, 'Password is too short')
	}
	else {
		setSuccessFor(password);
	}
	
	if(addressValue === '') {
		setErrorFor(adress, 'Address cannot be blank');
	} else if(addressValue.length<5){
		setErrorFor(adress, 'Address is too short')
	}
	else{
		setSuccessFor(adress);
	}
	
	console.log(document.getElementById('agreement').checked)
	if(!document.getElementById('agreement').checked){
		alert ('You must agree with our terms and condition.')
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}