console.log("Learn DOM")

const h2 = document.createElement("h2")
const heading2 = document.createTextNode("Learn DOM with JavaScript")

h2.appendChild(heading2)

const content = document.getElementById("content")
content.appendChild(h2)
