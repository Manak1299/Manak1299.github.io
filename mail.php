<?php
extract($_POST);
$to = "mnkgrwl94@gmail.com";
$subject = "Websiteinquiry - $subject";
$txt = "Hi i'm $name , $msg";
$headers = "admin@silverwingtechnologies.com";

mail($to, $subject,$txt,$headers);
header("location: index.html");
?>