import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import AboutMePage from "./pages/AboutMePage";
import ResumePopup from "./components/ResumePopup";
import ContactPopup from "./components/ContactPopup"; // ⬅️ new
import "./App.css";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [showResumes, setShowResumes] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <div className="language-toggle-wrapper">
        <span
          className="language-toggle-text"
          onClick={() => setLanguage((prev) => (prev === "en" ? "jp" : "en"))}
        >
          {language === "en" ? "日本/日本語" : "Switch to EN/English"}
        </span>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar
                language={language}
                setShowResumes={setShowResumes}
                setShowContact={setShowContact}
              />
              <Hero language={language} onContactClick={() => setShowContact(!showContact)} />
              {showResumes && (
                <div className="resume-popup-container">
                  <ResumePopup language={language} />
                </div>
              )}
              {showContact && (
                <div className="resume-popup-container">
                  <ContactPopup language={language} />
                </div>
              )}
            </>
          }
        />
        <Route path="/about" element={<AboutMePage language={language} />} />
      </Routes>
    </>
  );
}
