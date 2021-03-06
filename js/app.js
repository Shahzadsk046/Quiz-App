var quizQuestions = [
    {
        question : "Who is the President of Pakistan?",
        answer : "Dr. Arif Alvi",
        options : [
            "Imran Khan",
            "Dr. Arif Alvi",
            "Mamnun Hussain",
            "None of the Above"
        ]
    },
    {
        question : "What is the National Game of Pakistan?",
        answer : "Hockey",
        options : [
            "Football",
            "Cricket",
            "Hockey",
            "Snooker"
        ]
    },
    {
        question : "Which city is the biggest City of Pakistan?",
        answer : "Karachi",
        options : [
            "Lahore",
            "Islamabad",
            "Peshawar",
            "Karachi"
        ]
    },
    {
        question : "What was the population of Pakistan in 2019?",
        answer : "22 Crore",
        options : [
            "22 Crore",
            "20 Crore",
            "19 Crore",
            "22.5 Crore"
        ]
    },
    {
        question : "Who win the Champions Trophy 2017 CUP?",
        answer : "Pakistan",
        options : [
            "Pakistan",
            "India",
            "West Indies",
            "England"
        ]
    },
];

function showQuestion(e){
    var question = document.getElementById("question");
    question.innerHTML = quizQuestions[e].question;

    var option = document.getElementsByClassName("options");
    for(var i = 0; i < option.length; i++){
        option[i].innerHTML = quizQuestions[e].options[i]
    }
}

var countQuestion = 0;
var score = 0;

function next(){
    countQuestion++;
    validate(countQuestion);
    unactive();
    showQuestion(countQuestion)
}

function activeOption(e){
    unactive()
    e.classList.add("active")
}

function unactive(){
    var active = document.getElementsByClassName("active")
    for(var i = 0; i < active.length; i++){
        active[i].classList.remove("active")
    }
}

function validate(e){
    var active = document.getElementsByClassName("active")
    if(active[0].innerHTML == quizQuestions[e].answer)
    score++;
    console.log(score)
}