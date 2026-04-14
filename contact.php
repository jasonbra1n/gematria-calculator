<?php
$message_sent = false;
$error_message = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject_input = strip_tags(trim($_POST["subject"]));
    $message_content = strip_tags(trim($_POST["message"]));

    if (empty($name) || empty($email) || empty($subject_input) || empty($message_content)) {
        $error_message = "All fields are required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message = "Invalid email format.";
    } else {
        $to = "jb@jasonbrain.com";
        $subject = "[Gematria] " . $subject_input;
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message_content";
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $body, $headers)) {
            $message_sent = true;
        } else {
            $error_message = "Failed to send message. Please try again later.";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0633259514526906"
    crossorigin="anonymous"></script>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-SKFFH2SY55"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-SKFFH2SY55');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us - Gematria Calculator</title>
  <meta name="description"
    content="Get in touch with the Gematria Calculator team. Send us your feedback, bug reports, or suggestions for new features.">
  <link rel="canonical" href="https://gematria-calculator.jasonbrain.com/contact">
  <link rel="icon" href="/logo.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://gematria-calculator.jasonbrain.com/contact">
  <meta property="og:title" content="Contact Us - Gematria Calculator">
  <meta property="og:description"
    content="Get in touch with the Gematria Calculator team. Send us your feedback or suggestions.">
  <meta property="og:image" content="https://gematria-calculator.jasonbrain.com/assets/og-image.png">

  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <header>
    <!-- Header content is loaded dynamically -->
  </header>
  <div class="gematria-calculator" id="contact-page">
    <h2>Contact Us</h2>
    
    <div class="contact-form-container">
      <?php if ($message_sent): ?>
        <div class="content-card success-message">
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. We have received your message and will get back to you soon.</p>
          <a href="/" class="btn-calculate" style="margin-top: 10px;">Return to Calculator</a>
        </div>
      <?php else: ?>
        <div class="content-card">
          <?php if (!empty($error_message)): ?>
            <div class="error-message">
              <?php echo htmlspecialchars($error_message); ?>
            </div>
          <?php endif; ?>

          <form action="/contact" method="POST">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" value="<?php echo isset($_POST['name']) ? htmlspecialchars($_POST['name']) : ''; ?>">
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="your.email@example.com" value="<?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>">
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required placeholder="Subject of your message" value="<?php echo isset($_POST['subject']) ? htmlspecialchars($_POST['subject']) : ''; ?>">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" required placeholder="How can we help?"><?php echo isset($_POST['message']) ? htmlspecialchars($_POST['message']) : ''; ?></textarea>
            </div>
            <button type="submit" class="btn-submit">Send Message</button>
          </form>
        </div>
      <?php endif; ?>
    </div>
  </div>
  <footer>
    <!-- Footer content is loaded dynamically -->
  </footer>
  <!-- Scroll to Top Button -->
  <button id="scroll-to-top" title="Go to top">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  </button>
  <script src="script.js"></script>
</body>

</html>
