$('.btn-burger').click(function () {
   $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});

// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        modal.fadeOut();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$('.btn-search').click(function (e) {
    e.preventDefault();
    $('.form-search').fadeIn();
});

$(document).mouseup(function (e) { // событие  увода мыши
    var div = $(".form-search"); // тут указываем ID элемента
    if (!div.is(e.target) // если увели мышку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut();
    }
});