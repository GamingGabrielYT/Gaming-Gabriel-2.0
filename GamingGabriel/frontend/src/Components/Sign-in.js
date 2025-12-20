import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/mail/send", form);
      alert(res.data.message);
    } catch (err) {
      alert("Failed to send mail");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
        onChange={handleChange}
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;