window.onload = function() {
	const sliders = document.querySelectorAll( '.aa-simple-slider' );

	sliders.forEach( function( slider ) {
		// eslint-disable-next-line no-unused-vars, no-undef
		const simpleSlider = tns( {
			container: slider,
			items: 1,
			slideBy: 'page',
			autoplay: true,
		} );
	} );
};
