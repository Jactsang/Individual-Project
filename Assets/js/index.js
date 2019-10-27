
// play button effect setting

$("#top-description a").mousedown(function () {
    $(this).css("font-size", "2.9rem")
});

$("#top-description a").mouseup(function () {
    $(this).css("font-size", "3.1rem")
});

// play audio for year 1992 session

var audio1992 = document.getElementById("audio-1992");

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

// open||close hiddenbox for year 2018 session

$("#hiddenbox-2018").hide();

$("#timeline-2018").click(function(){
    if(!$("#hiddenbox-2018").is(":visible")){
        $("#hiddenbox-2018").addClass("animated slideInDown");
    }else{
        $("#hiddenbox-2018").removeClass("animated slideInDown");
    }

    $("#hiddenbox-2018").toggle();
})

var btnClose = $("#hiddenbox-2018 button");

btnClose.click(function(){
    $("#hiddenbox-2018").toggle();
})

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

// text typing in about me

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};