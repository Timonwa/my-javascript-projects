// selecting the background of the body wrapper
const changeBackground = document.getElementById("flex");
// selecting the button to change the background
const color = document.getElementById("color");


// adding event listener and function to the button
color.addEventListener("click", function () {
    // randomly picks a number between 0 and 238
    let a = Math.floor(Math.random() * 238);
    // randomly picks a number between 0 and 100
    let b = Math.floor(Math.random() * 100);
    // randomly picks a number between 0 and 100
    let c = Math.floor(Math.random() * 100);
    // saves the new background color
    const rgbColor = "hsl(" + a + ", " + b + "%, " + c + "%)";
    // outputs in numbers inside the button
    color.textContent = rgbColor;
    // changes the background color
    changeBackground.style.background = rgbColor;
});
