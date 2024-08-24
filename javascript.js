$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });

    function newDate() {
        return new Date().getFullYear();
    }

    // Set the content of the element with id "autodate"
    $("#autodate").text(newDate());
});
