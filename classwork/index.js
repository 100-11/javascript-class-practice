console.log("Starting")
const btn = document.getElementById("btn")

btn.addEventListener("click", clickFunc);

function clickFunc() {
    console.log("click me")
}

function clickFunc() {
    var sidebar = document.querySelector('sidebr').classList;
    sidebar.toggle('closed')
}