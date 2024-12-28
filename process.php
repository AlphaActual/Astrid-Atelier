<?php 

if(isset($_POST['email']) && $_POST['email'] != '')
{
    $recaptchaSecret = '6LfNPagqAAAAAPQz_gWPXhMlg4TbW7PLbl_hgYix';
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptchaData = array(
        'secret' => $recaptchaSecret,
        'response' => $recaptchaResponse
    );

    $options = array(
        'http' => array(
            'method'  => 'POST',
            'content' => http_build_query($recaptchaData)
        )
    );

    $context  = stream_context_create($options);
    $verify = file_get_contents($recaptchaUrl, false, $context);
    $captchaSuccess = json_decode($verify);

    if ($captchaSuccess->success) {
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
    } else {
        echo "reCAPTCHA verification failed. Please try again.";
    }
};

?>