// varibles
let display = document.getElementById("display");
const deleteBtn = document.getElementsByName("delete");
var inputs = document.getElementsByClassName("input");
const clear = document.getElementsByName("clear");
const result = document.getElementsByName("equal");

// delete btn on click
deleteBtn[0].addEventListener("click", function () {
    display.value = display.value.slice(0, - 1);
});
// clear btn on click
clear[0].addEventListener("click", function () {
    display.value = ""
});
// equals btn on click
result[0].addEventListener("click", function () {
    display.value = eval(display.value)
});

// input btns on click
for (var i = 0; i < inputs.length; i++) {
};

for (i of inputs) {
    i.addEventListener("click", function () {
        display.value += this.value
    })
}

