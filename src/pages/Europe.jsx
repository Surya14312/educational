export default function Europe() {
  const imageUrls = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80", // Student studying
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80", // Library
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", // Classroom
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80", // Graduation
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", // Hostel
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80", // University entrance
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80", // Diverse students group
    "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?auto=format&fit=crop&w=800&q=80", // NEW ✅ Students outside
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80", // NEW ✅ Student with laptop
  ];

  return (
    <div className="europe-container">
      {/* Hero */}
      <div
        className="europe-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
          color: "#fff",
        }}
      >
        <div className="europe-hero-content">
          <h2>Study in Europe</h2>
          <p>
            Europe offers world-class undergraduate (UG), postgraduate (PG), and
            Master’s programs across hundreds of globally ranked universities.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="europe-content" style={{ padding: "40px 20px" }}>
        <div className="section">
          <h3>Why Choose Europe?</h3>
          <ul>
            <li>✅ UG & PG Programs available in English</li>
            <li>✅ 1 to 2-year Master’s degrees</li>
            <li>✅ Tuition-free universities in Germany, Norway</li>
            <li>✅ Easy access to internships and part-time jobs</li>
            <li>✅ Erasmus+ & Government scholarships available</li>
            <li>✅ Travel across 26 countries on a Schengen Visa</li>
            <li>✅ Multicultural environment with international exposure</li>
          </ul>
        </div>

        <div className="section">
          <h3>Top Study Destinations in Europe</h3>
          <ul>
            <li>🇩🇪 Germany – Engineering, Management, IT</li>
            <li>🇳🇱 Netherlands – Business, Design, Agriculture</li>
            <li>🇫🇷 France – Fashion, Culinary, Hospitality</li>
            <li>🇵🇱 Poland – Affordable MBAs & UG programs</li>
            <li>🇮🇹 Italy – Architecture, Arts, Design</li>
          </ul>
        </div>
      </div>

      {/* Carousel */}
      <div className="europe-carousel" style={{ padding: "20px" }}>
        <h3>Campus Life & Facilities</h3>
        <div className="carousel-scroll">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Campus ${index + 1}`}
              className="carousel-img"
            />
          ))}
        </div>
        <p className="carousel-desc" style={{ marginTop: "10px" }}>
          Experience top-notch infrastructure, vibrant student communities, and
          future-ready learning environments in Europe’s best institutions.
        </p>
      </div>
    </div>
  );
}
