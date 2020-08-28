/**
 * Adjust slider settings in this file
 * Tiny Slider 2 documentation: https://github.com/ganlanyuan/tiny-slider
 */

window.onload = function() {
	const sliders = document.querySelectorAll( '.aa-simple-slider' );
	const controlArrows = [
		'&#x027EA;', //left arrow
		'&#x027EB;', //right arrow
	];

	sliders.forEach( function( slider ) {
		// eslint-disable-next-line no-unused-vars, no-undef
		const simpleSlider = tns( {
			container: slider,
			items: 1,
			slideBy: 'page',
			controlsPosition: 'bottom',
			navPosition: 'bottom',
			controlsText: controlArrows,
			autoHeight: 'true',
		} );
	} );
};
