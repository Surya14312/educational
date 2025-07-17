import React from "react";

const imageUrls = [
  "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=800&q=80", // outdoor student group
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80", // library/common area
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", // student with laptop
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80", // university entrance
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", // Student with laptop
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", // Hostel or dorms
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80", // University entrance
];

export default function Singapore() {
  return (
    <div className="sg-container">
      {/* Hero Section */}
      <div className="sg-hero">
        <div className="sg-hero-content">
          <h1>Study in Singapore 🇸🇬</h1>
          <p>
            World-class education, cutting-edge infrastructure, and strong
            career pathways in Asia’s global hub.
          </p>
        </div>
      </div>

      {/* Why Study Section */}
      <section className="sg-section">
        <h2>Why Study in Singapore?</h2>
        <ul>
          <li>✅ Top universities — NUS, NTU, SMU, SIT</li>
          <li>✅ Global internships & strong job placement</li>
          <li>✅ Affordable and geographically close to India</li>
          <li>✅ Safe, multicultural, English-speaking</li>
          <li>✅ Quality-driven education & research focus</li>
        </ul>
      </section>

      {/* Image Carousel */}
      <div className="sg-carousel">
        <h2>Campus Life & Facilities</h2>
        <div className="carousel-scroll">
          {imageUrls.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Singapore campus ${idx + 1}`}
              className="carousel-img"
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="sg-section">
        <h2>Sanvi’s End-to-End Services</h2>
        <ul className="service-list">
          <li>🎯 Career Counselling</li>
          <li>📘 Course Selection</li>
          <li>📂 Documentation Services</li>
          <li>📝 Application Procedure</li>
          <li>💰 Financial Assistance</li>
          <li>✈️ Travel Assistance</li>
          <li>🏠 Post‑Arrival Support</li>
          <li>🌍 Country & University Selection</li>
          <li>🎁 Scholarship Assistance</li>
          <li>🛂 Visa Assistance</li>
          <li>📚 Test Preparation</li>
          <li>🧳 Pre‑Departure Orientation</li>
          <li>🔄 Continuous Communication</li>
        </ul>
      </section>
    </div>
  );
}
