
const params = new URLSearchParams(window.location.search);
const descriptionInfo = document.getElementById("description")
const image = document.getElementById("image")
const key = params.get("key");

if (key === "start") {
    descriptionInfo.textContent = "you need to do better then that to get to level1"
}

if (key === "webers") {
    descriptionInfo.textContent = "to get your way you must move the stone"
    image.src = "stone.png"
}