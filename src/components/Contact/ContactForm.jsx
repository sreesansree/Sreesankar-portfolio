import "./style.css";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [nameError, setNameError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    console.log(import.meta.env.EMAILJS_PUBLIC_KEY);
    console.log(import.meta.env.EMAILJS_SERVICE_ID);
    console.log(import.meta.env.EMAILJS_TEMPLATE_ID);
  }, []);

  const validateFullName = (name) => {
    const trimmedName = name.trim(); // Trim leading and trailing spaces
    const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/; // Allows words separated by a single space
    if (trimmedName.length < 3) {
      setNameError("Name must be at least 3 characters long.");
      return false;
    }
    if (!nameRegex.test(trimmedName)) {
      setNameError(
        "Name can only contain letters and single spaces between words."
      );
      return false;
    }
    setNameError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if other fields are filled
    if (!formData.email || !formData.message) {
      setErrorMessage("Please fill out all fields.");
      return;
    }
    // Validate Full Name
    if (!validateFullName(formData.fullname)) {
      return;
    }

    setIsSubmitting(true);
    setResponseMessage("");
    setErrorMessage("");

    emailjs
      .send(
        // import.meta.env.EMAILJS_SERVICE_ID,
        "service_t57fw04",
        // import.meta.env.EMAILJS_TEMPLATE_ID,
        "template_g34nydo",
        {
          fullname: formData.fullname,
          email: formData.email,
          message: formData.message,
        },
        "SS4xRj8V4AnhdZ-Aw"
      )
      .then((response) => {
        console.log("Success!", response.status, response.text);
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ fullname: "", email: "", message: "" });
        setNameError("");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Failed..", error);
        setErrorMessage("Failed to Send your message. Please try again later.");
      })
      .finally(() => setIsSubmitting(false));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrorMessage("");
    setResponseMessage("");
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact" id="Contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            placeholder="Enter your full name"
            onChange={handleChange}
            required
          />
          {nameError && <p className="error-message">{nameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={"5"}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
