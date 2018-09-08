$(window).scroll(function(){

	let wScroll = $(this).scrollTop();

	if(wScroll > $('.sub-post-two').offset().top -300){
		$('.sub-post-two').addClass('show');
	}

	if(wScroll > $('.posting-one').offset().top -350){
		$('.posting-one').addClass('show');
	}


	if(wScroll > $('.sub-trend-video').offset().top -350){
		$('.sub-trend-video').addClass('show');
	}


})