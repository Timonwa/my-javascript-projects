// *start button
// variable
const startQuiz = document.getElementById("start-btn");
const introCntr = document.querySelector(".intro");
const outroCntr = document.querySelector(".outro");
const questionCntr = document.getElementById("question-cntr");

// function
startQuiz.addEventListener("click", function(){
    introCntr.style.display = 'none';
    questionCntr.style.display = "flex";
});

// *quiz card
// array of questions
const questions = [
    {
        qs: "Is Timonwa my real name?",
        a: "Yes",
        b: "No",
        c: "I dunno",
        d: "Who is Timonwa?",
        answer: "is a",
        aReply: "You have started well.",
        bReply: "You don fall my hand.",
        cReply: "We are not friends yet are we?",
        dReply: "Who the f**k are you too, the audacity!",
    },
    {
        qs: "How old am I?",
        a: "18",
        b: "24",
        c: "A lady does not disclose her age.",
        d: "30",
        answer: "is c",
        aReply: "I get that alot.",
        bReply: "That's close enough.",
        cReply: "You get am. Chop knuckle.",
        dReply: "How dare you!",
    },
    {
        qs: "Whats my favourite color?",
        a: "Red",
        b: "White",
        c: "Orange",
        d: "Black",
        answer: "is d",
        aReply: "Am I ritualist?",
        bReply: "Quite the opposite actually.",
        cReply: "Ugh. What is that.",
        dReply: "The darker the better!",
    },
    {
        qs: "Which is one of my favourite foods?",
        a: "Moin moin",
        b: "Ravioli",
        c: "Beans",
        d: "Noodles",
        answer: "is a",
        aReply: "Moin moin is bae espcially when egg and fish are involved.",
        bReply: "Ki lo nje be(What is that)?",
        cReply: "Have you ever had a girl say beans is her fav food?",
        dReply: "When better foods dey, mtchew.",
    },
    {
        qs: "What country would I love to visit?",
        a: "London",
        b: "Russia",
        c: "Korean",
        d: "Argentina",
        answer: "is c",
        aReply: "No.",
        bReply: "Its too cold over there.",
        cReply: "It's a weird option but it's the right option.",
        dReply: "Never for once thought of that place.",
    }
]
// variables
let qsNumber = document.getElementById("qs-number");
let qsTotal = document.querySelectorAll(".qs-total");
let question = document.getElementById("qs");
let options = document.getElementsByName('option');
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let submitBtn = document.getElementById("submit-btn");
let nextBtn = document.getElementById("next-btn");
let finishBtn = document.getElementById("finish-btn");
let retakeBtn = document.getElementById("retake-btn");
let ansCntr = document.getElementById("ans");
let correctAnswerIcon = document.querySelector(".correct");
let wrongAnswerIcon = document.querySelector(".failed");
let ansText = document.querySelector(".ans-text");
let result = document.getElementById("correct-ans");
let resultComment = document.getElementById("result-comment");
let currentQuestion = 0;
let userAnswer;
var correctAnswers = 0;

// *functions
// quiz card when the page loads
window.addEventListener("DOMContentLoaded", function () {
    for (i of options) {
        i.checked = false;
    };
    qsNumber.textContent = currentQuestion + 1;
    for (i of qsTotal){
    i.textContent = questions.length;
    }
    question.textContent = questions[currentQuestion].qs
    a.innerText = questions[currentQuestion].a;
    b.innerText = questions[currentQuestion].b;
    c.innerText = questions[currentQuestion].c;
    d.innerText = questions[currentQuestion].d;
    submitBtn.disabled = true;
    nextBtn.disabled = true;
});

// when user selects an option, the submit button becomes enabled
for (i of options) {
    i.addEventListener("click", function () {
        submitBtn.disabled = false;
        submitBtn.style.color = "green";
    })
};

// when user clicks on submit, the next button becomes enabled
submitBtn.addEventListener('click', function () {
    nextBtn.disabled = false;
    nextBtn.style.color = "green";
    submitBtn.style.color = "red";
    submitBtn.disabled = true;
    for (i of options) {
        i.disabled = true;
    };
    if (currentQuestion > questions.length - 3) {
        finishBtn.disabled = false;
        finishBtn.style.color = "blue";
    };
    if (aqs.checked === true) {
        ansCntr.style.display = "block";
        userAnswer = "is a";
        ansText.innerHTML = questions[currentQuestion].aReply;
        marker();
    }
    else if (bqs.checked === true) {
        ansCntr.style.display = "block";
        userAnswer = "is b";
        ansText.innerHTML = questions[currentQuestion].bReply;
        marker();
    }
    else if (cqs.checked === true) {
        ansCntr.style.display = "block";
        userAnswer = "is c";
        ansText.innerHTML = questions[currentQuestion].cReply;
        marker();
    }
    else{
        ansCntr.style.display = "block";
        userAnswer = "is d";
        ansText.innerHTML = questions[currentQuestion].dReply;
        marker();
    }
    result.innerHTML = correctAnswers;
});

function marker() {
    if (userAnswer === questions[currentQuestion].answer) {
        correctAnswerIcon.style.display = "inline";
        correctAnswers++;
        return;
    }
    else {
        wrongAnswerIcon.style.display = "inline";
    };
};

// when user clicks on next, the next question loads and refreshes the question card
nextBtn.addEventListener('click', function () {

    correctAnswerIcon.style.display = "none";
    wrongAnswerIcon.style.display = "none";
    
    for (i of options) {
        i.disabled = false;
    };
    ansCntr.style.display = "none";
    if (currentQuestion > questions.length - 3) {
        nextBtn.style.display = "none";
        finishBtn.disabled = true;
        finishBtn.style.display = "inline-block";
        finishBtn.style.color = "rgba(16, 16, 16, 0.3)";
    }
        submitBtn.disabled = true;
        nextBtn.disabled = true;
        submitBtn.style.color = "rgba(16, 16, 16, 0.3)";
        nextBtn.style.color = "rgba(16, 16, 16, 0.3)";
        for (i of options) {
            i.checked = false
        };
        currentQuestion++;
        qsNumber.textContent = currentQuestion + 1;
        question.textContent = questions[currentQuestion].qs
        a.innerText = questions[currentQuestion].a;
        b.innerText = questions[currentQuestion].b;
        c.innerText = questions[currentQuestion].c;
        d.innerText = questions[currentQuestion].d;
});

// when user clicks on finish, the quiz ends and the results page loads
finishBtn.addEventListener('click', function finish() {
    if (correctAnswers == 0) {
        resultComment.innerHTML = "Hi stranger!";
    }
    else if (correctAnswers == 1) {
        resultComment.innerHTML = "Are you sure we are friends?";
    }
    else if (correctAnswers == 2) {
        resultComment.innerHTML = "Are you sure we are friends?";
    }
    else if (correctAnswers == 3) {
        resultComment.innerHTML = "You try, weldone!";
    }
    else if (correctAnswers == 4) {
        resultComment.innerHTML = "You try, weldone!";
    }
    else {
        resultComment.innerHTML = "Padi of life!";
    };
    questionCntr.style.display = "none";
    outroCntr.style.display = "flex";
});
retakeBtn.addEventListener('click', function() {
    location.reload();
    return false;
});

