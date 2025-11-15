import React from "react";
import "./Resume.css";

const ResumeModern: React.FC = () => {
  return (
    <div className="resume-modern">
      <aside className="sidebar">
        <h1>Frank Spitzock</h1>
        <h2>Software Engineer</h2>

        <div className="contact-block">
          <p>Orlando, FL</p>
          <p>239-233-0032</p>
          <p>
            <a href="mailto:fspitzock@yahoo.com">fspitzock@yahoo.com</a>
          </p>
        </div>

        <div className="skills-block">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React</li>
            <li>SQL</li>
            <li>HTML / CSS</li>
            <li>Excel Automation</li>
            <li>Communication</li>
          </ul>
        </div>
      </aside>

      <main className="content">
        <section>
          <h3>Objective</h3>
          <p>
            Strong communicator with the ability to present analytical findings
            to both technical and non-technical stakeholders.
          </p>
        </section>

        <section>
          <h3>Work Experience</h3>

          <div className="job">
            <h4>Full Sail University — Financial Aid (2012–Current)</h4>
            <ul>
              <li>Created Excel automation processes</li>
              <li>Analyzed financial reports for leadership</li>
              <li>Documented workflows and trained new staff</li>
            </ul>
          </div>

          <div className="job">
            <h4>SunTrust Bank — Lead Teller (2008–2012)</h4>
            <ul>
              <li>Processed financial applications</li>
              <li>Supported branch growth through service & sales</li>
            </ul>
          </div>

          <div className="job">
            <h4>Luxor Hotel & Casino — Main Banker (2007–2008)</h4>
            <ul>
              <li>Balanced cashier cage operations</li>
              <li>Assisted with high-value guest transactions</li>
            </ul>
          </div>
        </section>

        <section>
          <h3>Education</h3>
          <p>Valencia College — Associate in Arts (2014)</p>
        </section>
      </main>
    </div>
  );
};

export default ResumeModern;
