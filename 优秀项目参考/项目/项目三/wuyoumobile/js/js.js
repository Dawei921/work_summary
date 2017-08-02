$(function() {

	//	banner图轮播
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		spaceBetween: 10,
		centeredSlides: true,
		autoplay: 3000,
		autoplayDisableOnInteraction: false
	});

	//右侧栏
	var num = 1;
	$("#doclick").click(function() {
		console.log(1);
		if(num == 1) {
			$(".slide_right").animate({
				"right": "0"
			}, 1000);
			$(".slide_left").animate({
				"right": "3rem"
			}, 1000);
			$("#doclick").attr("src", "images/ico_btn2.png");
			$("#doclick").bind('touchmove', function(event) {
				event.preventDefault();
			});
			num=2;
		}else if(num==2){
			$(".slide_right").animate({
				"right":"-3rem"
			},1000);
			$(".slide_left").animate({
				"right":"0rem"
			},1000);
			$("#doclick").attr("src","images/ico_btn2_hov2.png");
			$("#doclick").bind('touchmove', function(event) {
				event.preventDefault();
			});
			num=1;
			
		}
	})
//	头条上滑动
//理解：让第一个Li向上滑动后，让他位置还原，不过通过appendTo让他位置到ul中的最后一个去
	/**
		
	*/
	function moveup(){
		$(".headnews_up li:first").animate({
		"margin-top":"-0.4rem",
		},1000,function(){
			$(this).css("margin-top",0).appendTo(".headnews_up");
		})
	}
	var timer = setInterval(moveup,1000);
//	当鼠标移入的时候清楚定时器
	$(".headnews_up li").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(moveup,1000);
	})
	
//	选项卡切换
/*思路:1.初始化为:给foo里都添加一个slide事件 ,让除了第一个 其他得都先hide(),too中给第一个添加class为on的样式,
	2.用each遍历整个too中的li, 读取索引值,当点击时,给点击的添加样式on,其他的通过siblings()移除样式,
	3.让所有的foo先都隐藏了  然后显示索引为index的那个li*/
	$(".foo .slide:gt(0)").hide();
	$(".too li").each(function(index){
		$(this).click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			
			$(".foo .slide").hide().eq(index).show();
		})
	})
//	加载更多
	var num2=1;
	$("#moremessage").click(function(){
			if(num2==1){
				$(".foo .slide:eq(5)").show();
				$("#moremessage").text("点击收起更多");
				num2=2;
			
			}else if(num2==2){
				$(".foo .slide:eq(5)").hide();
				$("#moremessage").text("点击加载更多");
				num2=1;
			}
	})
	
//	优选留学方案
	var b=1;
	$(".youxuanliuxuexuanxiang").hide();
	$("#open").click(function(){
		if(b==1){
			$(".youxuanliuxuexuanxiang").show();
			$("#open img").attr("src","images/shangla_icon1.png")
			b=2;
		}else if(b==2){
			$(".youxuanliuxuexuanxiang").hide();
			$("#open img").attr("src","images/xiala_icon1.png ")
			b=1;
		}
	})
//	返回顶部
//scrollTop()滚动条的高度
	$(window).scroll(function(event){
		$(window).scrollTop() >200 ? $(".backtop").show() : $(".backtop").hide();
	});
	$(".backtop img").click(function(){
		$("html,body").animate({"scrollTop":0},500);
	})
		
//	底部指纹按钮显示与隐藏
var numbers=1;
	$(".zhiwenmenu").siblings().hide();
	$(".zhiwenmenu").click(function(){
		if(numbers==1){
			$(this).siblings().show();
			$(this).siblings('.zhiwen-pic-one').animate({"left":"1rem"},2000);
			$(this).siblings('.zhiwen-pic-two').animate({"left":"1.85rem"},2000);
			$(this).siblings('.zhiwen-pic-three').animate({"left":"2.70rem"},2000);
			$(this).siblings('.zhiwen-pic-four').animate({"left":"3.55rem"},2000);
			$(this).siblings('.zhiwen-pic-five').animate({"left":"4.40rem"},2000);
			$(".zhiwenmenu img").attr("src","images/ico_btn25.png");
			// $(".zhiwenmenu img").animate({'src':'images/ico_btn25.png'},2000)
			numbers=2;
		
		}else if(numbers==2){
		
		$(this).siblings('.zhiwen-pic-one').animate({"left":"0px"},2000);
		$(this).siblings('.zhiwen-pic-two').animate({"left":"0px"},2000);
		$(this).siblings('.zhiwen-pic-three').animate({"left":"0px"},2000);
		$(this).siblings('.zhiwen-pic-four').animate({"left":"0px"},2000);
		$(this).siblings('.zhiwen-pic-five').animate({"left":"0px"},2000);
		$(".zhiwenmenu img").attr("src","images/ico_btn22.png");
		// $(".zhiwenmenu").siblings().hide();
		numbers=1;
		}
	})
//	黄色弹框
	var tk=1;
	var timers;
	$(".fudongwindow").hide();
	function tankuan(){
		$(".fudongwindow").show();
		clearInterval(timers);
		console.log(2);
	}
	// function jishiqi(){
	// 	timers = setInterval(tankuan,2000);
	// }
	if(tk==1){
		jishiqi();
	}
	$(".guanbi").click(function(){
		$(".fudongwindow").hide();
		jishiqi();

		
	})
	
	
})