         var num = 1; //全局num用于判断选中的是哪种支付状态

         //余额或微信支付的选择按钮
         $('.weixin').on('click', function() {
             payChoice('.yue', '.weixin');
             num = 2;
             console.log(num);
         });
         $('.yue').on('click', function() {
             payChoice('.weixin', '.yue');
             num = 1;
             console.log(num);
         });

         function payChoice(one, two) {
             $(one).prop('src', 'img/weixuanzhong.png');
             $(two).prop('src', 'img/xuanzhong.png');
         }


         // 密码支付框
        $('.moni').on('click',function(){
            $('.ipt-real-nick').focus();
        })




         //点击确认支付，判断出现的提示框
         function paySubmit() {
             if (num == 1) {
                 var needMoney = parseFloat($('.needPay').find('span').html()); //获得待付金额
                 var balance = parseFloat($('.balance').html()); //获得余额金额
                 if (needMoney <= balance) {
                     payMoney();
                     $('.ipt-real-nick').focus();
                 } else if (needMoney > balance) {
                     bitMoney();
                 }
             } else if (num == 2) {
                 console.log('微信支付');
             }

         }

         //是否离开
         $('.head-c-left').find('a').on('click', function() {
           $.toast('成sdd的');
           // ifLeave();
           // ceshi();
         })



         // 余额不足提示框出现
         function bitMoney() {
             $('.mask').css('display', 'block');
             $('.dialog1').css('display', 'block');
         }
         //支付密码提示框
         function payMoney() {
             $('.mask').css('display', 'block');
             $('.dialog2').css('display', 'block');
        
         }
         //离开提示框
         function ifLeave() {
             $('.mask').css('display', 'block');
             $('.dialog3').css('display', 'block');
         }
         //支付密码的输入控制
         $('.ipt-real-nick').on('input', function() {
             var $input = $('.ipt-fake-box input');
             if (/^[0-9]*$/g.test($(this).val())) {
                 //只能是数字
                 var pwd = $(this).val().trim();
                 for (var i = 0, len = pwd.length; i < len; i++) {
                     $input.eq(i).val(pwd[i]);
                 }
                 //清楚真的Input中的数字
                 $input.each(function() {
                     var index = $(this).index();
                     if (index >= len) {
                         $(this).val('');
                     }
                 });
             }
         });


         // 关闭提示框
         $('.close').on('click', function() {
             $('.mask').css('display', 'none');
             $('.dialog2').css('display', 'none');
             $('.dialog1').css('display', 'none');
             $('.dialog3').css('display', 'none');
         });


// 支付成功消息提示框
         $.toast = function(text) {
             $('.Payment-failed').css('display', 'block');
             $('.Payment-failed').find('span').html(text);
             var width = $('.Payment-failed').width();
             var height = $(window).height();
             var width = parseFloat(-(width/100) )+ 'rem';
             var height = parseFloat(-(height/100) )+ 'rem';
            
             $('.Payment-failed').css('margin-left',width);
             // $('.Payment-failed').css('margin-top',height);

             setTimeout("$('.Payment-failed').css('display', 'none')",2000);


        }
