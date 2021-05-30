$(document).ready(function(){
    var headerHeight = $('header').outerHeight();
    $(".slide-section").click(function(){
        var linkHref = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(linkHref).offset().top - (headerHeight*4.7)
        }, 1000)
    })
})
