function sendEmail() {
  emailjs.send("service_id", "template_id", {
    to_email: "rhainu@hotmail.co.uk"
  });
}