$(document).ready(function () {
    var controller = new ScrollMagic.Controller();


    var introfreedomOf = new ScrollMagic.Scene({
            triggerElement: '.freedomOf',
            triggerHook: 0.8
        })
        .setClassToggle('.freedomOf', "fade")
        //.addIndicators()
        .addTo(controller);

    var introfreedomOf = new ScrollMagic.Scene({
            triggerElement: '.health',
            triggerHook: 0.9
        })
        .setClassToggle('.health', "fadeSides")
        .addTo(controller);

    var introfreedomOf = new ScrollMagic.Scene({
            triggerElement: '.housing',
            triggerHook: 0.8
        })
        .setClassToggle('.housing', "fadeSides")
        .addTo(controller);

    var introfreedomOf = new ScrollMagic.Scene({
            triggerElement: '.protectionFrom',
            triggerHook: 0.8
        })
        .setClassToggle('.protectionFrom', "fadeSides")
        .addTo(controller);

    var introfreedomOf = new ScrollMagic.Scene({
            triggerElement: '.integrity',
            triggerHook: 0.8
        })
        .setClassToggle('.integrity', "fadeSides")
        .addTo(controller);

    var introfreedomOf = new ScrollMagic.Scene({
            triggerElement: '.education',
            triggerHook: 0.8
        })
        .setClassToggle('.education', "fadeSides")
        .addTo(controller);


    /*----Infringed----*/

    var introfreedomOf = new ScrollMagic.Scene({
            triggerElement: '.discrimination',
            triggerHook: 0.7
        })
        .setClassToggle('.discrimination', "fadeSides")
        .addTo(controller);

    var introfreedomOf = new ScrollMagic.Scene({
            triggerElement: '.opressionOf',
            triggerHook: 0.7
        })
        .setClassToggle('.opressionOf', "fadeSides")
        .addTo(controller);

    /*----Arrows scroll----*/

    var introfreedomOf = new ScrollMagic.Scene({
            triggerElement: '.arrow1',
            triggerHook: 0.7
        })
        .setClassToggle('.arrow1', "fadeTop")
        .addIndicators()
        .addTo(controller);
});