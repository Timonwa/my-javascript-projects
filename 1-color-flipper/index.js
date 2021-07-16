//* variables
// selecting the background of the body wrapper
const changeBackground = document.getElementById("flex");
// selecting the links to change the page
const hexpage = document.getElementById("hex-page");
const rgbpage = document.getElementById("rgb-page");
const hslpage = document.getElementById("hsl-page");
// selecting the colors container
const hexcntr = document.getElementById("hex-cntr");
const rgbcntr = document.getElementById("rgb-cntr");
const hslcntr = document.getElementById("hsl-cntr");
// selecting the buttons to change the background
const hexcolor = document.getElementById("hex-color");
const rgbcolor = document.getElementById("rgb-color");
const hslcolor = document.getElementById("hsl-color");


//* adding event listener and function to the color page links
// hex page
hexpage.addEventListener("click", function () {
    if (hexpage.style.textDecoration != "underline") {
        hexpage.style.textDecoration = "underline";
        rgbpage.style.textDecoration = "none";
        hslpage.style.textDecoration = "none";
        hexcntr.style.display = "flex";
        rgbcntr.style.display = "none";
        hslcntr.style.display = "none";
    }
});

// rgb page
rgbpage.addEventListener("click", function () {
    if (rgbpage.style.textDecoration != "underline") {
        rgbpage.style.textDecoration = "underline";
        hexpage.style.textDecoration = "none";
        hslpage.style.textDecoration = "none";
        rgbcntr.style.display = "flex";
        hexcntr.style.display = "none";
        hslcntr.style.display = "none";
    }
});

// hsl page
hslpage.addEventListener("click", function () {
    if (hslpage.style.textDecoration != "underline") {
        hslpage.style.textDecoration = "underline";
        rgbpage.style.textDecoration = "none";
        hexpage.style.textDecoration = "none";
        hslcntr.style.display = "flex";
        rgbcntr.style.display = "none";
        hexcntr.style.display = "none";
    }
});
    

//* adding event listener and function to the color buttons
// hex button
// array of values for the background color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let randomNumberValue;

hexcolor.addEventListener("click", function () {
    // saves the new background color
    let hexColorValue = "#";
    // randomly picks a value in the array and adds it to the background color above
    for (let i = 0; i < 6; i++) {
        randomNumberValue = Math.floor(Math.random() * hex.length);
        hexColorValue += hex[randomNumberValue];
    };
    // outputs in numbers inside the button
    hexcolor.textContent = hexColorValue;
    // changes the background color
    changeBackground.style.background = hexcolor.textContent;
});

// rgb button
rgbcolor.addEventListener("click", function () {
    // randomly picks a number between 0 and 256
    let a = Math.floor(Math.random() * 256);
    // randomly picks a number between 0 and 256
    let b = Math.floor(Math.random() * 256);
    // randomly picks a number between 0 and 256
    let c = Math.floor(Math.random() * 256);
    // saves the new background color
    const rgbColor = "rgb(" + a + ", " + b + ", " + c + ")";
    // outputs in numbers inside the button
    rgbcolor.textContent = rgbColor;
    // changes the background color
    changeBackground.style.background = rgbColor;
});

// hsl button
hslcolor.addEventListener("click", function () {
    // randomly picks a number between 0 and 238
    let a = Math.floor(Math.random() * 238);
    // randomly picks a number between 0 and 100
    let b = Math.floor(Math.random() * 100);
    // randomly picks a number between 0 and 100
    let c = Math.floor(Math.random() * 100);
    // saves the new background color
    const hslColor = "hsl(" + a + ", " + b + "%, " + c + "%)";
    // outputs in numbers inside the button
    hslcolor.textContent = hslColor;
    // changes the background color
    changeBackground.style.background = hslColor;
});