<?php

if(isset($_POST['submit'])) {
  $to = "sadrh97@gmail.com";
  $subject = "Message from Portafolio Form";
  $message = $_POST['message'];
  $headers = "From: ".$_POST['email'];

  mail($to, $subject, $message, $headers);

  echo "Thank you for your message.";
}

?>