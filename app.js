const container=document.querySelector(".container");

const colors=["#e74c3c", "#8e44ad", "#3498ad", "#ebe7e22", "#2ecc71"];
let id=500;

for(let i=0; i<id; i++){
    const square=document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover",()=>setColor(square))
    square.addEventListener("mouseout",()=>removeColor(square))
    container.appendChild(square);
}
function setColor(div){
    const getColor=randomColor();
    div.style.backgroundColor=getColor;
    div.style.boxShadow=`0 0 2px ${getColor}, 0 0 10px ${getColor}`
}
function randomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}
function removeColor(div) {
    // console.log(div);
    div.style.backgroundColor=`#111`;
    div.style.boxShadow=`0 0 2px #000`
}