"use client";
import { ChangeEvent, useState } from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 1000);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Phone number validation (format: 123-456-7890)
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(formData.phone)) {
      showNotification(
        "Please enter a valid phone number (format: xxx-xxx-xxxx).",
        "error"
      );
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        method: "post",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showNotification("Message sent successfully!", "success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        showNotification("Failed to send the message.", "error");
      }
    } catch (error) {
      console.error("Error", error);
      showNotification("An error occurred. Please try again later.", "error");
    }
  }

  function phoneFormat(e: ChangeEvent<HTMLInputElement>) {
    let phoneInput = e.target;
    let value = phoneInput.value.replace(/\D/g, "");
    if (value.startsWith("1") && value.length > 10) {
      value = value.slice(1);
    }
    if (value.length > 3 && value.length <= 6) {
      value = value.slice(0, 3) + "-" + value.slice(3);
    } else if (value.length > 6) {
      value =
        value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6, 10);
    }
    phoneInput.value = value;
  }

  return (
    <section className={styles.section_two}>
      {notification.message && (
        <div
          className={`${styles.notification} ${
            notification.type === "error" ? styles.error : ""
          }`}
        >
          {notification.message}
        </div>
      )}

      <h2 style={{ marginBottom: 0 }}>Get In Touch</h2>
      <h3>Send us a message and we will get back asap</h3>

      <form
        method="POST"
        id="contact-form"
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <fieldset className={styles.fieldSet}>
          {/* Input Fields */}
          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              required
              minLength={3}
              maxLength={50}
              aria-required="true"
              autoComplete="name"
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              className={styles.inputField}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              required
              aria-required="true"
              autoComplete="email"
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <input
              onInput={phoneFormat}
              className={styles.inputField}
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Phone"
              required
              aria-required="true"
              autoComplete="tel"
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              className={styles.inputField}
              id="message"
              name="message"
              value={formData.message}
              placeholder="Write your message here..."
              required
              minLength={10}
              maxLength={500}
              aria-required="true"
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formGroup}>
            <button type="submit" className="btn--primary">
              Send Message
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
