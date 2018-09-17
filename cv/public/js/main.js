$(document).ready(function () {
    $('a[href*="#projects"]').click(function(event) {
        event.preventDefault();
        
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top},
            500, 'linear');
    });
});