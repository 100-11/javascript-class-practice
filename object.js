const myHuman = {
    head: "big",
    ear: "small",
    leg: "long",
    laptop: {
        color: "black",
        lid: "big",
        size: "small",
        charger: {
            color: "pink",
            length: "medium",
        }
    },

    shirt: "purple",
    "arr-car": ["lenovo", "apple", "orange"
    ],

    myFun: function (){
        return "i am a function in an object but i am a called method"
    }
}

let myDate = new Date();
console.log(myDate);



console.log(myHuman)
console.log(myHuman.leg)
console.log(myHuman["leg"])
console.log(myHuman['arr-car'])



console.log(myHuman)
console.log(myHuman.leg)
console.log(myHuman.shirt)
console.log(myHuman.laptop)
console.log(myHuman.laptop.lid)
console.log(myHuman.laptop.charger.color)