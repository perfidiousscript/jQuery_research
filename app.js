$(document).ready(function(){
	var $box = $('.col')
	$("body").on('click','.location', function(){
		$('#top').children('span').text(($box.offset().top).toFixed(2));
		$('#left').children('span').text(($box.offset().left).toFixed(2));
		console.log("this works")
	});
	$(".col").on('click',function(){
		$('.col').offset({top:randomizer(5,142),left:randomizer(5,883)})
	})
})

function randomizer(min,max){
	return Math.random() * (max - min) + min;
}