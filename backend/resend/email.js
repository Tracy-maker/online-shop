const { resend } = require("../config/config.js");
const {
  verificationTokenEmailTemplate,
  WELCOME_EMAIL_TEMPLATE,
} = require("./email-templates.js");

const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const { data } = await resend.emails.send({
      from: "Rimberio Online <onboarding@resend.dev>",
      to: [email],
      subject: "Verify Your Email Address",
      html: verificationTokenEmailTemplate.replace(
        "{verificationToken}",
        verificationToken
      ),
    });
    console.log(`Verification email sent successfully to ${email}`);
    return data;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Unable to send verification email. Please try again.");
  }
};

const sendWelcomeEmail = async (email, name) => {
  try {
    const { data } = await resend.emails.send({
      from: "Rimberio Online <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to Rimberio!",
      html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
    });
    console.log(`Welcome email sent successfully to ${email}`);
    return data;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Unable to send welcome email. Please try again.");
  }
};

const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const resetEmailHTML = `
      <html lang="en">
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            a {
              color: #007BFF;
              text-decoration: none;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <h2>Password Reset Request</h2>
          <p>
            We received a request to reset your password. Click the link below to set a new password:
          </p>
          <p>
            <a href="${resetURL}" target="_blank">Reset Your Password</a>
          </p>
          <p>
            If you did not request this change, please ignore this email.
          </p>
        </body>
      </html>
    `;
    const { data } = await resend.emails.send({
      from: "Rimberio Online <onboarding@resend.dev>",
      to: [email],
      subject: "Reset Your Password",
      html: `Click <a href="${resetURL}">here</a> to reset your password`,
    });
    console.log(`Password reset email sent successfully to ${email}`);
    return data;
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw new Error("Unable to send password reset email. Please try again.");
  }
};

const sendResetSuccessEmail = async (email) => {
  try {
    const successEmailHTML = `
      <html lang="en">
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
          </style>
        </head>
        <body>
          <h2>Password Reset Successful</h2>
          <p>
            Your password has been reset successfully. If you did not make this change, please contact our support team immediately.
          </p>
        </body>
      </html>
    `;
    const { data } = await resend.emails.send({
      from: "Rimberio Online <onboarding@resend.dev>",
      to: [email],
      subject: "Your Password Has Been Reset",
      html: successEmailHTML,
    });
    console.log(`Password reset success email sent successfully to ${email}`);
    return data;
  } catch (error) {
    console.error("Error sending password reset success email:", error);
    throw new Error(
      "Unable to send password reset success email. Please try again."
    );
  }
};

module.exports = {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendResetSuccessEmail,
};
