
function CI() {
    var popup = document.getElementById("CI");
    popup.style.display = "block";
}

function closePopupCI() {
    var popup = document.getElementById("CI");
    popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("CI");
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            closePopupCI();
        }
    });
});


function mobile() {
    var popup = document.getElementById("mobile");
    popup.style.display = "block";
}

function closePopupMobile() {
    var popup = document.getElementById("mobile");
    popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("mobile");
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            closePopupMobile();
        }
    });
});
function administration() {
    var popup = document.getElementById("administration");
    popup.style.display = "block";
}

function closePopupadministration() {
    var popup = document.getElementById("administration");
    popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("administration");
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            closePopupadministration();
        }
    });
});
function java() {
    var popup = document.getElementById("java");
    popup.style.display = "block";
}

function closePopupjava() {
    var popup = document.getElementById("java");
    popup.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("java");
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            closePopupjava();
        }
    });
});
function vr() {
    var popup = document.getElementById("vr");
    popup.style.display = "block";
}

function closePopupvr() {
    var popup = document.getElementById("vr");
    popup.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("vr");
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            closePopupvr();
        }
    });
});
function python() {
    var popup = document.getElementById("python");
    popup.style.display = "block";
}

function closePopuppython() {
    var popup = document.getElementById("python");
    popup.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("python");
    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            closePopuppython();
        }
    });
});