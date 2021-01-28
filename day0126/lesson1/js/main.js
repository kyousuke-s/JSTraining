/*
$(function(){
	$('#logo').css({color:'yellow',fontSize:'30px'});
	$('#logo').on('click',function(){$(this).css({color:'red'})});
});
*/
/*メソッドチェーン
$(function(){
	$('#logo').css({color:'yellow',fontSize:'30px'})
	.on('click',function(){$(this).css({color:'red'})});
});
*/
$(function(){
	$('#logo').on('click',function(){
		$(this).animate({opacity:0,fontSize:'0px'},2000,function(){
			$(this).animate({opacity:1,fontSize:'140px'},2000,"easeOutBounce");
		});
	});
});

