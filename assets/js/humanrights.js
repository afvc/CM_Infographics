$(document).ready(function () {
    var controller = new ScrollMagic.Controller();


    var intro_freedomOf = new ScrollMagic.Scene({
            triggerElement: '.freedomOf',
            triggerHook: 0.8
        })
        .setClassToggle('.freedomOf', "fadeSides")
        //.addIndicators()
        .addTo(controller);

    var intro_health = new ScrollMagic.Scene({
            triggerElement: '.health',
            triggerHook: 0.9
        })
        .setClassToggle('.health', "fadeSides")
        .addTo(controller);

    var intro_housing = new ScrollMagic.Scene({
            triggerElement: '.housing',
            triggerHook: 0.8
        })
        .setClassToggle('.housing', "fadeSides")
        .addTo(controller);

    var intro_protectionFrom = new ScrollMagic.Scene({
            triggerElement: '.protectionFrom',
            triggerHook: 0.8
        })
        .setClassToggle('.protectionFrom', "fadeSides")
        .addTo(controller);

    var intro_integrity = new ScrollMagic.Scene({
            triggerElement: '.integrity',
            triggerHook: 0.8
        })
        .setClassToggle('.integrity', "fadeSides")
        .addTo(controller);

    var intro_education = new ScrollMagic.Scene({
            triggerElement: '.education',
            triggerHook: 0.8
        })
        .setClassToggle('.education', "fadeSides")
        .addTo(controller);


    /*----Infringed----*/

    var intro_discrimination = new ScrollMagic.Scene({
            triggerElement: '.discrimination',
            triggerHook: 0.7
        })
        .setClassToggle('.discrimination', "fadeSides")
        .addTo(controller);

    var intro_opressionOf = new ScrollMagic.Scene({
            triggerElement: '.opressionOf',
            triggerHook: 0.7
        })
        .setClassToggle('.opressionOf', "fadeSides")
        .addTo(controller);

    /*----Arrows scroll----*/

    var intro_arrow1 = new ScrollMagic.Scene({
            triggerElement: '.arrow1',
            triggerHook: 0.8
        })
        .setClassToggle('.arrow1', "fadeTop")
        .addTo(controller);

    var introfreedomOf = new ScrollMagic.Scene({
            triggerElement: '.arrow2',
            triggerHook: 0.5
        })
        .setClassToggle('.arrow2', "fadeTop")
        .addTo(controller);

    /*----Infringed cont----*/

    var intro_conflicts = new ScrollMagic.Scene({
            triggerElement: '.conflicts',
            triggerHook: 1
        })
        .setClassToggle('.conflicts', "fadeTop")
        .addTo(controller);


    var intro_lifeSafety = new ScrollMagic.Scene({
            triggerElement: '.lifeSafety',
            triggerHook: 1
        })
        .setClassToggle('.lifeSafety', "fadeSides")
        .addTo(controller);


    var intro_conflicts = new ScrollMagic.Scene({
            triggerElement: '.conflicts',
            triggerHook: 1
        })
        .setClassToggle('.conflicts', "fadeTop")
        .addTo(controller);

    var intro_health2 = new ScrollMagic.Scene({
            triggerElement: '.health.second',
            triggerHook: 0.5
        })
        .setClassToggle('.health.second', "fadeSides")
        .addTo(controller);

    var intro_health2 = new ScrollMagic.Scene({
            triggerElement: '.housing.second',
            triggerHook: 0.3
        })
        .setClassToggle('.housing.second', "fadeSides")
        .addTo(controller);

});