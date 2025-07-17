import React from "react";
const imageUrls = [
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80", // University entrance
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", // Student with laptop
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80", // Students walking
  "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=800&q=80", // Students outside
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80", // Library
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", // Classroom
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", // Hostel
];

export default function Japan() {
  return (
    <div className="japan-container">
      {/* Hero Section */}
      <div className="japan-hero">
        <div className="japan-hero-content">
          <h1>Study in Japan 🇯🇵</h1>
          <p>
            Explore futuristic campuses, innovation in robotics, and world-class
            education. Japan combines tradition and tech like no other.
          </p>
        </div>
      </div>

      {/* Highlights */}
      <section className="japan-section">
        <h2>Why Study in Japan?</h2>
        <ul>
          <li>
            ✅ Top global universities like University of Tokyo & Kyoto
            University
          </li>
          <li>✅ MEXT & JASSO Scholarships for international students</li>
          <li>✅ Study in English with optional Japanese language classes</li>
          <li>✅ Focus on Robotics, AI, Engineering & Business</li>
          <li>✅ Tech-driven education in a safe, clean environment</li>
          <li>✅ High job placement and internship opportunities</li>
          <li>✅ Blend of tradition, culture, and innovation</li>
          <li>
            ✅ Affordable tuition and low cost of living in regional areas
          </li>
          <li>✅ Learn from leading researchers and innovators</li>
          <li>✅ Experience cutting-edge labs and robotics centers</li>
        </ul>
      </section>

      {/* Image Carousel */}
      <div className="japan-carousel">
        <h2>Robotics & AI Campuses</h2>
        <div className="carousel-scroll">
          {imageUrls.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Campus scene ${i + 1}`}
              className="carousel-img"
            />
          ))}
        </div>
      </div>

      {/* Services by Sanvi */}
      <section className="japan-section">
        <h2>Sanvi’s End-to-End Services</h2>
        <ul className="service-list">
          <li>🎯 Career Counselling</li>
          <li>📘️ Course Selection</li>
          <li>📂️ Documentation Services</li>
          <li>📝 Application Procedure</li>
          <li>💰 Financial Assistance</li>
          <li>✈️ Travel Assistance</li>
          <li>🏠 Post-Arrival Support</li>
          <li>🌍 Country & University Selection</li>
          <li>🎁 Scholarship Assistance</li>
          <li>🛂 Visa Assistance</li>
          <li>📚 Test Preparation</li>
          <li>🧽 Pre-Departure Orientation</li>
          <li>🔄 Continuous Communication</li>
        </ul>
      </section>

      {/* Footer */}
      <div className="japan-footer">
        <p>
          Your future in Japan starts here. With{" "}
          <strong>Sanvi’s Abroad Xperts</strong>, step confidently into the
          world of innovation and opportunity.
        </p>
      </div>
    </div>
  );
}
