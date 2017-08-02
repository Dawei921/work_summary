
//3f点击切换
$(document).ready(function(){
	
	var lb = $("#limit-buy"),
		lb_cur = 1,
		lbp_w = lb.find(".products").width();
		lb_timer = null;
	t = 1;
	function showLimitBuyProducts(){
		if(lb_cur < 1){
			lb_cur = 2;
		} else if(lb_cur > 2){
			lb_cur = 1;
		}
		$("#J-lbcp").html(lb_cur);
		var products = $("#limit-buy .products").hide().eq(lb_cur-1).show(),
			ta = products.find("textarea");
			
		if(ta.length){
			products.html(ta.val());
		}
	}

	
	$("#J-lbn .prev, #J-lb .btn-prev").click(function(){
		lb_cur--;
		showLimitBuyProducts();
	});
	$("#J-lbn .next, #J-lb .btn-next").click(function(){
		lb_cur++;
		showLimitBuyProducts();
	});
	$("#J-lb").hover(function(){
			
			
			$("#J-lb .btn-prev, #J-lb .btn-next").show();
		}, function(){
			
			$("#J-lb .btn-prev, #J-lb .btn-next").hide();
	});
	
});
