<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$company = $_POST['company'];
$FullName = $_POST['FullName'];
$phone = $_POST['phone'];
$email = $_POST['email'];


require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';
$mail->IsHTML(true);


   //  //Server settings
   //  $mail->SMTPDebug = 2;                      //Enable verbose debug output
   //  $mail->isSMTP();                                            //Send using SMTP
   //  $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
   //  $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
   //  $mail->Username   = '3060615@gmail.com';                     //SMTP username
   //  $mail->Password   = 'mcbhtnqxwlwiadmj';                         //SMTP password  
	//  $mail->SMTPSecure = 'ssl';                                       //Enable implicit TLS encryption
   //  $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
	$mail->setFrom('3060615@gmail.com', 'Dominant-Express');
   $mail->addAddress('contact@annaprodev.com');     //Add a recipient
   //  $mail->addAddress('ellen@example.com');               //Name is optional
   //  $mail->addReplyTo('info@example.com', 'Information');
   //  $mail->addCC('cc@example.com');
   //  $mail->addBCC('bcc@example.com');

    //Content
   $mail->isHTML(true);                       //Set email format to HTML
	$mail->Subject = 'Form DominantExpress';
	$mail->Body    = '<h2>This message was sent from a form on the website.</h2> </br>
	<b>Company:</b> ' . $company . '<br>
	<b>Full name:</b> ' . $FullName . '<br>
	<b>Phone number:</b> ' . $phone . '<br>
	<b>Email:</b> ' . $email . '';
	if(!$mail->send()) {
		return false;
  } else {
		return true;
  }
?>