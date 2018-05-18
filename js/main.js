// check screen orientation for mobile devices
function IsPortrait() {
    return window.orientation === 0;
}
if (IsPortrait()) {
    alert("I suggest you use 'landscape' mode for better experience.");
}

function launchIntoFullScreen() {
    element = document.getElementsByTagName("body");
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    } else if (element.msReqeuestFullScreen) {
        element.msReqeuestFullScreen();
    }
}

function exitFullScreen() {
    if (document.exitFullScreen) {
        document.exitFullScreen();
    } else if (document.mozExitFullScreen) {
        document.mozExitFullScreen();
    } else if (document.webkitExitFullScreen) {
        document.webkitExitFullScreen();
    }
}