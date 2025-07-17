// File: OurServices.js
import React from "react";

const countries = [
  { name: "Europe", flag: "https://flagcdn.com/w80/eu.png" },
  { name: "Italy", flag: "https://flagcdn.com/w80/it.png" },
  { name: "France", flag: "https://flagcdn.com/w80/fr.png" },
  { name: "Germany", flag: "https://flagcdn.com/w80/de.png" },
  { name: "Swiss", flag: "https://flagcdn.com/w80/ch.png" },
  { name: "UK", flag: "https://flagcdn.com/w80/gb.png" },
  { name: "Ireland", flag: "https://flagcdn.com/w80/ie.png" },
  { name: "Canada", flag: "https://flagcdn.com/w80/ca.png" },
  { name: "Singapore", flag: "https://flagcdn.com/w80/sg.png" },
  { name: "Japan", flag: "https://flagcdn.com/w80/jp.png" },
  { name: "USA", flag: "https://flagcdn.com/w80/us.png" },
  { name: "Philippines", flag: "https://flagcdn.com/w80/ph.png" },
  { name: "Vietnam", flag: "https://flagcdn.com/w80/vn.png" },
  { name: "Belarus", flag: "https://flagcdn.com/w80/by.png" },
  { name: "Georgia", flag: "https://flagcdn.com/w80/ge.png" },
  { name: "Dubai", flag: "https://flagcdn.com/w80/ae.png" },
];

export default function OurServices() {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          We offer a comprehensive range of services to guide you through every
          step of your study abroad journey.
        </p>
      </div>

      <div className="services-grid">
        <ul className="service-list">
          <li>🎓 Career Counselling</li>
          <li>🌍 Country Selection</li>
          <li>🏛️ University Selection</li>
          <li>📝 Application Procedure Guidance</li>
          <li>🎁 Scholarship Assistance</li>
          <li>🛂 Visa Assistance</li>
          <li>💰 Information on Funding Options</li>
          <li>📚 Test Preparations</li>
          <li>✈️ Pre-departure Orientations</li>
          <li>🏡 Post-arrival Support</li>
          <li>💬 Continuous Communication</li>
        </ul>

        <div className="service-image">
          
        </div>
      </div>

      <div className="additional-services">
        <h2>Additional Services</h2>
        <p>
          We offer a wide range of additional services to make your study abroad
          experience seamless and stress-free:
        </p>
        <ul>
          <li>
            <strong>💳 Financial Assistance –</strong> Loan / FD Assistance,
            wire transfer services.
          </li>
          <li>
            <strong>🌐 Travel Assistance –</strong> Ticketing, Visa, Insurance,
            and Accommodation services.
          </li>
          <li>
            <strong>📄 Documentation Services –</strong> Attestation, Apostille,
            Notarization services.
          </li>
        </ul>
      </div>

      <div className="countries-served">
        <h2>🌐 Countries Served</h2>
        <div className="flag-grid">
          {countries.map((country, index) => (
            <div className="flag-card" key={index}>
              <img
                src={country.flag}
                alt={country.name}
                className="flag-img"
                loading="lazy"
              />
              <p>{country.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
