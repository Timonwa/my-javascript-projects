// array of the review card details stored as objects
const person = [
    {
        name: "John Doe",
        post: "Designer",
        img:
            "img/profile1.jpg",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae esse accusamus, harum praesentium alias provident molestias.",
    },
    {
        name: "Susan Smith",
        post: "Web Developer",
        img:
            "img/profile2.jpg",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae esse accusamus, provident molestias.",
    },
    {
        name: "Adam Smith",
        post: "App Developer",
        img:
            "img/profile3.jpg",
        review:
            "Lorem ipsum dolor sit amet consectetur. Quasi repudiandae esse accusamus, harum praesentium alias provident molestias.",
    },
    {
        name: "Taylor Doe",
        post: "web developer",
        img:
            "img/profile4.jpg",
        review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repudiandae esse accusamus.",
    }
]
// the varibles of the review card details
const img = document.getElementById("image");
const uname = document.getElementById("name");
const post = document.getElementById("post");
const review = document.getElementById("review");
const prevBtn = document.getElementById("backward");
const nextBtn = document.getElementById("forward");
let slideCircles = document.getElementsByClassName("slide-circle");

// the index of the review card that will be shown on load
let currentCard = 0;

// the review card that shows when the webpage loads
window.addEventListener("DOMContentLoaded", function () {
    img.src = person[currentCard].img;
    uname.textContent = person[currentCard].name;
    post.textContent = person[currentCard].post;
    review.textContent = person[currentCard].review;
    slideCircles[currentCard].style.backgroundColor = "rgb(68, 24, 24)";
});

// function to select and change the review details
function showReview() {
    img.src = person[currentCard].img;
    uname.textContent = person[currentCard].name;
    post.textContent = person[currentCard].post;
    review.textContent = person[currentCard].review;
    slideCircles[currentCard].style.backgroundColor = "rgb(68, 24, 24)";
};

// the next button function
nextBtn.addEventListener("click", next);
function next() {
    currentCard++
    if (currentCard > person.length - 1) {
        currentCard = 0;
        slideCircles[person.length - 1].style.backgroundColor = "rgba(92, 92, 92, 0.5)";
    }
    showReview(currentCard);
    slideCircles[currentCard - 1].style.backgroundColor = "rgba(92, 92, 92, 0.5)";
}

// the prev button function
prevBtn.addEventListener("click", prev);
function prev() {
    currentCard--;
    if (currentCard < 0) {
        currentCard = person.length - 1;
    slideCircles[0].style.backgroundColor = "rgba(92, 92, 92, 0.5)";
    }
    showReview(currentCard);
    slideCircles[currentCard + 1].style.backgroundColor = "rgba(92, 92, 92, 0.5)";
};