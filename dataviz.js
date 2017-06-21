$(document).ready(function() {

	var before = "http://codewithme.us/images/before.jpg";
	var after = "http://codewithme.us/images/after.jpg";

$(".image-frame").click(function(){

	$(".after").show(1000);

	$(".after").animate({'opacity': 1}, 1000)

$(".image-frame").click(function(){

 	$(".after").hide();

});
});

});