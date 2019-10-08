<?php

//identificação para a chamada da classe

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;	

// if (isset($_POST['enviar'])) 
// {
	

// Inclui os arquivos PHPMailer.php e Exception.php e SMTP.php localizados na pasta PHPMailer/src

require "PHPMailer/src/PHPMailer.php";
require "PHPMailer/src/Exception.php";
require "PHPMailer/src/SMTP.php";

 

// resgatando os dados passados pelo form

$nome = $_POST['nome'];

$email = $_POST['email'];

$whatsapp = $_POST['whatsapp'];

$compra = $_POST['compra'];

// instanciando a classe
    $mail = new PHPMailer();  
	
//  opçao de idioma, setado como br	
    $mail->SetLanguage("br"); 

// habilitando SMTP	
    $mail->IsSMTP(); 

// enviando como HTML
    $mail->IsHTML(true); 
	
// Pode ser: 0 = não exibe erros, 1 = exibe erros e mensagens, 2 = apenas mensagens	
    $mail->SMTPDebug = 0;  
	
// habilitando autenticação	
    $mail->SMTPAuth = true;  
	
// habilitando tranferêcia segura (obrigatório)	
    $mail->SMTPSecure = 'tls'; 


// Configurações para utilização do SMTP do Gmail  

    $mail->Host = 'smtp.gmail.com';

    $mail->Port = 587; // Porta de envio de e-mails do Gmail

    $mail->Username = 'zecon.polaris@gmail.com';

    $mail->Password = 's3nh4n40s1mpl3s';

    $mail->CharSet = "utf-8";

// Remetente da mensagem

    $mail->SetFrom($email);
	
// Endereço de destino do email
    $mail->AddAddress('zecon@zecon.eng.br'); //zecon@zecon.eng.br
	
// Endereço para resposta
	
	$mail->addReplyTo($email);

// Assunto e Corpo do email

    $mail->Subject = "Tenho Interesse";

    
    $mensagem = "<br> 
     Enviado por: ".$email." <br>
    Nome = ".$nome."<br>
    whatsapp = ".$whatsapp."<br>
    compra = ".$compra ;


    $mail->Body = $mensagem;
// Enviando o email

    if(!$mail->Send())

    {

        $message = "PhpMailer Gmail status: " . $mail->ErrorInfo;
        
    } else {

        $message = "E-mail SMTP enviado com sucesso para trexvion@gmail.com. Enviado por: ".$email ;


 }
 return  $message;


?>

 