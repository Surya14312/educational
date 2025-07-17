import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UK from "./pages/UK";
import Europe from "./pages/Europe";
import Japan from "./pages/Japan";
import Singapore from "./pages/Singapore";
import Italy from "./pages/Italy";
import MBBS from "./pages/MBBS";
import OurServices from "./pages/OurServices.jsx"; // Assuming you have this page
import About from "./pages/About.jsx"; // Assuming you have this page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uk" element={<UK />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/japan" element={<Japan />} />
        <Route path="/singapore" element={<Singapore />} />
        <Route path="/italy" element={<Italy />} />
        <Route path="/mbbs" element={<MBBS />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
