

/*-----SWITCH_IMG-----*/

$('#switch').click(clickSwitch());

function clickSwitch() {
    if ($('#switch').css("transform") == 'none') {
        $('#switch').css("transform", "rotate(180deg)");
    }
    else {
    $('#switch').css("transform","none" );
    }
}

/*-----EDUCATION-----*/


$(".HideCauses").on("click", showHideC);

function showHideC() {
    clickSwitch();
    if ($("#WarHiddenCauses").css("display") == "none") {
        $("#WarHiddenCauses").css("display", "block");
    } else {
        $("#WarHiddenCauses").css("display", "none");
        $("#HiddenEd").css("display", "none");
        $("#Education").css("color", "black");
        $("#Rights").css("color", "black");
        $("#HiddenHR").css("display", "none");
        $('.e1').addClass("oversel");
        $('.e2').addClass("oversel");
        $('.r1').addClass("oversel");
        $('.r2').addClass("oversel");
        $('.r3').addClass("oversel");
    }
}

$(".EdBox").on("click", showHiddenEd);
$(".Ed").on("click", showEd);

function showHiddenEd() {
    if ($("#HiddenEd").css("display") == "none") {
        $("#HiddenEd").css("display", "block");
        $("#Education").css("color", "white");
        
	   var controller = new ScrollMagic.Controller();
        
        var pinIntroScene14 = new ScrollMagic.Scene({
            triggerElement: '#E1',
            duration: '150%'
        })
        .setClassToggle('.e1', "selected")
        .addTo(controller);

        var pinIntroScene15 = new ScrollMagic.Scene({
            triggerElement: '#E2',
            duration: '500%'
        })
        .setClassToggle('.e2', "selected")
        .addTo(controller);
        
        $('.e1').removeClass("oversel");
        $('.e2').removeClass("oversel");
    } else {
        $('.e1').addClass("oversel");
        $('.e2').addClass("oversel");
        $("#HiddenEd").css("display", "none");
        $("#Education").css("color", "black");
    }
}

function showEd() {
    if ($("#HiddenEd").css("display") == "none") {
        $("#HiddenEd").css("display", "block");
        $("#Education").css("color", "white");
        
	   var controller = new ScrollMagic.Controller();
        
        var pinIntroScene14 = new ScrollMagic.Scene({
            triggerElement: '#E1',
            duration: '150%'
        })
        .setClassToggle('.e1', "selected")
        .addTo(controller);

        var pinIntroScene15 = new ScrollMagic.Scene({
            triggerElement: '#E2',
            duration: '550%'
        })
        .setClassToggle('.e2', "selected")
        .addTo(controller);
    }
}

/*-----HUMAN RIGHTS-----*/

$(".HRBox").on("click", showHiddenHR);
$(".HR").on("click", showHRs);

function showHiddenHR() {
        $('.r1').addClass("oversel");
        $('.r2').addClass("oversel");
        $('.r3').addClass("oversel");
    if ($("#HiddenHR").css("display") == "none") {
        $("#HiddenHR").css("display", "block");
        $("#Rights").css("color", "white");
        
	   var controller = new ScrollMagic.Controller();
        
        var pinIntroScene14 = new ScrollMagic.Scene({
            triggerElement: '#HumanRights',
            duration: '100%'
        })
        .setClassToggle('.r1', "selected")
        .addTo(controller);

        var pinIntroScene15 = new ScrollMagic.Scene({
            triggerElement: '#RightsInfringed',
            duration: '100%'
        })
        .setClassToggle('.r2', "selected")
        .addTo(controller);

        var pinIntroScene16 = new ScrollMagic.Scene({
            triggerElement: '#RightsTimeline',
            duration: '100%'
        })
        .setClassToggle('.r3', "selected")
        .addTo(controller);
        
        $('.r1').removeClass("oversel");
        $('.r2').removeClass("oversel");
        $('.r3').removeClass("oversel");
        
    } else {
        $("#HiddenHR").css("display", "none");
        $("#Rights").css("color", "black");
    }
}

function showHRs() {
    if ($("#HiddenHR").css("display") == "none") {
        $("#HiddenHR").css("display", "block");
        $("#Rights").css("color", "white");
        
	   var controller = new ScrollMagic.Controller();
        
        var pinIntroScene14 = new ScrollMagic.Scene({
            triggerElement: '#HumanRights',
            duration: '100%'
        })
        .setClassToggle('.r1', "selected")
        .addTo(controller);

        var pinIntroScene15 = new ScrollMagic.Scene({
            triggerElement: '#RightsInfringed',
            duration: '100%'
        })
        .setClassToggle('.r2', "selected")
        .addTo(controller);

        var pinIntroScene16 = new ScrollMagic.Scene({
            triggerElement: '#RightsTimeline',
            duration: '100%'
        })
        .setClassToggle('.r3', "selected")
        .addTo(controller);
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