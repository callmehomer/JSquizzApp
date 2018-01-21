function populate() {
    if (quiz.isEnded()) {
    }
    else {
        // show question
        var element = $(".quiz-screen__title");
        element.html(quiz.getQuestionIndex().text);
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = $("#choice" + i);
            element.html(choices[i]);
            guess("btn" + i, choices[i]);
        }
    }
};
//TODO: chenge to jQuery

function guess(id, guess) {
    var button = document.getElementById(id);
   
    button.onclick = function() {
        quiz.guess(guess);
        makeProgress();
        populate();
    }
};

function makeProgress(){
    if(progress <= 100){
        progress += 100 / questions.length;
        progressBar.animate ({width: progress + '%'});
    }
}

var questions = [
    new Question("Is a star made of gas?", ["Yeap!", "Naah"], "Yeap!"),
    new Question("Does a star starts from a black hole", ["Yeap!", "Naah"], "Naah"),
    new Question("Pulsar is a big collection of matter.", ["Yeap!", "Naah"], "Naah"),
];

var quiz = new Quiz(questions);
var progressBar = $(".quizz-screen__progress-bar_progress");
var progress = 0;
populate();
