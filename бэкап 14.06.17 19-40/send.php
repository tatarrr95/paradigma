<?php
if(isset($_POST['telephone'])){
	// $data = $_POST['telephone'];
	// $message = $data;
	// $message = "ghdfgh";
	// $headers[] = 'MIME-Version: 1.0';
	// $headers[] = 'Content-type: text/html; charset=windows-1251';
	$headers[] = 'From: support@paradigmavl.ru';
	$headers[] = 'Cc: support@paradigmavl.ru';
	$headers[] = 'Bcc: support@paradigmavl.ru';

	// mail("tatarrr95@gmail.com", "Proverka", $message, implode("\r\n", $headers));
	// mail("tatarrr95@gmail.com", "Proverka", "fghfghfghfgh");
	ini_set("SMTP", "smtp.timeweb.ru");
    ini_set("sendmail_from", "support@paradigmavl.ru");

    if(isset($_POST['title']))
    	$message = "Поступил запрос с сайта о консультации по вопросу '".$_POST['title']."'. Контактные данные: ".$_POST['telephone'];
    else
    	$message = "Поступил запрос с сайта о консультации. Контактные данные: ".$_POST['telephone'];

    // $headers = "From: hello@paradigmavl.ru";


    mail("tatarrr95@gmail.com, zakaz@paradigma-profi.ru", "Заявка с сайта paradigma-profi.ru", $message, implode("\r\n", $headers));
    echo "Check your email now....<BR/>";
}
?>