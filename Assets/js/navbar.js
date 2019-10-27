// add class active when link is clicked

$(".nav-item").each(function () {
    var thisItem = $(this);

    thisItem.click(function () {
        $(".nav-item").removeClass("active");
        thisItem.addClass("active");
    })
})

// add 'active' class if scroll to particular session
var currentLink = $('.scroll');

$(window).scroll(function () {

    // add 'white' class on scroll
    if ($(window).scrollTop()) {
        $('nav').addClass('wineRed')
    } else {
        $('nav').removeClass('wineRed')
    }

    var scrollLocation = $(this).scrollTop();
    // console.log('scrollLocation ', scrollLocation);
    var hash = window.location.hash;
    // console.log('hash ', hash);

    currentLink.each(function () {

        var currentOffset = $(this.hash).offset().top;

        // console.log('currentOffset ', currentOffset)

        if (currentOffset - 600 <= scrollLocation) {
            $('.nav-item').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

})

// change setting if navbar-toggler is clicked

$(".navbar-toggler").click(function(){
    if($("#navigation").hasClass('wineRed')){
        $("#navigation").removeClass('wineRed')
        $(".navbar").css('height','10vh')
    }else{
        $("#navigation").addClass('wineRed')
        $(".navbar").css('height','50vh')
    }
})

