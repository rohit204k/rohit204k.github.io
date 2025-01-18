function Navbar({ onSectionChange }) {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#" onClick={() => onSectionChange('experience')}>Experience</a></li>
        <li><a href="#" onClick={() => onSectionChange('education')}>Education</a></li>
        <li><a href="#" onClick={() => onSectionChange('projects')}>Projects</a></li>
        <li><a href="#" onClick={() => onSectionChange('about')}>About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
