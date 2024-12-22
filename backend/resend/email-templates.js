const verificationTokenEmailTemplate = `
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    body {
      background-color: #f9f9f9;
      font-family: Arial, sans-serif;
      color: #333;
      margin: 0;
      padding: 0;
    }

    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .email-header {
      background-color: #252f3d;
      text-align: center;
      padding: 20px;
    }

    .email-header img {
      height: 50px;
    }

    .email-body {
      padding: 30px;
      text-align: center;
    }

    .email-body h1 {
      color: #252f3d;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .email-body p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .verification-code {
      font-size: 32px;
      color: #333;
      font-weight: bold;
      margin: 20px 0;
    }

    .email-footer {
      padding: 20px;
      background-color: #f1f1f1;
      text-align: center;
      font-size: 12px;
      color: #888;
    }

    .email-footer a {
      color: #252f3d;
      text-decoration: none;
    }
  </style>
</head>

<body>
  <div class="email-container">
    <div class="email-header">
      <img src="https://i.ibb.co/m6kzc7W/Wechat-IMG10365.png" alt="Rimberio Logo" />
    </div>
    <div class="email-body">
      <h1>Verify Your Email Address</h1>
      <p>
        Thank you for registering with Rimberio Online Solution. To verify your email address, please use the following
        code:
      </p>
      <div class="verification-code">{verificationToken}</div>
      <p>This code is valid for 10 minutes.</p>
    </div>
    <div class="email-footer">
      <p>
        Rimberio Online Solution © 2024<br>
        Need help? <a href="mailto:support@rimberio.com">Contact Support</a>
      </p>
    </div>
  </div>
</body>

</html>
`;
const WELCOME_EMAIL_TEMPLATE = `
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Rimberio</title>
  <style>
    body {
      background-color: #f9f9f9;
      font-family: Arial, sans-serif;
      color: #333;
      margin: 0;
      padding: 0;
    }

    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .email-header {
      background-color: #252f3d;
      text-align: center;
      padding: 20px;
    }

    .email-header img {
      height: 50px;
    }

    .email-body {
      padding: 30px;
      text-align: center;
    }

    .email-body h1 {
      color: #252f3d;
      font-size: 24px;
      margin-bottom: 20px;
    }

    .email-body p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .cta-button {
      display: inline-block;
      background-color: #252f3d;
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      padding: 12px 24px;
      border-radius: 4px;
      margin-top: 20px;
    }

    .email-footer {
      padding: 20px;
      background-color: #f1f1f1;
      text-align: center;
      font-size: 12px;
      color: #888;
    }

    .email-footer a {
      color: #252f3d;
      text-decoration: none;
    }
  </style>
</head>

<body>
  <div class="email-container">
    <div class="email-header">
      <img src="https://i.ibb.co/m6kzc7W/Wechat-IMG10365.png" alt="Rimberio Logo" />
    </div>
    <div class="email-body">
      <h1>Welcome to Rimberio!</h1>
      <p>
        Hi {name},<br>
        Welcome to Rimberio Online Solution. We're excited to have you on board! Start exploring our platform and make
        the most of your experience.
      </p>
      <a href="https://rimberio.com/get-started" class="cta-button">Get Started</a>
    </div>
    <div class="email-footer">
      <p>
        Rimberio Online Solution © 2024<br>
        Need help? <a href="mailto:support@rimberio.com">Contact Support</a>
      </p>
    </div>
  </div>
</body>

</html>
`;

module.exports = {
  verificationTokenEmailTemplate,
  WELCOME_EMAIL_TEMPLATE,
};
