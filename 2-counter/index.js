// increase btn
const increaseBtn = document.getElementById("increase");
// decrease btn
const decreaseBtn = document.getElementById("decrease");
// reset btn
const resetBtn = document.getElementById("reset");
// counter output
const count = document.getElementById("counter");

// reset btn event listener and function
resetBtn.addEventListener("click", function()
{
    // resets counter to 0
    count.textContent = 0;
});
// decrease btn event listener and function
decreaseBtn.addEventListener("click", function()
{
    // decreases counter by 1
    count.textContent --;
});
// increase btn event listener and function
increaseBtn.addEventListener("click", function()
{
    // increases counter by 1
    count.textContent ++;
});