<?php 
session_start();


if(isset($_POST['files'])){
        $files = $_POST['files'];
        
        foreach($files as $key => $value) {
        	
        	unlink('../har_files/'.$_SESSION['useruid'].'/'.$value.'');
        }
        header("location:../heatmap.php");
    }else{
    	header("location:see_uploaded_files.inc.php?error=noFileSelected");
    }