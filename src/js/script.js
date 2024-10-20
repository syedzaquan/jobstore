$(document).ready(function () {
    var countDownDate = new Date("Oct 26, 2024 10:00:00").getTime();

    setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('.days').text(days);
        $('.hours').text(hours);
        $('.minutes').text(minutes);
        $('.seconds').text(seconds);

        if (distance < 0) {
            clearInterval(this);
            $('.days, .hours, .minutes, .seconds').text('00');
        }
    }, 1000);

    const textArray = ['Government Job Vacancy', 'Kerja Kosong Kerajaan'];
    let index = 0;

    setInterval(function () {
        $('.work-ads-text').addClass('hide');

        setTimeout(function () {
            index = (index + 1) % textArray.length;
            $('.work-ads-text').text(textArray[index]).removeClass('hide');
        }, 1000);
    }, 6000);

    $('.index-1 .job-slider, .index-2 .job-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false
    });

    // Slider Job Trending
    $(".nav-arrow.next").click(function () {
        $(".index-1").fadeOut();
        $(".index-2").delay(500).fadeIn();
        $('.nav-arrow.next').addClass('disabled');
        $('.nav-arrow.prev').removeClass('disabled');
    });

    $(".nav-arrow.prev").click(function () {
        $(".index-2").fadeOut();
        $(".index-1").delay(500).fadeIn();
        $('.nav-arrow.next').removeClass('disabled');
        $('.nav-arrow.prev').addClass('disabled');
    });
});