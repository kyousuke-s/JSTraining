/*
$(function(){
	$('.image').on('mouseover',function(){
		$(this).find('strong').stop(true).animate({opacity:1},400);
	})
	.on('mouseout',function(){
		$(this).find('strong').stop(true).animate({opacity:0},400);
	});
});
*/

$(function(){
	//この書き方を、部品をキャッシュしておくと言う
	let $ele=$('strong');
	$('.image').on('mouseover',function(){
		$ele.stop(true).animate({opacity:1,left:'0%'},400);
	})
	.on('mouseout',function(){
		$ele.stop(true).animate({opacity:0,left:'-200%'},400);
	});
	$('#menus li').each(function(i){ //
		$(this).css({top:(i%2==0? -5:5)+'px',left:i*110+'px'})
		.on('mouseover',function(){
			$(this).animate({width:'110px',height:'110px',lineHeight:'110px'},200);
		})
		.on('mouseout',function(){
			$(this).animate({width:'100px',height:'100px',lineHeight:'100px'},200);
		});
	});
});
