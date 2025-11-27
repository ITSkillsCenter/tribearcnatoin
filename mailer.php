<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // die(var_dump($_POST['name']));
    // Collect request data
    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $email = $_POST['email'] ?? '';
    $address = $_POST['address'] ?? '';
    $gender = $_POST['gender'] ?? '';
    $age = $_POST['age'] ?? '';

    // email settings
    $subject = "New Form Submission - $name";
    $mails   = "eopeyemi.tv@gmail.com"; // receiver email

    // Email content
    $content = "
        <h3>New Form Submission</h3>
        <p><b>Name:</b> $name</p>
        <p><b>Phone:</b> $phone</p>
        <p><b>Email:</b> $email</p>
        <p><b>Address:</b> $address</p>
        <p><b>Gender:</b> $gender</p>
        <p><b>Age:</b> $age</p>
    ";



    // CURL SEND
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, "https://mail.tribearc.com/api/campaigns/send_now.php");
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");

    curl_setopt($curl, CURLOPT_POSTFIELDS, [
        "api_key" => 'mApDZRMdsaVeXnTGQIFhijcHUzBkuK', // Replace
        "from_name" => "Tribearc Nation Website Form",
        "from_email" => "no-reply@tribearcnation.com",
        "reply_to" => $email,
        "subject" => $subject,
        "html_text" => $content,
        "track_opens" => "1",
        "track_clicks" => "1",
        "send_campaign" => "1",
        "json" => "1",
        "emails" => $mails,
        "business_address" => "11, Adekoya Estate, Off College Road, Ogba Lagos",
        "business_name" => "Website Form",
        "bcc" => "eopeyemi.tv@gmail.com"
    ]);

    curl_setopt($curl, CURLOPT_HTTPHEADER, [
        "Api-Token: Yo3UvyRyezbQewabuuWz",
    ]);

    $response = curl_exec($curl);
    curl_close($curl);

    header("Location: index.html?success=1");
}


?>
