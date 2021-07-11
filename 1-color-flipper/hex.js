// selecting the background of the body wrapper
const changeBackground = document.getElementById("flex");
// selecting the button to change the background
const color = document.getElementById("color");
// array of values for the background color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let randomNumberValue;


// adding event listener and function to the button
color.addEventListener("click", function () {
    // saves the new background color
    let hexColor = "#";
    // randomly picks a value in the array and adds it to the background color above
    for (let i = 0; i < 6; i++) {
        randomNumberValue = Math.floor(Math.random() * hex.length);
        hexColor += hex[randomNumberValue];
    };
    // outputs in numbers inside the button
    color.textContent = hexColor;
    // changes the background color
    changeBackground.style.background = color.textContent;
});