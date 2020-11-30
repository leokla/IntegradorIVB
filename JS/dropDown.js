// Função DropDown chamando demoAcc
function myAccFunc() {
    var x = document.getElementById("open_contratar");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Função DropDown chamando demoAcc2
function myAccFunc2() {
    var x = document.getElementById("open_Ofertar");
    if (x.className.indexOf("w3-show") === -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Clicando no "Contratar ou Ofertar" vai abrir os submenus
document.getElementById("myBtn").click();
document.getElementById("myBtn2").click();



// Abre e fecha os sideBar
function open_drop() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function close_drop() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}