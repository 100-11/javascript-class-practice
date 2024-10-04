let Timeout = setTimeout(myFunc, 6000)
console.log(ourTimeout)

function myFunc() {
    console.log("Please lets endeavour about the learning")
}

let ourInterval = setInterval(ourFunc, 2000)

    function ourFunc() {
        console.log("h1 devlops engine")
    }

    setTimeout(clearInterval(ourInterval), 6000)