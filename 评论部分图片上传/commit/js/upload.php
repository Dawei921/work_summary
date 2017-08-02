<?php
/*
Uploadify
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

// Define a destination
$targetFolder = '/uploads'; // Relative to the root

//$verifyToken = md5('unique_salt' . $_POST['timestamp']);

//if (!empty($_FILES) && $_POST['token'] == $verifyToken) {
	
	
	// Validate the file type
	$fileTypes = array('jpg','jpeg','gif','png'); // File extensions
	$fileParts = pathinfo($_FILES['Filedata']['name']);
	
	if (in_array($fileParts['extension'],$fileTypes)) {

		$filename=time();
		
		$targetPath = $_SERVER['DOCUMENT_ROOT'] . $targetFolder;
		$targetFile = rtrim($targetPath,'/') . '/' . $filename.".".$fileParts['extension'];

		$show_url=$_SERVER['SERVER_NAME'].$targetFolder.'/' . $filename.".".$fileParts['extension'];
		$tempFile = $_FILES['Filedata']['tmp_name'];
		move_uploaded_file($tempFile,$targetFile);
		$rtn=array(
			"data"=>$show_url,	
			"info"=>"上传成功",
			"status"=>1
		);
		echo json_encode($rtn);
			die;
	} else {
		$rtn=array(
			"data"=>"",	
			"info"=>"上传失败",
			"status"=>0
		);
		echo json_encode($rtn);
			die;
	}
//}
?>