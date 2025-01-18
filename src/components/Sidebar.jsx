import profilePic from '../assets/images/bio-photo.png';
import resume from '../assets/files/resume.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h2>Rohit Kadappa Gundakalli</h2>
        <p>To know what you know and what you do not know, that is true knowledge <br /> ~ Confucius</p>
      </div>
      <div className="links">
        <a href="https://linkedin.com/in/rohit-gundakalli" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="link-icon" /> LinkedIn
        </a>
        <a href="https://github.com/rohit204k" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="link-icon" /> GitHub
        </a>
        <a href="https://leetcode.com/rohit204k" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLink} className="link-icon" /> LeetCode
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFile} className="link-icon" /> Resume
        </a>
        <a href="mailto:rgundakalli@umass.edu" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className="link-icon" /> Email
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
