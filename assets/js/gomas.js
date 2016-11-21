$(document).ready(function(){
	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();
    
	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg_parallax',
		triggerHook: 1,
		duration: '200%'
	})
	.setTween(TweenMax.from('.bcg', 1, {y: '-50%', ease:Power0.easeNone}))
	.addTo(controller);


	var pinIntroScene8 = new ScrollMagic.Scene({
		triggerElement: '#E1',
        triggerHook: 0.8
	})
	.setClassToggle('#E1', "fade")
	.addTo(controller);

	var pinIntroScene9 = new ScrollMagic.Scene({
		triggerElement: '#Layer_1',
        triggerHook: 0.5,
        duration: '10%'
	})
	.setClassToggle('#boneco', "size")
	.addTo(controller);

	var pinIntroScene10 = new ScrollMagic.Scene({
		triggerElement: '#Layer_1',
        triggerHook: 0.4,
        duration: '20%'
	})
	.setClassToggle('#boneco-2', "size")
	.addTo(controller);

	var pinIntroScene11 = new ScrollMagic.Scene({
		triggerElement: '#Layer_1',
        triggerHook: 0.3,
        duration: '30%'
	})
	.setClassToggle('#boneco-3', "size")
	.addTo(controller);

	var pinIntroScene12 = new ScrollMagic.Scene({
		triggerElement: '#civil',
        triggerHook: 0.7
	})
	.setClassToggle('#civil', "fade")
	.addTo(controller);

});

    $( "#graph" ).scroll(function() {
  $( "p" ).append("oi");
});
















