function mobileNav() {
    document.querySelector("nav ul").classList.toggle("hide");
	document.querySelector("#nav-filter").classList.toggle("fill");
}

function validateForm(event) {
	event.preventDefault();
	//regex
	let fNameRegex = /^(?=.+[a-zA-Z])/;
	let lNameRegex = /^(?=.+[a-zA-Z])/;
	let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
	let phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
	//inputs
	let fName = document.getElementById("fName");
	let lName = document.getElementById("lName");
	let phone = document.getElementById("myPhone");
	let email = document.getElementById("myEmail");
    let date= document.getElementById("date");
    let time= document.getElementById("time");
	//remove error
	fName.classList.remove("error");
	lName.classList.remove("error");
	phone.classList.remove("error");
	email.classList.remove("error");
    date.classList.remove("error");
    time.classList.remove("error");
	fName.nextSibling.innerHTML = "";
	lName.nextSibling.innerHTML = "";
	email.nextSibling.innerHTML = "";
	phone.nextSibling.innerHTML = "";
    date.nextSibling.innerHTML = "";
	time.nextSibling.innerHTML = "";

	//keep track of form validity
	let isValid = true;
	
	//first name verify
	if(fName.value === "" || !(fNameRegex.test(fName.value))) {
		isValid = false;
		fName.classList.remove("default");
		fName.classList.add("error");
		fName.nextElementSibling.innerHTML = "Please enter your first name.";
	}
	//last name verify
	if(lName.value === "" || !(lNameRegex.test(lName.value))) {
		isValid = false;
		lName.classList.remove("default");
		lName.classList.add("error");
		lName.nextElementSibling.innerHTML = "Please enter your last name.";
	}
    //phone verify
    if(phone.value === "" || !(phoneRegex.test(phone.value))) {
        isValid = false;
        phone.classList.remove("default");
        phone.classList.add("error");
        phone.nextElementSibling.innerHTML = "Please enter a 10-digit phone number in the following format: 000-000-0000.";
    }
    //email verify
    if(email.value === "" || !(emailRegex.test(email.value))) {
        isValid = false;
        email.classList.remove("default");
        email.classList.add("error");
        email.nextElementSibling.innerHTML = "Please enter a valid email address.";
    }
    //date verify
    if(date.value === "") {
        isValid = false;
        date.classList.remove("default");
        date.classList.add("error");
        date.nextElementSibling.innerHTML="Please select a date for your appointment";
    }
    //time verify
    if(time.value === "") {
        isValid = false;
        time.classList.remove("default");
        time.classList.add("error");
        time.nextElementSibling.innerHTML="Please select a time for your appointment";
    }

	// verify form is valid
	if(isValid) {
		// submission message
		alert("Thank you for your submission!");
		// clear values
		fName.value = "";
		lName.value = "";
		phone.value = "";
		email.value = "";
		date.value = "";
		time.value = "";
		// clear errors
		fName.nextSibling.innerHTML = "";
		lName.nextSibling.innerHTML = "";
		email.nextSibling.innerHTML = "";
		phone.nextSibling.innerHTML = "";
		date.nextSibling.innerHTML = "";
        time.nextSibling.innerHTML = "";
	}
}

// event listeners
window.onload = (event) => {
	document.getElementById("navButton").addEventListener("click", mobileNav);
	document.getElementById("mySubmit").addEventListener("click", validateForm);
};