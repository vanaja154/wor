package wor.wor;

import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

public class EmailSender {

    public static void sendEmail(String name, String email) {
        // Sender's email ID and app password
        final String username = "vaddalanarasimha@gmail.com"; // change to your email
        final String password = "hkwt vnkx cryy myqu"; // change to your app password

        // Recipient's email ID
        String to = "narasimhavaddala@gmail.com"; // change to recipient's email

        // Setup mail server
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        // Get the Session object
        Session session = Session.getInstance(props,
            new javax.mail.Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(username, password);
                }
            });

        try {
            // Create a default MimeMessage object
            Message message = new MimeMessage(session);

            // Set From: header field
            message.setFrom(new InternetAddress(username));

            // Set To: header field
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));

            // Set Subject: header field
            message.setSubject("Contact Form Submission from " + name);

            // Set the message body
            message.setText("You have received an email from: " + name + "\nEmail: " + email);

            // Send the message
            Transport.send(message);
            System.out.println("Email sent successfully!");

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
