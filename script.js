/*-----EDUCATION-----*/

$("#Education").on("click", showHiddenEd);
$(".Ed").on("click", showEd);

function showHiddenEd() {
    if ($("#HiddenEd").css("display") == "none") {
        $("#HiddenEd").css("display", "block");
    } else {
        $("#HiddenEd").css("display", "none");

    }
}

function showEd() {
    if ($("#HiddenEd").css("display") == "none") {
        $("#HiddenEd").css("display", "block");
    }
}

/*-----HUMAN RIGHTS-----*/

$("#Rights").on("click", showHiddenHR);
$(".HR").on("click", showHRs);

function showHiddenHR() {
    if ($("#HiddenHR").css("display") == "none") {
        $("#HiddenHR").css("display", "block");
    } else {
        $("#HiddenHR").css("display", "none");

    }
}

function showHRs() {
    if ($("#HiddenHR").css("display") == "none") {
        $("#HiddenHR").css("display", "block");
    }
}

/*-----SOFT JUMPS-----*/
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
});


 