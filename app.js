$(document).ready(function(){
	var $box = $('.col')
	$("body").on('click','.location', function(){
		$('#top').children('span').text(($box.offset().top).toFixed(2));
		$('#left').children('span').text(($box.offset().left).toFixed(2));
		console.log("this works")
	});
	//$("body").on('click',function(){

	//})
})

function randomizer(min,max){
	return Math.random() * (max - min) + min;
}