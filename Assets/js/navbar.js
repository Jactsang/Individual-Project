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
        $('nav').addClass('white')
    } else {
        $('nav').removeClass('white')
    }

    var scrollLocation = $(this).scrollTop();
    // console.log('scrollLocation ', scrollLocation);
    var hash = window.location.hash;
    // console.log('hash ', hash);

    currentLink.each(function () {

        var currentOffset = $(this.hash).offset().top;

        // console.log('currentOffset ', currentOffset)

        if (currentOffset - 350 <= scrollLocation) {
            $('.nav-item').removeClass('active');
            $(this).parent().addClass('active');
        }
    });
})