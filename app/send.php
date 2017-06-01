<?php
	// $data = $_POST['telephone'];
	// $message = $data;
	// $message = "ghdfgh";
	// $headers[] = 'MIME-Version: 1.0';
	// $headers[] = 'Content-type: text/html; charset=windows-1251';
	// $headers[] = 'From: VeloworldMail@example.ru';
	// $headers[] = 'Cc: VeloworldMail@example.ru';
	// $headers[] = 'Bcc: VeloworldMail@example.ru';

	// mail("tatarrr95@gmail.com", "Proverka", $message, implode("\r\n", $headers));
	// mail("tatarrr95@gmail.com", "Proverka", "fghfghfghfgh");
	$to      = 'tatarrr95@gmail.com';
	$subject = 'the subject';
	$message = 'hello';
	$headers = 'From: webmaster@example.com' . "\r\n" .
	    'Reply-To: webmaster@example.com' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
?>