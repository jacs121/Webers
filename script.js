
const params = new URLSearchParams(window.location.search);
const descriptionInfo = document.getElementById("description")
const image = document.getElementById("image")
const key = params.get("key");

if (key === null) {
    var hintMessage = "add '?key=' then a secret key to the end of the URL to START"
}

if (key === "start") {
    descriptionInfo.textContent = "you need to do better then that to get to level1"
    hintMessage = "no really, welcome"
}

if (key === "webers") {
    descriptionInfo.textContent = "what a musical me, though hearing it is oddly"
    image.src = "clock.png"
    hintMessage = "sorry for the shameless plug"
}

if (key === "SuddenTimes") {
    
}