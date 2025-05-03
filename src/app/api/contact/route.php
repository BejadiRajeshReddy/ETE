<!-- <?php

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require 'vendor/autoload.php'; // Make sure PHPMailer is installed and autoloaded

// $dotenv = Dotenv\Dotenv::createImmutable(__DIR__); // Use the directory where .env file is located
// $dotenv->load();

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     // Retrieve POST data from the form
//     $data = json_decode(file_get_contents('php://input'), true);
//     $name = $data['name'];
//     $email = $data['email'];
//     $phone = $data['phone'];
//     $subject = $data['subject'];
//     $message = $data['message'];

//     // Create a new PHPMailer instance
//     $mail = new PHPMailer(true);

//     try {
//         // Server settings
//         $mail->isSMTP();
//         $mail->Host = 'smtp.gmail.com';          // Set the SMTP server
//         $mail->SMTPAuth = true;
//         $mail->Username = getenv('NEXT_PUBLIC_EMAIL_USER');  // Gmail account email
//         $mail->Password = getenv('NEXT_PUBLIC_EMAIL_PASS');  // Gmail account password
//         $mail->SMTPSecure = 'tls';               // Encryption type
//         $mail->Port = 587;                      // SMTP port

//         // Recipients
//         $mail->setFrom($email, $name);  // Sender's email and name
//         $mail->addAddress(getenv('NEXT_PUBLIC_EMAIL_TO')); // Recipient email

//         // Content
//         $mail->isHTML(false);  // Set email format to plain text
//         $mail->Subject = "New Message from $name: $subject";
//         $mail->Body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

//         // Send the email
//         $mail->send();
        
//         // Return a success response
//         header('Content-Type: application/json');
//         echo json_encode(['success' => true]);
//         http_response_code(200);
//     } catch (Exception $e) {
//         // Return an error response if email sending fails
//         error_log("Error sending email: {$mail->ErrorInfo}");
//         header('Content-Type: application/json');
//         echo json_encode(['success' => false, 'error' => 'Failed to send email']);
//         http_response_code(500);
//     }
// }
 ?> //
 -->
