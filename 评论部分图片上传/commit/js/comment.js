/**
 * @description  微商城的评论功能的js
 * @version 4.0
 * @author 高成伟
 * @since 2017-07-11
 */

/**
 * 简述
 *
 * 功能详细详述
 *
 * 函数countStar（count,grade）
 * 计算星星b
 * count:用户选中的星星数
 * grade:用户所选中的商品
 * 
 * 
 */
$(function() {
    //1、计算用户给的星星数
    $('.star-detail .star li').click(function() {
        var count = $(this).index(); //用户选中星星数
        var grade = $(this).parent().parent().parent().parent().parent().index(); //用户选择的商品评价
        countStar(count, grade); //调用方法
    });
});
//方法一：改变星星数
var countStar = function(count, grade) {
    var all = $('.star li').length; //  星星总数

    for (var i = 0; i <= count; i++) {
        $(".main:eq(" + grade + ") .star li:eq(" + i + ") img").prop('src', 'img/star1.png');
    }
    for (var j = count + 1; j <= all; j++) {
        $(".main:eq(" + grade + ") .star li:eq(" + j + ") img").prop('src', 'img/star2.png');
    }
}


/**
 *简述
 *功能详细详述
 *
 * 采用了uploadify插件用来上传用户的图片
 * uploadify(id){}
 * id:页面中用户拍图部分的id
 * 
 */
var uploadify = function(id) {
    id = '#'+id;
    var up = $(id).Huploadify({
        auto: false,
        fileTypeExts: '*.*',
        multi: true,
        formData: { key: 123456, key2: 'vvvv' },
        fileSizeLimit: 2048,
        showUploadedPercent: true,
        showUploadedSize: true,
        removeTimeout: 9999999,
        fileObjName: 'file',

        uploader: 'upload.php',
        onUploadStart: function(file) {
            // console.log(file.name + '开始上传');
            // addMasked(id);
            
        },
        onUploadComplete: function(file, data) {
            // console.log(file.name+'上传完成');
            // console.log(file)
            var m = $.parseJSON(data);// 获取到图片的地址m.data
            // console.log(m);
            if(m.status == 1){
                var val = file.index;//获取p标签中的value
                $('.maskImg[value='+val+']').find('.masked').remove();
                $('.maskImg[value='+val+']').find('.loading').remove();
                $('.maskImg[value='+val+']').find('.showImg').attr('src',m.data);
                

            }

        },
        onCancel: function(file) {
            console.log(file.name + '删除成功');
        },
        onClearQueue: function(queueItemCount) {
            console.log('有' + queueItemCount + '个文件被删除了');
        },
        onDestroy: function() {
            console.log('destroyed!');
        },
        onSelect: function(file) {
            // console.log(file.name + '加入上传队列');
            // console.log(file);
            // var count = $('.detail-pic .maskImg').length; //计算当前中的图片数
            var count = $(id).parent().find('.maskImg').length;
            console.log('有'+count+'个存在')
            if(count <5){
                addMasked(id,file.index);//添加蒙版
                up.upload('*');//上传图片
                count = $(id).parent().find('.maskImg').length;
            }else{
                var length = $('.gcw_toast').length;
                console.log(length);
                if($('.gcw_toast').length == 0){
                    toast_gcw('最多5张',1)
                }
                return false;
            }
        },
        onQueueComplete: function(queueData) {
           
        }
    });
}

$(function(){
    //获取页面上所以得商品总数
    var num = $('.productComit').length;
    //获取上传图片的id
    var arr = [];
    for(var j=0;j<num;j++){
        var id = $('.productComit:eq('+j+') .detail-pic>div').attr("id");
        arr.push(id);
    }
    // 向页面注入插件
    for(var i=0;i<arr.length;i++){
        uploadify(arr[i]);
    }
 
    
});
/**
 *简述
 *功能详细详述
 *deleteImg(picImg){}
 *picImg: $(this).parent()
 * 
 * 
 */

var deleteImg = function(picImg) {
    picImg.remove();

}


/**
 * 简述
 * 功能详细详述
 * 图片未加载出来时候显示的动画
 * addMasked
 */
var addMasked = function(id,val){
    $("<p class='maskImg' value='"+val+"'><img src='' class='showImg' alt='诱诱美鲜'/><span class='masked'></span><img src='img/loading.png' class='loading'/><img src='img/delete.png' id='dele' onclick='deleteImg($(this).parent())'/></p>").insertBefore(id);
}

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
            $('.gcw_toast').remove();
            if (cback != null) {
                cback();
            }
        }, time * 1000);
    } else {
        setTimeout(function() {
            $('.gcw_toast').remove();
        }, 1 * 1000);
    }
};

function callback() {
    console.log(222);
}
$(function() {
    toast_gcw('测试ok', 2, callback);
});