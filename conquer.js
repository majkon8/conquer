$(".fa-bars").click(function() {
    $("#navbar").slideToggle(700, "swing");
});

$('a[href*="#"').on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
        {
            scrollTop: $($(this).attr("href")).offset().top - 75
        },
        1000,
        "swing"
    );
});

function onScroll(event) {
    const scrollPos = $(document).scrollTop();
    $("#navbar .nav-link").each(function() {
        const currLink = $(this);
        const refElement = $(currLink.attr("href"));
        if (refElement && refElement.position().top <= scrollPos + 76) {
            $("#navbar ul li a").removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
$(document).on("scroll", onScroll);

$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $("#top-img").fadeIn();
    } else {
        $("#top-img").fadeOut();
    }
});
