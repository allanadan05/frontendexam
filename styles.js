// Circle Hover at Section 1
function noHover() {
    document.getElementById("lighter-circle-hover").style.display = "none";
    document.getElementById("light-circle-hover").style.display = "none";
    document.getElementById("dark-circle-hover").style.display = "none";
    document.getElementById("no-circle-hover").style.display = "inline";
}

function lighter() {
    document.getElementById("lighter-circle-hover").style.display = "inline";
    document.getElementById("no-circle-hover").style.display = "none";
}

function light() {
    document.getElementById("light-circle-hover").style.display = "inline";
    document.getElementById("no-circle-hover").style.display = "none";
}

function dark() {
    document.getElementById("dark-circle-hover").style.display = "inline";
    document.getElementById("no-circle-hover").style.display = "none";
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