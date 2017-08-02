/*
* @Author: David_gao
* @Date:   2017-07-18 16:17:25
* @Last Modified by:   David_gao
* @Last Modified time: 2017-07-18 16:17:38
*/

'use strict';
/**
 * [menban description]
 * 提示框显示
 * toast_gcw(text,time,cback);
 * text:要上传的文字
 * time:消失的时间
 * cback:消失后回掉的函数
 * 
 */
function toast_gcw(text, time, cback) {
    //向body中添加内容
    $("<div class='gcw_toast' style='position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);padding:10px;border-radius:10px;color:#fff;background:rgba(0,0,0,0.5);'>" + text + "</div>").appendTo('body');
    //设置定时器控制蒙版显示与隐藏
    if (time != null) {
        setTimeout(function() {
            $('.gcw_toast').hide();
            if (cback != null) {
                cback();
            }
        }, time * 1000);
    } else {
        setTimeout(function() {
            $('.gcw_toast').hide();
        }, 1 * 1000);
    }
};
