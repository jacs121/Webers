
const params = new URLSearchParams(window.location.search);
const descriptionInfo = document.getElementById("description")
const image = document.getElementById("image")
const key = params.get("key");

if (key === null) { // when entering the page
    var hintMessage = "add '?key=' then a secret key to the end of the URL to START"
}

if (key === "start") { // red haring
    descriptionInfo.textContent = "you need to do better then that to get to level1"
    hintMessage = "no really, welcome"
}

if (key === "webers") { // the name of the puzzle
    descriptionInfo.textContent = "what a musical me, though hearing it is oddly"
    image.src = "images/clock.png"
    hintMessage = "sorry for the shameless plug"
}

if (key === "SuddenTimes") { // a song I made in a album named oddly
    descriptionInfo.textContent = "what a musical me, though hearing it is oddly"
    image.src = "clock.png"
    hintMessage = "sorry for the shameless plug"
}