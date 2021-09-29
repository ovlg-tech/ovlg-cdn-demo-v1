$(document).ready(function () {
    $('#waterfallCarousel').carousel({
        interval: false,
        wrap: false
    })
    prepareWaterfallCarousel();
    // waterfallReadmore();
});


function prepareWaterfallCarousel() {
    var waterfallCarouselLength = $('#waterfallCarousel .carousel-item').length - 1;
    // If there is more than one item
    if (waterfallCarouselLength) {
        $('#waterfallCarousel .carousel-control-next').removeClass('d-none');
    }

    var carousel = $('#waterfallCarousel')


    // $('#waterfallCarousel').carousel({
    //     interval: false,
    //     wrap: false
    // })
    carousel.on('slide.bs.carousel', function (e) {
        // console.log(e)
        // First one
        if (e.to == 0) {
            $('#waterfallCarousel .carousel-control-prev').addClass('d-none');
            $('#waterfallCarousel .carousel-control-next').removeClass('d-none');
        } // Last one
        else if (e.to == waterfallCarouselLength) {
            $('#waterfallCarousel .carousel-control-prev').removeClass('d-none');
            $('#waterfallCarousel .carousel-control-next').addClass('d-none');
        } // The rest
        else {
            $('#waterfallCarousel .carousel-control-prev').removeClass('d-none');
            $('#waterfallCarousel .carousel-control-next').removeClass('d-none');
        }

        // if (e.direction == "left") {console.log("left")}
        var upcomingSlide = carousel.find('.carousel-item').eq(e.to)
        // carousel.find('.parent-description .description_text').css('display', 'block'); // it is open in drupal version

        var maxLength = 1200;
        var myStr = upcomingSlide.find(".description_text").text();

        if (jQuery.trim(myStr).length > maxLength) {

            var newStr = myStr.substring(0, maxLength);

            var removedStr = myStr.substring(maxLength, jQuery.trim(myStr).length);

            upcomingSlide.find('.description_text').css('display', 'none');
            upcomingSlide.find('.read-more-text').html(newStr);
            upcomingSlide.find('.read-more-text').css('display', 'block');
            upcomingSlide.find('.read-more-text').append(' <span style="color:#01A3A3;font-weight: bold;cursor: pointer;" class="read-more" > read more...</span>');
        }
    });

}

function load_first() {
    var carousel = $('#waterfallCarousel')
    var maxLength = 1200;
    var myStr = carousel.find(".active .description_text").text();

    if (jQuery.trim(myStr).length > maxLength) {

        var newStr = myStr.substring(0, maxLength);

        var removedStr = myStr.substring(maxLength, jQuery.trim(myStr).length);

        carousel.find(".active .description_text").css('display', 'none');
        carousel.find(".active .read-more-text").html(newStr);
        carousel.find('.read-more-text').css('display', 'block');

        carousel.find(".active .read-more-text").append(' <a style="color:#01A3A3;font-weight: bold;" href="javascript:void(0);" class="read-more"> read more...</a>');

    }
}
// function waterfallReadmore() {
//     $('#waterfallCarousel .read-more').click(function () {
//         //console.log($(this).closest('.carousel-item').html());
//         $(this).closest('.carousel-item')
//             .find('.description_text').show()
//             .end()
//             .find('.read-more-text').hide()
//     })
// }
jQuery(document).on("click", '#waterfallCarousel .read-more', function () {
    $(this).closest('.carousel-item')
        .find('.description_text').show()
        .end()
        .find('.read-more-text').hide()
    jQuery(this).remove();
});

function changeIconInfoToBootstrapIcon() {
    var carousel = $('#waterfallCarousel')
    carousel.find('div.carousel-item h2 > span.icon-info')
        .each(function () {
            $(this).replaceWith('<i class="bi bi-info-circle-fill"></i>')
        })
}
// setTimeout(function () {
//     load_first();
//     changeIconInfoToBootstrapIcon()
// }, 4000)
window.onload = function () {
    load_first();
    // changeIconInfoToBootstrapIcon();
    // waterfallReadmore();
}

function toggleFormDisableStatus(disbaleStatus = 'disable') {
    if (disbaleStatus == 'disable') {
        // disable
        $('#subscriberName').prop("disabled", true).addClass('cursor-progress');
        $('#subscriberEmail').prop("disabled", true).addClass('cursor-progress');
        $('#subscribeBtn').prop("disabled", true).addClass('cursor-progress');
    } else {
        // enable
        $('#subscriberName').removeAttr('disabled').removeClass('cursor-progress');
        $('#subscriberEmail').removeAttr('disabled').removeClass('cursor-progress');
        $('#subscribeBtn').removeAttr('disabled').removeClass('cursor-progress');
    }
}

$('#waterfall_subscription_form').submit(function (e) {
    $('#subscribe_msg_div').html('');

    e.preventDefault()
    var nameRegex = /^[a-zA-Z ]+$/
    var subscriberName = jQuery('#subscriberName').val().trim();
    if (subscriberName == '' || !nameRegex.test(subscriberName)) {
        $('#subscribe_msg_div').html('Name can only contain alphabet and white space');
        return false;
    }
    var emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    var subscriberEmail = jQuery('#subscriberEmail').val().trim();
    if (subscriberEmail == '' || !emailRegex.test(subscriberEmail)) {
        $('#subscribe_msg_div').html('Please enter valid email with proper formatting');
        return false;
    }
    console.log(subscriberEmail, subscriberName)
    toggleFormDisableStatus('disable')

    // window.location.href = 'https://www.ovlg.com/weekly-waterfall-tips/thank-you.html';
    // window.location.href = 'weekly-waterfall-tips/thank-you.html';
    $.ajax({
        type: 'POST',
        url: 'https://www.ovlg.com/ajax/weekly-waterfall-subscribe',
        data: { email: subscriberEmail, name: subscriberName },
        crossDomain: true,
        dataType: 'json',
        encode: true,
        success: function (data) {
            toggleFormDisableStatus('enable');
            if (data.status == 'error') {
                $('#subscribe_msg_div').html(data.msg);
                console.log(data);
            } else {
                window.location.href = 'weekly-waterfall-tips/thank-you.html';
                console.log(data);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(data);
        }
    });
})