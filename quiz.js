const myQuestions = [
    {
        question: "What colour is an orange?",
        answers: {
            a: "Yellow",
            b: "Red",
            c: "Orange",
        
        },
        correctAnswer: "c",
    },

        {
            question; "What is the capital of Somalia?",
            answers: {
                a: "Mogadishu",
                b: "Boorama",
                c: "Hargeisa",

            },
            correctAnswer: "a",
        },
]


let i;
function buildMyQuiz(questionsContainer) {

    for( =0; i< myQuestions.length; i++) {
        let answer= document.createElement("label")
    };
};

buildMyQuiz()

function showMyResults(resultsContainer){
    let yourAnswer;
    let rightAnswer = 0;
    if (yourAnswer ===myQuestions [i].correctAnswer){
        rightAnswer++
    } else {

    }
};

submitButton.addEventListener("click", showMyResults);

const questionsContainer = document.getElementById("questions");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

