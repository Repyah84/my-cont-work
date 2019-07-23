$('.js-scroll').on('click','a', function () {
    var offset = $($(this).attr('href')).offset().top;
    $('html').stop().animate({scrollTop:offset}, 500, 'swing', function() {});
});