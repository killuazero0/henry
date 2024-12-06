document.removeEventListener("fullscreenchange", fullScreenChangeHandler);
document.removeEventListener("webkitfullscreenchange", fullScreenChangeHandler);
document.removeEventListener("mozfullscreenchange", fullScreenChangeHandler);
document.removeEventListener("MSFullscreenChange", fullScreenChangeHandler);

checkNavigationOutAndShowCountDownModal = function () {
    console.log("Navigation out check disabled.");
};

autoBlockOnSplitScreen = false;

autoBlockOnDevToolsOpen = false;

showTestBlockedModal = function () {
    console.log("Blocked modal disabled.");
};

saveAndUploadIBPImage = function () {
    console.log("Proctoring image upload disabled.");
};

startCountUpTimer = function () {
    console.log("Countdown timer disabled.");
};

saveUserActionsInTest = function () {
    console.log("User actions logging disabled.");
};

openFullscreen = function () {
    console.log("Fullscreen opening disabled.");
};

closeFullscreen = function () {
    console.log("Fullscreen closing disabled.");
};

clearTimeout(disableNavigationOutTimeout);
clearInterval(disableNavigationOutCheck);

window.removeEventListener("blur", function() { console.log("Blur event ignored."); });
window.removeEventListener("mouseout", function() { console.log("Mouseout event ignored."); });

const originalAddEventListener = EventTarget.prototype.addEventListener;

EventTarget.prototype.addEventListener = function (type, listener, options) {
    if (["blur", "mouseout"].includes(type)) {
        console.log(`Blocked event listener for ${type}`);
        return;
    }
    return originalAddEventListener.call(this, type, listener, options);
};
