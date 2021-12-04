<?php

if(isset($_POST['submit'])){

    if(isset($name) || isset($email) || isset($subject) || isset($content)){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $content = $_POST['message'];
    
    $message ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $content; 
    
    $subject =$subject;
    $fromname =$name;
    $fromemail = $email;

    $mailto = 'support@intelyticslimited.com';




    
    

    $eol = "\r\n";

    $headers = "From: ".$fromname." <".$fromemail.">" . $eol;
    $headers .= "MIME-Version: 1.0" . $eol;
    $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
    $headers .= "This is a MIME encoded message." . $eol;

    // message
    $body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
    $body .= "Content-Transfer-Encoding: 8bit" . $eol;
    $body .= $message . $eol;


    //SEND Mail
    if (!mail($mailto, $subject, $body, $headers)) {
        $arrayName = array("stat"=>0, "msg"=>"Your mail was successfully sent. Toba Adept Admin will revert ASAP!");
        echo json_encode($arrayName);
        
    } 

    }  
    else {
        $arrayName = array("stat"=> 1, "msg"=>"Oopss!! An Error occurred, Couldnt send your mail!");
          echo json_encode($arrayName);
        
    }
        
}