const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["black","yellow", "green", "purple", "blue", "cyan", "pink","AliceBlue","Aquamarine","Brown"]

button.addEventListener("click", changeBackground);

function changeBackground() {
    //random color
    const random = Math.floor(Math.random() * colors.length);
    console.log(random)
    const pickedColor = colors[random];
    body.style.backgroundColor = pickedColor;
}