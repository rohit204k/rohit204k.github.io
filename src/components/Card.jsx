import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

function Card({ header, subheader, location, duration, gpa, coursework, description, link, para }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{header} {link && <a href="https://linkedin.com/in/rohit-gundakalli" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} className="link-icon"/></a>}</h2>
        <span className="duration">{duration}</span>
      </div>
      {subheader && <div className="card-subheader"><strong>{subheader}</strong><span className="location">{location}</span></div>}
      {gpa && <p><strong>GPA:</strong> {gpa}</p>}
      {coursework && <p><strong>Coursework:</strong> {coursework}</p>}
      {description && para ? (
        description.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))
      ) : (
        <ul>
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

    </div>
  );
}

Card.propTypes = {
  description: PropTypes.array.isRequired, // `description` should be an array
};

Card.defaultProps = {
  description: [],
};

export default Card;
