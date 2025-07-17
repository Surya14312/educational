// File: About.jsx
import React, { useState } from "react";

export default function About() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    address: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}!\nWe have received your details.`);
  };

  return (
    <div className="about-container">
      <h1 className="title">Sanvi’s Abroad Xperts</h1>

      <div className="about-card">
        <p>
          <strong>Sanvi’s Abroad Education</strong>, a subsidiary of{" "}
          <strong>Sanvi Infolink System</strong> (established in 2019), is a
          leading abroad education consulting firm focused on helping students
          achieve their dreams of studying at top universities worldwide.
        </p>
        <p>
          We offer personalized / tailor-made counselling and end-to-end
          support, from university selection to visa assistance and post-arrival
          guidance, for each student’s goals.
        </p>
        <p>
          <strong>Mrs. V. Sangeetha</strong>, a series-entrepreneur who started
          this abroad education consulting who has{" "}
          <strong>
            more than 10 years of counselling and admin experience
          </strong>{" "}
          gained both in India and Singapore.
        </p>
        <p>
          <strong>Mr. R.V. Rajan</strong>, brings{" "}
          <strong>26+ years of industry experience</strong> executed both
          domestic and International projects, career counselling expertise, and
          guiding students to navigate their dreams through education and
          current career opportunities abroad.
        </p>
        <p>
          <strong>We are committed</strong> to provide each student tailor-made
          support for their dreams to come TRUE.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Get in Touch</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="whatsapp"
          placeholder="WhatsApp Number"
          value={form.whatsapp}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={form.feedback}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
