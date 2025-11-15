import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [showResume, setShowResume] = useState(false); // false = show contact info

  return (
    <>
      <h2>Contact & Resume</h2>
      
      <div style={{ marginBottom: "1rem" }}>
        <button onClick={() => setShowResume(false)}>Contact Info</button>
        <button onClick={() => setShowResume(true)}>Resume Info</button>
      </div>

      
      {showResume ? (
        <div className="card">
          <h3>Resume</h3>
          <p>
            View my resume{" "}
            <Link to="/resume" className="btn-link">
              here
            </Link>.
          </p>
        </div>
      ) : (
        <div className="card">
          <h3>Contact Info</h3>
          <p>Email: fspitzock@yahoo.com</p>
          <p>Phone: 239-233-0032</p>
          <p>
            GitHub Profile:{" "}
            <a href="https://github.com/FSpitzock" target="_blank" rel="noopener noreferrer">
              FSpitzock
            </a>
          </p>
        </div>
      )}
    </>
  );
}

export default Contact;
