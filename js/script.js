
/***************************
off canvas navigation position
***************************/

$(function(){
	$(".navToggle").click(function(){
		$(".navigation").toggleClass("active", 2000, 'easeInQuad');
	});

	var buttonHeight = $(".toggleButton").height();

	if($(window).width()< 768){
		$(".navigation").css("top", buttonHeight * 3);
	} 



});

/***************************
modal gallery
****************/

$(document).ready(function() {
$('.thumbnail').click(function(){
      $('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	var content = $(this).parent('a').attr("content");
  	var price = $(this).parent('a').attr("price");;
  	console.log(content);
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	$('.modal-body').append(content, "<br>");
  	$('.modal-body').append(price);
  	$('#myModal').modal({show:true});
});
});