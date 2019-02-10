const switchFullScreen = document.getElementById("switchFullScreen");
const fullScreen = document.getElementById("fullscreen");


switchFullScreen.addEventListener("click", function() {
    if (fullScreen.textContent == "Enter full screen" || fullScreen.textContent == "Siirry koko näyttöön") {
        if (document.body.requestFullScreen) {
            document.body.requestFullscreen();
        } else if (document.body.mozRequestFullScreen) {
            document.body.mozRequestFullScreen();
        } else if (document.body.webkitRequestFullScreen) {
            document.body.webkitRequestFullScreen();
        } else if (document.body.msRequestFullScreen) {
            document.body.msRequestFullScreen();
        }
        if (fullScreen.textContent == "Enter full screen")
            fullScreen.textContent = "Exit full screen";
        else if (fullScreen.textContent == "Siirry koko näyttöön")
            fullScreen.textContent = "Poistu koko näytöstä";
    } else if (fullScreen.textContent == "Exit full screen" || fullScreen.textContent == "Poistu koko näytöstä") {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        if (fullScreen.textContent == "Exit full screen")
            fullScreen.textContent = "Enter full screen";
        else if (fullScreen.textContent == "Poistu koko näytöstä")
            fullScreen.textContent = "Siirry koko näyttöön";
    }
});

function exitHandler() {
    if (document.fullscreenElement === null) {
        if (fullScreen.textContent == "Exit full screen")
            fullScreen.textContent = "Enter full screen";
        else if (fullScreen.textContent == "Poistu koko näytöstä")
            fullScreen.textContent = "Siirry koko näyttöön";
    }
}

document.addEventListener("fullscreenchange", exitHandler);
