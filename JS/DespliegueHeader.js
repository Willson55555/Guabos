$(function () {
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        if (winTop >= 30) {
            $("body").addClass("sticky-header");
        }
        else {
            $("body").removeClass("sticky-header");
        }
    })
})

// $(function () {
//     $(window).scroll(function () {
//         var winTop = $(window).scrollTop();
//         var docHeight = $(document).height();
//         var winHeight = $(window).height();

//         if (winTop + winHeight >= docHeight) {
//             $(".carrito_box").addClass("carritoFondo");
//         } else {
//             $(".carrito_box").removeClass("carritoFondo");
//         }
//     });
// });
