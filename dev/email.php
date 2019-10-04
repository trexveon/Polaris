<?php
// require 'mailer/PHPMailerAutoload.php';
require_once("phpmailer/class.phpmailer.php");
require_once("phpmailer/class.smtp.php");
        
if (isset($_POST['nome']) && !empty($_POST['nome'])) {
    $nome = $_POST['nome'];
}

if (isset($_POST['email']) && !empty($_POST['email'])) {
    $email = $_POST['email'];
}

if (isset($_POST['whatsapp']) && !empty($_POST['whatsapp'])) {
    $whatsapp = $_POST['whatsapp'];
}

if (isset($_POST['compra']) && !empty($_POST['compra'])) {
    $compra = $_POST['compra'];
}

$mensagem =  'nome ='.$nome.'<br>
whatsapp = '.$whatsapp.'<br>
compra ='.$compra;

# Inicia a classe PHPMailer
$mail = new PHPMailer();

# Define os dados do servidor e tipo de conexão
$mail->IsSMTP(); // Define que a mensagem será SMTP
$mail->Host = "trexvion@gmail.com"; # Endereço do servidor SMTP
$mail->Port = 587; // Porta TCP para a conexão
$mail->SMTPAutoTLS = false; // Utiliza TLS Automaticamente se disponível
$mail->SMTPAuth = true; # Usar autenticação SMTP - Sim
$mail->Username = 'trexvion@gmail.com'; # Usuário de e-mail
$mail->Password = 'Klapaucius1990'; // # Senha do usuário de e-mail

# Define o remetente (você)
$mail->From = $email; # Seu e-mail
$mail->FromName = $nome; // Seu nome

# Define os destinatário(s)
$mail->AddAddress('trexvion@gmail.com', 'Everton Vargas Guetierres'); # Os campos podem ser substituidos por variáveis
#$mail->AddAddress('webmaster@nomedoseudominio.com'); # Caso queira receber uma copia
#$mail->AddCC('ciclano@site.net', 'Ciclano'); # Copia
#$mail->AddBCC('fulano@dominio.com.br', 'Fulano da Silva'); # Cópia Oculta

# Define os dados técnicos da Mensagem
$mail->IsHTML(true); # Define que o e-mail será enviado como HTML
#$mail->CharSet = 'iso-8859-1'; # Charset da mensagem (opcional)

# Define a mensagem (Texto e Assunto)
$mail->Subject = "Mensagem Teste"; # Assunto da mensagem
$mail->Body = $mensagem;
$mail->AltBody = "Este é o corpo da mensagem de teste, somente Texto! \r\n :)";

# Define os anexos (opcional)
#$mail->AddAttachment("c:/temp/documento.pdf", "documento.pdf"); # Insere um anexo

# Envia o e-mail
$enviado = $mail->Send();

# Limpa os destinatários e os anexos
$mail->ClearAllRecipients();
$mail->ClearAttachments();

# Exibe uma mensagem de resultado (opcional)
if ($enviado) {
 echo "E-mail enviado com sucesso!";
} else {
 echo "Não foi possível enviar o e-mail.";
 echo "<b>Informações do erro:</b> " . $mail->ErrorInfo;
}


// if(!$mail->send()) {
//     echo 'Não foi possível enviar a mensagem.<br>';
//     echo 'Erro: ' . $mail->ErrorInfo;
// } else {
//      header('Location: index.html?enviado');
// }



?>
     
   