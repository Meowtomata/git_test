const pRed = document.createElement("p");
pRed.textContent = "Hey I'm red!";
pRed.setAttribute('style','color:red');

const h3Blue = document.createElement("h3");
h3Blue.style.color = 'blue';
h3Blue.textContent = "I'm a blue h3";

const divBlack = document.createElement("div");
divBlack.setAttribute('style','background-color: pink; border-style:solid;')
const h1Div = document.createElement("h1");
h1Div.textContent = "I'm in a div";
const pDiv = document.createElement("p");
pDiv.textContent = "ME TOO!";

divBlack.appendChild(h1Div);
divBlack.appendChild(pDiv);

document.body.appendChild(pRed);
document.body.appendChild(h3Blue);
document.body.appendChild(divBlack);