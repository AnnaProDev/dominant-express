<?php

$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


    //Server settings
   //  $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '3060615@gmail.com';                     //SMTP username
    $mail->Password   = 'sdnnvayranpfpnaj';
	 $mail->SMTPSecure = 'ssl';                                //SMTP password
   //  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
	$mail->setFrom('9132543@gmail.com', 'MyWebsite');
    $mail->addAddress('3060615@gmail.com');     //Add a recipient
   //  $mail->addAddress('ellen@example.com');               //Name is optional
   //  $mail->addReplyTo('info@example.com', 'Information');
   //  $mail->addCC('cc@example.com');
   //  $mail->addBCC('bcc@example.com');

    //Attachments
   //  $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
   //  $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
   $mail->isHTML(true);
	                                  //Set email format to HTML
	$mail->Subject = 'Message';
	$mail->Body    = '<h1>User left message <br> for YOU!</h1> </br>
						Name:' . $name . ' <br>
						Email: '. $email . ' <br>
						Message: ' . $text . '';

	if(!$mail->send()) {
		return false;
  } else {
		return true;
  }

?>