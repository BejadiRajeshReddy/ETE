 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

Now you can access the environment variables
$smtpHost = $_ENV['SMTP_HOST'];
$smtpUser = $_ENV['SMTP_USER'];
$smtpPass = $_ENV['SMTP_PASS'];
$smtpPort = $_ENV['SMTP_PORT'];

$data = json_decode(file_get_contents("php:input"), true);

if ($data) {
    $name = isset($data['name']) ? $data['name'] : 'Anonymous';
    $email = isset($data['email']) ? $data['email'] : 'No email';
    $message = isset($data['message']) ? $data['message'] : 'No message';
    $service = isset($data['service']) ? $data['service'] : 'No service';
    $phone = isset($data['phone']) ? $data['phone']  : 'No phone';
    $name_of_org = isset($data['NameOfOrg']) ? $data['NameOfOrg'] : 'No name_of_org';

    $mail = new PHPMailer(true);

    try {
        Server settings
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUser; 
        $mail->Password = $smtpPass; 
        $mail->SMTPSecure = 'tls';
        $mail->Port = $smtpPort;

        Recipients
        $mail->setFrom($email, $name);
        $mail->addAddress($smtpUser);  Your receiving email

        Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Message:</strong></p>
            <p>$message</p>
        ";

        $mail->send();
        echo json_encode(["message" => "Email sent successfully"]);
    } catch (Exception $e) {
        echo json_encode(["message" => "Failed to send email: {$mail->ErrorInfo}"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["message" => "No data received"]);
} 
