//screens
var startScreen = $(".start-menu");
var quizScreen = $(".quiz-screen");
var popup = $(".popup");

//buttons
var menuButton = $(".navigation__info-button");
var menuBackButton = $(".navigation__back-button");
var startButton = $(".start-menu__button");


startButton.click(function(){
    startScreen.addClass("start-menu_hidden");
    setTimeout(function(){
        startScreen.hide();
        quizScreen.show();
    }, 500);
});

menuButton.click(function() {
    
    popup.show();
    setTimeout(function(){
        popup.toggleClass("popup_open");
    }, 500);
    if(popup.hasClass("popup_open")){
        popup.hide();
        
    }
});

menuBackButton.click(function(){
    quizScreen.hide();
    startScreen.show().removeClass("start-menu_hidden");
    location.reload();
});

