import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import './App.css';
import { useState} from "react";

import { experienceData } from './data/Experience';
import { educationData } from './data/Education';
import { projectsData } from './data/Projects';
import { aboutData } from './data/About';

function App() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('experience');

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  const handleSectionChange = (section) => {
    setActiveSection(section); // Update active section based on navbar click
  };


  return (
    <div className="container">
      <Sidebar />
      {/* <div className={`sidebar-wrapper ${isSidebarOpen ? "open" : ""}`}>
                <Sidebar />
      </div> */}
      <div className="main-content">
        <Navbar onSectionChange={handleSectionChange} />
        {/* <button className="hamburger" onClick={toggleSidebar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button> */}
        
        {/* Content Section */}
        <section id="content-section">
          {activeSection === 'experience' && (
            <Section
              id="experience"
              title="Experience"
              cards={experienceData}
              para={false}
            />
          )}

          {activeSection === 'education' && (
            <Section
              id="education"
              title="Education"
              cards={educationData}
              para={false}
            />
          )}

          {activeSection === 'projects' && (
            <Section
              id="projects"
              title="Projects"
              cards={projectsData}
              para={true}
            />
          )}

          {activeSection === 'about' && (
            <Section
              id="about"
              title="About"
              cards={aboutData}
              para={true}
            />
          )}
        </section>
      </div>
    </div>
  );
}

export default App;