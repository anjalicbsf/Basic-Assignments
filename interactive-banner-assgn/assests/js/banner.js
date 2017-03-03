$(document).ready(function(){
  $('.img-base').hover(function(){
			$('.panel').addClass('open');
			$('.img-parent').addClass('open');
		},function(){
			$('.panel').removeClass('open');
			$('.img-parent').removeClass('open');
		});
})

