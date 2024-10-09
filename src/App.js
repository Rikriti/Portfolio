import React, { useState, useEffect } from "react";
import profileImage from "./assets/img.jpg";
import aboutMe from "./assets/aboutme.jpg";
import resume from "./assets/Rresume.pdf";
import story from "./assets/bittersweetechoes.pdf";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [name, setName] = useState("Rikriti Koirala"); // Set name directly
  const fullName = "Rikriti Koirala"; // The name you want to type

  return (
    <div className="App">
      {/* First Section */}
      <div className="portfolio-container">
        <div className="text-section">
          <h1>
            <span className="greeting-script">Hello</span>, I am{" "}
            <span className="name-script">{name}</span>
          </h1>
          <p>Frontend Developer | Learner | CS Student</p>
        </div>
        <div className="image-section">
          <img
            src={profileImage}
            alt="Rikriti Koirala"
            className="profile-image"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="about-me-container">
        <div className="image-section">
          <img src={aboutMe} alt="Rikriti Koirala" className="about-image" />
        </div>
        <div className="text-section">
          <h2>About Me</h2>
          <p>
            I am a passionate frontend developer with a love for learning new
            technologies. Currently pursuing a degree in Computer Science, I
            enjoy creating interactive and user-friendly web applications. My
            journey as a developer is fueled by a curiosity for how things work
            and a desire to bring ideas to life through code.
          </p>
          <a
            href={resume}
            download="Rikriti_Koirala_Resume.pdf"
            className="download-resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Third Section */}
      <div className="skills-container section-colored">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">JavaScript</div>
          <div className="skill-box">React.js</div>
          <div className="skill-box">Vue.js</div>
          <div className="skill-box">AdonisJS</div>
          <div className="skill-box">Node.js</div>
          <div className="skill-box">MySQL</div>
          <div className="skill-box">Java</div>
          <div className="skill-box">Figma</div>
        </div>
      </div>

      {/* Creative Writing Section */}
      <div className="writing-container">
        <h2>Creative Writing</h2>
        <p>
          I enjoy writing short stories and poem in my free time. Below is a
          sample of my creative writing:
        </p>
        <a
          href={story}
          download="Short_Story.pdf"
          className="download-story-btn"
        >
          Download My Short Story
        </a>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <div className="contact-icons">
          <a href="mailto:rikritikoirala@gmail.com" className="contact-icon">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rikriti-koirala-0a51571b0/"
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/ri_krity"
            className="contact-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
