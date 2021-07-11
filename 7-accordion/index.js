// variables
const openBtn = document.querySelectorAll('.open');
const closeBtn = document.querySelectorAll('.close');
const accBody = document.querySelectorAll('.acc-body');
const btnToggle = document.querySelectorAll('.acc-title');

// adding event listener to the accordion toggle button
for (i of btnToggle) {
    i.addEventListener('click', toggleFunction);
}

// the function that runs when the click event is activated
// ! here the other bodies do not automatically close then the current one is open
//  function toggleFunction() {
//     this.nextElementSibling.classList.toggle("active");
//     this.children[0].classList.toggle("inactive");
//     this.children[1].classList.toggle("active");
// };
// !

// ! here the other bodies automatically close then the current one is open
function toggleFunction() {
    for (i of btnToggle) {
        i.nextElementSibling.style.display = "none";
        i.children[0].style.display = "inline-block";
        i.children[1].style.display = "none";
    };
    if (this.nextElementSibling.style.display == "none") {
        this.nextElementSibling.style.display = "block";
        this.children[0].style.display = "none";
        this.children[1].style.display = "inline-block";
    };
};