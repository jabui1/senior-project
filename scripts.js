function mobileNav() {
    document.querySelector("nav ul").classList.toggle("hide");
	document.querySelector("#nav-filter").classList.toggle("fill");
}

function img1Display() {
    document.getElementById("img1").classList.remove("hide");
	document.getElementById("img2").classList.add("hide");
	document.getElementById("img3").classList.add("hide");

	document.getElementById("btn1").classList.add("active");
	document.getElementById("btn2").classList.remove("active");
	document.getElementById("btn3").classList.remove("active");
}

function img2Display() {
    document.getElementById("img1").classList.add("hide");
	document.getElementById("img2").classList.remove("hide");
	document.getElementById("img3").classList.add("hide");

	document.getElementById("btn1").classList.remove("active");
	document.getElementById("btn2").classList.add("active");
	document.getElementById("btn3").classList.remove("active");
}

function img3Display() {
    document.getElementById("img1").classList.add("hide");
	document.getElementById("img2").classList.add("hide");
	document.getElementById("img3").classList.remove("hide");

	document.getElementById("btn1").classList.remove("active");
	document.getElementById("btn2").classList.remove("active");
	document.getElementById("btn3").classList.add("active");
}

// event listeners
window.onload = (event) => {
	document.getElementById("navButton").addEventListener("click", mobileNav);
    
    document.getElementById("btn1").addEventListener("click", img1Display);
    document.getElementById("btn2").addEventListener("click", img2Display);
    document.getElementById("btn3").addEventListener("click", img3Display);
};