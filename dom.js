const myElement = document.querySelector('nav');

var itclass = myElement.className;
var itclasses = myElement.classList;
console.log(itclasses)
itclasses.remove("width450")

console.log(itclasses)

// // const myBlueAll = document.querySelectorAll('.blue')


// // for(let item of myBlueAll){
// //     myBlue.style.backgroundColor = "blue";

// // }

// const myElement = document.createElenment('main');
//     console.log(myElement);

//     myElement.innerHTML = 
//         <nav class="blue">
//         <ul>
//             <li>Testing Listing</li>
//             <li>Testing Listing</li>
//             <li>Testing Listing</li>
//             <li>Testing Listing</li>
//             <li>Testing Listing</li>
//      </ul>
// </nav>

//     document.body.append(myElement)