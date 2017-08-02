<?php

$targetFolder = '/uploads'; // Relative to the root

	$fileParts = pathinfo($_FILES['file']['name']);


		$filename=time().rand_string();
		
		$targetPath = $_SERVER['DOCUMENT_ROOT'] . $targetFolder;
		$targetFile = rtrim($targetPath,'/') . '/' . $filename.".".$fileParts['extension'];

		$show_url="http://".$_SERVER['SERVER_NAME'].$targetFolder.'/' . $filename.".".$fileParts['extension'];
		$tempFile = $_FILES['file']['tmp_name'];
		move_uploaded_file($tempFile,$targetFile);
		$rtn=array(
			"data"=>$show_url,	
			"info"=>"上传成功",
			"status"=>1
		);
		echo json_encode($rtn);
			die;
	
/**
 *@date: 2017-2-16
 *@author: yxj
 *@description: 获取随机位数数字，用于生成短信验证码
 * @param  $len 长度
 * @return string
 */
function rand_string($len = 6){
    $chars = str_repeat('0123456789', $len);
    $chars = str_shuffle($chars);
    $str   = substr($chars, 0, $len);
    return $str;
}
?>