//light / dark mode changer

const varToString = varObj => Object.keys(varObj)[0];
const button = document.querySelector("#theme");
const moon = document.querySelector("#dark");
const sun = document.querySelector("#light");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
window.localStorage.setItem("theme", "light");

function lhCheck () {return window.location.href.includes("127.0.0.1") || window.location.href.includes("localhost");}

function buttonClick() {
    console.log("hi")
    if (window.localStorage.getItem("theme") == "light") {
        document.body.setAttribute('data-theme', 'dark');
        updateTheme("dark");
    } else if (window.localStorage.getItem("theme") == "dark") {
        document.body.setAttribute('data-theme', 'light');
        updateTheme("light");
    }
}
document.body.setAttribute('data-theme', 'light');
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

function copyText(text) {
    const storage = document.createElement('textarea');
    storage.value = text;
    document.body.appendChild(storage);
  
    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(storage);

    alert("Discord copied to clipboard!");
  }

button.addEventListener("click", buttonClick);
moon.addEventListener("click", moonClick);
sun.addEventListener("click", sunClick);	
console.log(window.innerWidth);

contact.addEventListener("click", function() {
    copyText("thelpro");
});
about.addEventListener("click", function() {
    if (lhCheck()) {
        window.open("/projects.html", "_self");
    } else {
        window.open("/projects", "_self");
    }
});
function home() {
    if (lhCheck()) {
        window.open("/index.html", "_self");
    } else {
        window.open("https://thelpro.studio", "_self");
    }
}
function link(url) {
    window.location.href = url;
}