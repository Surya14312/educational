import React from "react";

export default function MBBS() {
  const countries = [
    { name: "Georgia", flag: "https://flagcdn.com/w80/ge.png" },
    { name: "Russia", flag: "https://flagcdn.com/w80/ru.png" },
    { name: "Ukraine", flag: "https://flagcdn.com/w80/ua.png" },
    { name: "Kazakhstan", flag: "https://flagcdn.com/w80/kz.png" },
    { name: "Philippines", flag: "https://flagcdn.com/w80/ph.png" },
    { name: "Uzbekistan", flag: "https://flagcdn.com/w80/uz.png" },
    { name: "Nepal", flag: "https://flagcdn.com/w80/np.png" },
    { name: "Bangladesh", flag: "https://flagcdn.com/w80/bd.png" },
    { name: "China", flag: "https://flagcdn.com/w80/cn.png" },
    { name: "Kyrgyzstan", flag: "https://flagcdn.com/w80/kg.png" },
    { name: "Armenia", flag: "https://flagcdn.com/w80/am.png" },
    { name: "Egypt", flag: "https://flagcdn.com/w80/eg.png" },
    { name: "Belarus", flag: "https://flagcdn.com/w80/by.png" },
    { name: "Poland", flag: "https://flagcdn.com/w80/pl.png" },
    { name: "Vietnam", flag: "https://flagcdn.com/w80/vn.png" },
  ];

  return (
    <div className="mbbs-container">
      <div className="mbbs-hero">
        <h1>Study MBBS Abroad</h1>
        <p>
          Pursue your dream of becoming a doctor through internationally
          recognized programs from MCI & WHO-approved universities across
          multiple countries.
        </p>
      </div>

      <div className="mbbs-section">
        <h2>Why Choose MBBS Abroad?</h2>
        <ul>
          <li>No donation or capitation fee required</li>
          <li>English is the medium of instruction</li>
          <li>Advanced laboratories and smart classrooms</li>
          <li>Affordable tuition and low living expenses</li>
          <li>High FMGE passing ratio (India screening test)</li>
          <li>Personalized guidance & visa support from Sanvi</li>
        </ul>
      </div>

      <div className="mbbs-flags">
        <h3>Top Countries We Recommend</h3>
        <div className="flag-grid">
          {countries.map((c) => (
            <div key={c.name} className="flag-card">
              <img src={c.flag} alt={`${c.name} Flag`} className="flag-img" />
              <p>{c.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mbbs-support">
        <h2>Sanvi’s Support Includes</h2>
        <ul>
          <li>University selection based on budget and ranking</li>
          <li>Admission documentation and application assistance</li>
          <li>Visa processing and interview preparation</li>
          <li>Hostel booking and travel arrangements</li>
          <li>24/7 helpline for students abroad</li>
        </ul>
      </div>
    </div>
  );
}
