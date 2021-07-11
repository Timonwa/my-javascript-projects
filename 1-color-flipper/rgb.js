// selecting the background of the body wrapper
const changeBackground = document.getElementById("flex");
// selecting the button to change the background
const color = document.getElementById("color");


// adding event listener and function to the button
color.addEventListener("click", function () {
    // randomly picks a number between 0 and 256
    let a = Math.floor(Math.random() * 256);
    // randomly picks a number between 0 and 256
    let b = Math.floor(Math.random() * 256);
    // randomly picks a number between 0 and 256
    let c = Math.floor(Math.random() * 256);
    // saves the new background color
    const rgbColor = "rgb(" + a + ", " + b + ", " + c + ")";
    // outputs in numbers inside the button
    color.textContent = rgbColor;
    // changes the background color
    changeBackground.style.background = rgbColor;
});
