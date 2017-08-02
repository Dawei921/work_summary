
// 验证手机号码
// 手机号码长度为11位的纯数字，以1开头

var ok1;
var ok2;
var ok3;
var ok4;
var ok5;
var ok6;
var num=31;

// 手机号码
function phoneNumber(){
	var number = document.getElementById("phonenumber").value;
	var phoneInfo= document.getElementById("phoneInfo");
	var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	if(!reg.test(number)){
		phoneInfo.className="error";
		$("phonenumber").className="errorbtn";
		phoneInfo.innerHTML="错误";
		ok1=false
	}else{
		$("phonenumber").className="";
		phoneInfo.innerHTML="通过";
		phoneInfo.className ="pass";
		ok1=true
	}
	console.log(ok1);

}
// 登录密码
function passwordNumber(){
	var number = document.getElementById("yz1").value;
	var phoneInfo= document.getElementById("phoneInfo1");
	var reg=/^\w{6,9}$/;
	if(!reg.test(number)){
		phoneInfo.className="error";
		$("yz1").className="errorbtn";
		phoneInfo.innerHTML="错误";
		ok2=false;
	}else{
		$("yz1").className="";
		phoneInfo.innerHTML="通过";
		phoneInfo.className ="pass";
		ok2= true;
	}
	console.log(ok2)
}
// 确认密码
function surepassword(){
	
	var phoneInfo= document.getElementById("phoneInfo2");
	if($("yz1").value==$("yz2").value&&($("yz2").value!="")){
		$("yz2").className="";
		phoneInfo.innerHTML="通过";
		phoneInfo.className ="pass";
		ok3=true;
	}else{
		phoneInfo.className="error";
		$("yz2").className="errorbtn";
		phoneInfo.innerHTML="错误";
		ok3= false;
		
	}
console.log(ok3)
}
// 常用邮箱
function email(){
	var number = document.getElementById("yz3").value;
	var phoneInfo= document.getElementById("phoneInfo3");
	var reg=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	if(!reg.test(number)){
		phoneInfo.className="error";
		$("yz3").className="errorbtn";
		phoneInfo.innerHTML="错误";
		ok4=false;
		
	}else{
		$("yz3").className="";
		phoneInfo.innerHTML="通过";
		phoneInfo.className ="pass";
		ok4= true;
		
	}
console.log("ok4"+ok4)
}
function checkerweima(){

	if($("yz4").value=='e7ab'){
		ok5=true;
	}else{
		ok5=false;
	}
	console.log("验证码"+$('yz4').value);
}
function checkbox(){
	if($("yz5").checked){
		
		ok6=true;
		console.log("ok6"+ok6)
	}else{
		
		ok6=false;
		console.log("ok6"+ok6)
	}
	console.log("ok6"+ok6)
}

function checkForm(){
	if(ok1&&ok2&&ok3&&ok4&&ok5&&ok6){
		$("tiaozhuanye").style.display = "block";
		doWrite();
		setTimeout("$('write').submit()", 2000)

	}else{
		alert("信息有错误，无法提交！");
	
	}
}


// 页面二
function checkSubmit(){


	if($("sureCheckbox").value=="123"){
		return true;
		
	}else{
		alert("请正确输入验证码")
		return false;
	}
}
// 倒计时
function sendyzm(){
	$("daojishi").disabled=true;
	num--;
	if(num>=1){
		$("daojishi").innerHTML=num+"后重新发送";
		setTimeout(sendyzm,1000)
	}else{
		$("daojishi").innerHTML="点击重新发送";
		num=31;
		$("daojishi").disabled=false;
		$("daojishi").style.background="#ff9000";
	}
	
}
// 登录功能
function DengLu(){
	$("DengLu").style.display='block';
	$("passwordnglu").style.display="block";
	$("denglufirst").className="touming";
}
// 手机验证码登录
/*function DengLu2(){
	console.log(1);
	$("passwordnglu").style.display="none";
	$("shoujidenglu").style.display="block";
}*/

window.onload = function(){
	sendyzm();

}
function show(flag){
	if(flag=='left'){
		$("passwordnglu").style.display="block";
		$("shoujidenglu").style.display="none";
	}else if(flag=='right'){
		$("passwordnglu").style.display="none";
	$("shoujidenglu").style.display="block";
	}
}

// 通用样式 点击透明边框 登录界面消失
function backbegin(){
	$("DengLu").style.display="none";
	$("denglufirst").className="";
}

//对第一个页面进行注册数据的存储
function doWrite(){
	loaclStorage.username = $("phonenumber").value;
	loaclStorage.password = $("yz1").value;
	loaclStorage.Email = $("yz3").value;
}












function $(id){
	return document.getElementById(id);
}