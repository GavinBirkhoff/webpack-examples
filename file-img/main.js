import small from "./small.png";
import big from "./big.png";
console.log("Hi, sub.js");
const img1 = document.createElement("img");
img1.src = small;
document.body.appendChild(img1);

const img2 = document.createElement("img");
img2.src = big;
document.body.appendChild(img2);
