//light / dark mode changer

const varToString = varObj => Object.keys(varObj)[0];
const button = document.querySelector("#theme");
const moon = document.querySelector("#dark");
const sun = document.querySelector("#light");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
window.localStorage.setItem("theme", "light");

var light = new Map();
light.set("--text", "#040301");
light.set("--bg", "#FFFDFB");
light.set("--primary", "#F49434");
light.set("--secondary", "#8DCFCF");

var dark = new Map();

dark.set("--text", "#FEFDFB");
dark.set("--bg", "#212225");
dark.set("--primary", "#CB6B0B");
dark.set("--secondary", "#347A7A");

function buttonClick() {
    console.log("hi")
    if (window.localStorage.getItem("theme") == "light") {
        for (let [key, value] of dark) {
            document.documentElement.style.setProperty(key, value);
        }
        updateTheme("dark");
        button.innerHTML = "Dark";
    } else if (window.localStorage.getItem("theme") == "dark") {
        for (let [key, value] of light) {
            document.documentElement.style.setProperty(key, value);
        }
        updateTheme("light");
        button.innerHTML = "Light";
    }
}

function moonClick() {
    buttonClick();
    moon.style.display = "none";
    sun.style.display = "block";
}

function sunClick() {
    buttonClick();
    moon.style.display = "block";
    sun.style.display = "none";
}

function updateTheme(theme) {
    window.localStorage.setItem("theme", theme);
}

button.addEventListener("click", buttonClick);
moon.addEventListener("click", moonClick);
sun.addEventListener("click", sunClick);	
console.log(window.innerWidth);

contact.addEventListener("click", function() {

    alert("Contact me TheLPro on Discord");

});
about.addEventListener("click", function() {

    window.open("/projects.html", "_self");

});