// variables
const openBTn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const popUp = document.querySelector(".pop-up");

// open function
openBTn.addEventListener("click", function()
{
    popUp.classList.add("modal-toggle");
});
// close function
closeBtn.addEventListener("click", function()
{
    popUp.classList.remove("modal-toggle");
});
