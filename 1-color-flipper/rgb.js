const changeBackground = document.getElementById("flex");
const color = document.getElementById("color");

color.addEventListener("click", function () {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    const rgbColor = "rgb(" + a + ", " + b + ", " + c + ")";
    color.textContent = rgbColor;
    changeBackground.style.background = rgbColor;
});
