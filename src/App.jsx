import "./App.css";
import profileImage from "./assets/profile.png";
import eventStartup from "./assets/eventStartup.png";
import remiDansk from "./assets/remiDansk.png";
import pitchWreck from "./assets/pitchWreck.png";

function App() {
  return (
    <>
      <header className="header">
        <h1>Mila Siamionava</h1>
<div className="profileImageWrapper">
  <img
    src={profileImage}
    alt="Mila Siamionava"
    className="profileImage"
  />
</div>
        
          <p className="profileTitle">
            Frontend Developer & Cybersecurity Enthusiast
          </p>

          <p className="profileDetails">
            📍 Aarhus, Denmark |{" "}
            <a href="mailto:mila.siamionava@icloud.com">
              mila.siamionava@icloud.com
            </a>
          </p>

          <div className="socialLinks">
            <a
              href="https://www.linkedin.com/in/mila-siamionava/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a
              href="https://github.com/mila-siamionava"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <span>|</span>
            <a href="#projects">Projects</a>
            <span>|</span>
            <a href="#contact">Contact</a>
          </div>
</header>
      <main>
        <section id="home" className="profileDescription">
          
          <p>
            My journey into tech started with a simple question: how do things
            work?</p>
            <p>Curiosity led me from education and communication into
            frontend development and cybersecurity. Today, I build user-friendly
            web applications, explore how systems can be secured, and enjoy
            turning complex ideas into practical solutions.
          </p>
        </section>

        <section id="skills" className="section">
          <h2>Technical Skills</h2>

          <div className="skillsGrid">
            <div className="card">
              <h3>Frontend</h3>
              <p>React, Next.js,JavaScript, HTML, CSS</p>
            </div>

            <div className="card">
              <h3>Backend & Tools</h3>
              <p> Node.js • Express • REST APIs • SQLite • Git • GitHub •
        Vercel • Render</p>
            </div>

            <div className="card">
              <h3>Security</h3>
              <p>GRC • IAM • SOC Operations • OWASP • ISO 27001 • Cloud Security</p>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>

          <div className="projectsGrid">
            <article className="card">
              <h3>Events Startup Project</h3>
              <img
  src={eventStartup}
  alt="Events Startup Project"
  className="projectImage"
/>
              <p>
                React event booking application with authentication, cart,
                checkout, orders and API integration.
              </p>
              <div className="projectLinks">
  <a
    href="https://github.com/mila-siamionava/events-startup-project"
    target="_blank"
    rel="noreferrer"
    className="githubButton"
  >
    View on GitHub
  </a>

  <a
    href="https://events-startup-project-app.onrender.com/"
    target="_blank"
    rel="noreferrer"
    className="demoButton"
  >
    Explore Project
  </a>
</div>
            </article>
            

            <article className="card">
              <h3>ReMi Dansk</h3>
              <img
    src={remiDansk}
    alt="ReMi Dansk"
    className="projectImage"
  />
              <p>
                A cheerful web-based memory card game designed to help users
                learn Danish vocabulary while having fun.
              </p>
              <div className="projectLinks">
  <a
    href="https://github.com/mila-siamionava/ReMi-Dansk"
    target="_blank"
    rel="noreferrer"
    className="githubButton"
  >
    View on GitHub
  </a>

  <a
    href="https://memory-game-1-sxsc.onrender.com"
    target="_blank"
    rel="noreferrer"
    className="demoButton"
  >
    Explore Project
  </a>
</div>
            </article>

            <article className="card">
              <h3>PitchWreck</h3>
              <img
    src={pitchWreck}
    alt="PitchWreck"
    className="projectImage"
  />
              <p>
                A PowerPoint karaoke game built with React and Node.js, designed
                to make public speaking practice fun, spontaneous and less
                intimidating.
              </p>
              

                
 <div className="projectLinks">
  <a
    href="https://github.com/mila-siamionava/PitchWreck"
    target="_blank"
    rel="noreferrer"
    className="githubButton"
  >
    View on GitHub
  </a>

  <a
    href="https://pitchwreck.onrender.com"
    target="_blank"
    rel="noreferrer"
    className="demoButton"
  >
    Explore Project
  </a>
</div>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Let’s connect and build something meaningful.</p>

          <div className="contactLinks">
            <a href="mailto:mila.siamionava@icloud.com">Email</a>
            <a
              href="https://www.linkedin.com/in/mila-siamionava/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mila-siamionava"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Mila Siamionava</p>
      </footer>
    </>
  );
}

export default App;
