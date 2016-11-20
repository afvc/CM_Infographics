/*-----POPUP-----*/
       $(".server-signed-info-js").on("click", function () {
      var popup = document.getElementById('server-signed-content-js');
     popup.classList.toggle('show');
     })
   
     $(".keys-help-popup-js").on("click", function () {
    var popup = document.getElementById('keys-help-content-js');
      popup.classList.toggle('show');
   })
 });


/*-----SWITCH_IMG-----*/
$('#switch').click(function () {
    if ($(this).css("transform") == 'none') {
        $(this).css("transform", "rotate(180deg)");
        
    }
    else {
    $(this).css("transform","none" );
        
        
        $("#HiddenEd").css("display", "none");
        $("#Education").css("color", "black");
        $("#Rights").css("color", "black");
        $("#HiddenHR").css("display", "none");
  

}

});

/*-----EDUCATION-----*/

$("#Education").on("click", showHiddenEd);

$("#HideCauses").on("click", showHideC);

function showHideC() {
    if ($("#WarHiddenCauses").css("display") == "none") {
        $("#WarHiddenCauses").css("display", "block");
    } else {
        $("#WarHiddenCauses").css("display", "none");
    }
}


$(".Ed").on("click", showEd);

function showHiddenEd() {
    if ($("#HiddenEd").css("display") == "none") {
        $("#HiddenEd").css("display", "block");
        $("#Education").css("color", "white");
    } else {
        $("#HiddenEd").css("display", "none");
        $("#Education").css("color", "black");

    }
}

function showEd() {
    if ($("#HiddenEd").css("display") == "none") {
        $("#HiddenEd").css("display", "block");
        $("#Education").css("color", "white");
        $("#WarHiddenCauses").css("display", "block");
    }
}

/*-----HUMAN RIGHTS-----*/

$("#Rights").on("click", showHiddenHR);
$(".HR").on("click", showHRs);

function showHiddenHR() {
    if ($("#HiddenHR").css("display") == "none") {
        $("#HiddenHR").css("display", "block");
        $("#Rights").css("color", "white");
        $("#WarHiddenCauses").css("display", "block");
    } else {
        $("#Rights").css("color", "black");
        $("#HiddenHR").css("display", "none");

    }
}

function showHRs() {
    if ($("#HiddenHR").css("display") == "none") {
        $("#HiddenHR").css("display", "block");
        $("#Rights").css("color", "white");
        $("#WarHiddenCauses").css("display", "block");
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