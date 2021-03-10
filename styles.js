// Circle Hover at Section 1
function noHover() {
    document.getElementById("lighter-circle-hover").style.display = "none";
    document.getElementById("light-circle-hover").style.display = "none";
    document.getElementById("dark-circle-hover").style.display = "none";
    document.getElementById("no-circle-hover").style.display = "inline";
}

function lighter() {
    document.getElementById("lighter-circle-hover").style.display = "inline";
    document.getElementById("light-circle-hover").style.display = "none";
    document.getElementById("dark-circle-hover").style.display = "none";
    document.getElementById("no-circle-hover").style.display = "none";
}

function lighter2() {
    document.getElementById("lighter-circle-hover").style.display = "inline";
    document.getElementById("light-circle-hover").style.display = "none";
    document.getElementById("dark-circle-hover").style.display = "none";
    document.getElementById("no-circle-hover").style.display = "none";
    document.getElementById("noL").innerHTML = "Lighter Circle on Click";
}

function light() {
    document.getElementById("lighter-circle-hover").style.display = "none";
    document.getElementById("light-circle-hover").style.display = "inline";
    document.getElementById("dark-circle-hover").style.display = "none";
    document.getElementById("no-circle-hover").style.display = "none";
}

function light2() {
    document.getElementById("lighter-circle-hover").style.display = "none";
    document.getElementById("light-circle-hover").style.display = "inline";
    document.getElementById("dark-circle-hover").style.display = "none";
    document.getElementById("no-circle-hover").style.display = "none";
    document.getElementById("noI").innerHTML = "Light Circle on Click";
}

function dark() {
    document.getElementById("lighter-circle-hover").style.display = "none";
    document.getElementById("light-circle-hover").style.display = "none";
    document.getElementById("dark-circle-hover").style.display = "inline";
    document.getElementById("no-circle-hover").style.display = "none";
}

function dark2() {
    document.getElementById("lighter-circle-hover").style.display = "none";
    document.getElementById("light-circle-hover").style.display = "none";
    document.getElementById("dark-circle-hover").style.display = "inline";
    document.getElementById("no-circle-hover").style.display = "none";
    document.getElementById("noD").innerHTML = "Dark Circle on Click";
}

// Accordion at Section 2

function toggleAccordion(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//Overlay
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

/* hamburger nav */

function myFunction() {
    var hamburger = document.getElementById("hamburger");
    var mobilenav = document.getElementById("mobilenav");
    var closebtn = document.getElementById("close");

    hamburger.classList.toggle('active');
    mobilenav.style.display = "inline";
    closebtn.style.display = "inline";

}

function exit() {
    var mobilenav = document.getElementById("mobilenav");
    mobilenav.style.display = "none";
    var closebtn = document.getElementById("close");
    closebtn.style.display = "none";

}