//animated slideInDown delay-2s

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