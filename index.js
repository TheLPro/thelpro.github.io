//light / dark mode changer

const varToString = varObj => Object.keys(varObj)[0];
const button = document.querySelector("#theme");
const moon = document.querySelector("#dark");
const sun = document.querySelector("#light");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
}

function lhCheck () {return window.location.href.includes(":");}

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
document.body.setAttribute('data-theme', window.localStorage.getItem("theme"));
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

if (window.location.href.includes("thelpro") || window.location.href.includes("index") || !window.location.href.includes("projects") || !window.location.href.includes("about")) {
    button.addEventListener("click", buttonClick);
    moon.addEventListener("click", moonClick);
    sun.addEventListener("click", sunClick);	
}
console.log(window.innerWidth);

if (window.location.href.includes("thelpro") || window.location.href.includes("index") || !window.location.href.includes("projects") || !window.location.href.includes("about")) {
    contact.addEventListener("click", function() {
        if (lhCheck()) {
            window.open("/contact.html", "_self");
         } else {
             window.open("/contact", "_self");
         }
    });
}
if (window.location.href.includes("thelpro") || window.location.href.includes("index") || !window.location.href.includes("projects") || !window.location.href.includes("about")) {
    about.addEventListener("click", function() {
      if (lhCheck()) {
          window.open("/projects.html", "_self");
       } else {
           window.open("/projects", "_self");
       }
    });
}
function home() {
    if (lhCheck()) {
        window.open("/index.html", "_self");
    } else {
        window.open("https://thelpro.studio", "_self");
    }
}
function link(url) {
    if (url == "https://thelpro.studio") {
        window.open("https://thelpro.studio", "_self");
    }
    window.open(url, "_blank");
}