import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div>
      <div className="from-container">
        <h1>Send a message to us!</h1>
        <form action="">
          <input placeholder="name" />
          <input placeholder="E-mail" type="email" />
          <input placeholder="Subject" />
          <textarea placeholder="message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
