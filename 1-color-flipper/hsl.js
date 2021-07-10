const changeBackground = document.getElementById("flex");
const color = document.getElementById("color");

color.addEventListener("click", function () {
    let a = Math.floor(Math.random() * 238);
    let b = Math.floor(Math.random() * 100);
    let c = Math.floor(Math.random() * 100);
    const rgbColor = "hsl(" + a + ", " + b + "%, " + c + "%)";
    color.textContent = rgbColor;
    changeBackground.style.background = rgbColor;
});
