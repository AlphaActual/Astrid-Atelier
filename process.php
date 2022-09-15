<?php 


if(isset($_POST['email']) && $_POST['email'] != '')
{
       
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $messageSubject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "astrid.pritisanac@gmail.com, tin.priti@gmail.com, branko.priti@gmail.com";
    $body = "";

    $body .= "From: ".$userName. "\r\n";
    $body .= "Email: ".$userEmail. "\r\n";
    $body .= "Message: ".$message. "\r\n";
    
    mail($to,$messageSubject,$body);
    echo "<script type='text/javascript'>window.location.href='https://astridpritisanac.com/index.html'</script>";
   
};

?>