// Rescale single elements on screen. Maybe split it up into two functions
function rescaleLayout() {
    $('#main').css('height', $(window).height() - $('#header').height() - $('#footer').height() - 8);
    $('#grid').css('height', $('#main').height());
    $('#questionButton').css('height', $('#grid').height() / 3);
    $('#blockA').css('height', $('#grid').height() * (2/3));
    $('#blockB').css('height', $('#grid').height() * (2/3));
    $('#answerA').css('height', ($('#blockA').height() / 2) -18);
    $('#answerB').css('height', ($('#blockB').height() / 2) -18);
    $('#answerC').css('height', ($('#blockA').height() / 2) -18);
    $('#answerD').css('height', ($('#blockB').height() / 2) -18);
}

// Rescale layout when document is ready
$( document ).ready(function() {
    rescaleLayout();
});

// Rescale layout on resize of window element. Actually not really needed for cordova app
$(window).resize(function() {
    rescaleLayout();
});