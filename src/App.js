import React, { useEffect } from 'react';
import './App.css';
import { Link, Element } from 'react-scroll';
import SkillsPage from './SkillsPage';
import AboutPage from './AboutPage';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectsPage from './ProjectsPage';
import ProjectOne from './Projects/ProjectOne';
import ProjectTwo from './Projects/ProjectTwo';
import ProjectThree from './Projects/ProjectThree';



function App() {
  useEffect(() => {
    // Firework setup code (unchanged)
    const brd = document.createElement("DIV");
    document.body.insertBefore(brd, document.getElementById("root"));

    let seeds = [];
    let particles = [];

    const fwkPtcIniV = 0.5;
    const fwkSedIniV = 0.5;
    const fwkPtcIniT = 2500;
    const fwkSedIniT = 1000;
    const a = 0.0005;
    const g = 0.0005;
    const v = 0.3;

    function newFireworkParticle(x, y, angle) {
      const fwkPtc = document.createElement("DIV");
      fwkPtc.setAttribute('class', 'fireWorkParticle');
      fwkPtc.time = fwkPtcIniT;
      while (angle > 360) angle -= 360;
      while (angle < 0) angle += 360;
      fwkPtc.velocity = [];
      if (angle > 270) {
        fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
        fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
      } else if (angle > 180) {
        fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
        fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
      } else if (angle > 90) {
        fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
        fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
      } else {
        fwkPtc.velocity.x = fwkPtcIniV * Math.sin(angle * Math.PI / 180) * (1 - Math.random() * v);
        fwkPtc.velocity.y = fwkPtcIniV * Math.cos(angle * Math.PI / 180) * (1 - Math.random() * v);
      }
      fwkPtc.position = [];
      fwkPtc.position.x = x;
      fwkPtc.position.y = y;
      fwkPtc.style.left = fwkPtc.position.x + 'px';
      fwkPtc.style.top = fwkPtc.position.y + 'px';
      if (particles == null) particles = [];
      particles.push(fwkPtc);
      return fwkPtc;
    }

    function newFireworkSeed(x, y) {
      const fwkSed = document.createElement("DIV");
      fwkSed.setAttribute('class', 'fireWorkSeed');
      brd.appendChild(fwkSed);
      fwkSed.time = fwkSedIniT;
      fwkSed.velocity = [];
      fwkSed.velocity.x = 0;
      fwkSed.velocity.y = fwkSedIniV;
      fwkSed.position = [];
      fwkSed.position.x = x;
      fwkSed.position.y = y;
      fwkSed.style.left = fwkSed.position.x + 'px';
      fwkSed.style.top = fwkSed.position.y + 'px';
      if (seeds == null) seeds = [];
      seeds.push(fwkSed);
      return fwkSed;
    }

    function newFireWorkStar(x, y) {
      const fwkBch = document.createElement("DIV");
      fwkBch.setAttribute('class', 'fireWorkBatch');
      let a = 0;
      while (a < 360) {
        const fwkPtc = newFireworkParticle(x, y, a);
        fwkBch.appendChild(fwkPtc);
        a += 5;
      }
      brd.appendChild(fwkBch);
    }

    function frame() {
      const current = Date.now();
      const deltaTime = current - before;
      before = current;
      for (let i in seeds) {
        const fwkSed = seeds[i];
        fwkSed.time -= deltaTime;
        if (fwkSed.time > 0) {
          fwkSed.velocity.x -= fwkSed.velocity.x * a * deltaTime;
          fwkSed.velocity.y -= g * deltaTime + fwkSed.velocity.y * a * deltaTime;
          fwkSed.position.x += fwkSed.velocity.x * deltaTime;
          fwkSed.position.y -= fwkSed.velocity.y * deltaTime;
          fwkSed.style.left = fwkSed.position.x + 'px';
          fwkSed.style.top = fwkSed.position.y + 'px';
        } else {
          newFireWorkStar(fwkSed.position.x, fwkSed.position.y);
          fwkSed.parentNode.removeChild(fwkSed);
          seeds.splice(i, 1);
        }
      }
      for (let i in particles) {
        const fwkPtc = particles[i];
        fwkPtc.time -= deltaTime;
        if (fwkPtc.time > 0) {
          fwkPtc.velocity.x -= fwkPtc.velocity.x * a * deltaTime;
          fwkPtc.velocity.y -= g * deltaTime + fwkPtc.velocity.y * a * deltaTime;
          fwkPtc.position.x += fwkPtc.velocity.x * deltaTime;
          fwkPtc.position.y -= fwkPtc.velocity.y * deltaTime;
          fwkPtc.style.left = fwkPtc.position.x + 'px';
          fwkPtc.style.top = fwkPtc.position.y + 'px';
        } else {
          fwkPtc.parentNode.removeChild(fwkPtc);
          particles.splice(i, 1);
        }
      }
    }

    let before = Date.now();
    setInterval(frame, 5);

    // Trigger firework at the center of the screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    newFireworkSeed(centerX, centerY);

  }, []);

  return (
    <div className="Ajinkya's_Website">



      <header>
        <a href="https://github.com/ajinkyaj238" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ajinkya-joshi-01b1a8246/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </header>


      
      <div className="Front-Website-Header">
        <p>Hi, I'm Ajinkya Joshi! <span className="wave">👋</span></p>
        <p className="main-subtext1">I'm a combined Electrical and Computer Engineering Senior at Northeastern University</p>
        <p className="main-subtext2">From optimizing production software and workflows in a clean room.</p>
        <p className="main-subtext3">To analyzing sectoral stress in financial intermediaries.</p>
        <p className="main-subtext4">I specialize in solving complex engineering problems within interdisciplinary environments.</p>
        <p className="main-subtext5">Continue ahead to learn more about me!</p>
        <Link to="about" smooth={true} duration={500}>
          <i className="fas fa-arrow-down arrow"></i> {/* Downward pointing arrow icon */}
        </Link>
        <div id="board"></div>
      </div>



      <Element name="about" className="full-screen-section" id="skills-section" style={{ backgroundColor: '#141414' }}>
        <div>
          <AboutPage />
        </div>
      </Element>





      <Element name="skills" className="full-screen-section" id="skills-section" style={{ backgroundColor: '#141414' }}>
        <h2 style={{ textAlign: 'center', color: 'white'}}>SKILLS</h2>
        <div
          style={{ backgroundColor: "#141414"}}
        >
          <SkillsPage />
        </div>
      </Element>





      <Element name="Projects" className="full-screen-section" id="projects-section">
        <h2 style={{ textAlign: 'center' }}>Projects</h2>
        <Router>
          <Routes>
            <Route path="/" element={<ProjectsPage />} />
            <Route path="/project-one" element={<ProjectOne />} />
            <Route path="/project-two" element={<ProjectTwo />} />
            <Route path="/project-three" element={<ProjectThree />} />
          </Routes>
        </Router>
      </Element>





    </div>
  );
}

export default App;




