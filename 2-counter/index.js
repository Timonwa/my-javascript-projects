const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const count = document.getElementById("counter");

resetBtn.addEventListener("click", function()
{
    count.textContent = 0;
});
decreaseBtn.addEventListener("click", function()
{
    count.textContent --;
});
increaseBtn.addEventListener("click", function()
{
    count.textContent ++;
});