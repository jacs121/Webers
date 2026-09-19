const params = new URLSearchParams(window.location.search);
const descriptionInfo = document.getElementById("description");
const key = params.get("key");
const image = document.getElementById("image");
var hintMessage

if (key === null) { // when entering the page
    hintMessage = "add '?key=' then a secret key to the end of the URL to START"
    image.title = "webers"
    image.src = "./images/icon.png"
} else {
    let progress = Number(localStorage.getItem("progress") ?? 0);

    const levels = {
        webers: { // actual start key
            index: 1,
            description: "what a musical me, though hearing it is oddly",
            image: "./images/clock.png",
            title: "clock",
            hint: "sorry for the shameless plug"
        },
        
        SuddenTimes: { // a song I have in my youtube music with a clock as the image
            index: 2,
            description: "why does 7 hate 5?",
            image: "./images/light_bulb.png",
            title: "light_bulb",
            hint: "we are all sicks of these jokes I know"
        },
        
        light6bulb: { // the name of the image with the underscore replaced with the number from the joke
            index: 3,
            description: "nice try",
            image: "",
            title: "",
            hint: "worded reverse"
        },
        nice: {
            index: 4,
            description: "",
            image: "",
            title: "",
            hint: ""
        }
    };

    const redHerrings = {
        start: {
            description: "you need to do better than that to get to level 1",
            image: "./images/icon.png",
            title: "webers",
            hint: "no really, welcome"
        },
    };
    
    if (redHerrings[key]) {
        const page = redHerrings[key];
    
        descriptionInfo.textContent = page.description;
        image.src = page.image;
        image.title = page.title;
        hintMessage = page.hint;
    }
    
    
    else if (levels[key]) {
        const page = levels[key];
    
        if (page.index > progress + 1) {
            descriptionInfo.textContent = "nice try :)";
            hintMessage = "if you didn't realize it, you cant do that"
    
            image.src = "./images/icon.png";
            image.title = "webers";
        }
        else {
            descriptionInfo.textContent = page.description;
            image.src = page.image;
            image.title = page.title;
            hintMessage = page.hint;

            if (page.index === progress + 1) {
                progress = page.index;
                localStorage.setItem("progress", progress);
            }
        }
    } else {
        descriptionInfo.textContent = "wrong answer.";
        hintMessage = "go back and try again"
        
        image.src = "./images/icon.png";
        image.title = "webers";
    }
}