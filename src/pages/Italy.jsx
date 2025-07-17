import React from "react";

const imageUrls = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", // Hostel
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80", // University entrance
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80", // Diverse students group
  "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=800&q=80", // NEW ✅ Students outside
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", // NEW ✅ Student with laptop
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80", // Students walking
];

export default function Italy() {
  return (
    <div className="it-container">
      {/* Hero Section */}
      <div className="it-hero">
        <div className="it-hero-content">
          <h1>Study in Italy 🇮🇹</h1>
          <p>
            Discover affordable world-class degrees in fashion, arts,
            architecture, business & engineering—immersed in rich Italian
            heritage.
          </p>
        </div>
      </div>

      {/* Why Study Section */}
      <section className="it-section">
        <h2>Why Study in Italy?</h2>
        <ul>
          <li>✅ University of Bologna, Sapienza, Politecnico di Milano</li>
          <li>✅ Scholarships up to €5,200/year (DSU)</li>
          <li>✅ English-taught courses with IELTS flexibility</li>
          <li>✅ Low cost of living & tuition</li>
          <li>✅ Immerse yourself in art, history & gastronomy</li>
        </ul>
      </section>

      {/* Image Carousel */}
      <div className="it-carousel">
        <h2>Campus Life in Italy</h2>
        <div className="carousel-scroll">
          {imageUrls.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Italy campus scene ${idx + 1}`}
              className="carousel-img"
            />
          ))}
        </div>
      </div>

      {/* Sanvi's Services */}
      <section className="it-section">
        <h2>Sanvi’s End‑to‑End Services</h2>
        <ul className="service-list">
          <li>🎯 Career Counselling</li>
          <li>📘 Course & University Selection</li>
          <li>📂 Documentation Assistance</li>
          <li>📝 Application Management</li>
          <li>💰 Scholarship & Financial Aid</li>
          <li>🛂 Visa Support</li>
          <li>✈️ Travel & Accommodation Help</li>
          <li>🏠 Post‑Arrival Orientation</li>
          <li>📚 Test Preparation</li>
          <li>🔄 Continuous Communication</li>
        </ul>
      </section>
    </div>
  );
}
