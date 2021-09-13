$(function () {


    $(window).on("resize", function () {
        $("header, header .overlay").height($(window).height())
    })

    $(window).trigger("resize")

})