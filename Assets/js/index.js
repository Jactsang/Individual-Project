//animated slideInDown delay-2s

// play audio for year 1992 session

var audio1992 = document.getElementById("audio-1992");

//audio1992.addEventListener("load", playAudio)

function playAudio(){
    audio1992.play();
}

function pauseAudio(){
    audio1992.pause();
}

var playing1992 = false;

$('#oldTape-1992').hide();

$("#intro-1992").click(function(){
    

    if(!$('#oldTape-1992').is(':visible')){
        $('#oldTape-1992 img').addClass('animated slideInDown')
        $('#oldTape-1992 i').addClass('animated slideInUp')
    }else{
        $('#oldTape-1992 img').removeClass('animated slideInDown')
        $('#oldTape-1992 i').removeClass('animated slideInUp')
    }

    $('#oldTape-1992').toggle();

    if(playing1992 === true){
        pauseAudio();
        return playing1992 = false;
    }else{
        playAudio();
        return playing1992 = true;
    }
    
})

$("#oldTape-1992 i").click(function(){
    var thisTape = $(this)
    if(playing1992 === true){
        thisTape.removeClass("fa-stop");
        thisTape.addClass("fa-play")
        pauseAudio();
        return playing1992 = false;
    }else{
        thisTape.removeClass("fa-play");
        thisTape.addClass("fa-stop");
        playAudio();
        return playing1992 = true;
    }
})

// play button effect setting

$("#top-description a").mousedown(function () {
    $(this).css("font-size", "2.9rem")
});

$("#top-description a").mouseup(function () {
    $(this).css("font-size", "3.1rem")
});

// stop animation of contact me icons
$("#contact-me i").each(function () {
    var thisI = $(this);
    thisI.mouseover(function () {
        thisI.removeClass('infinite')
    });

    thisI.mouseout(function () {
        thisI.addClass('infinite');
    });
})