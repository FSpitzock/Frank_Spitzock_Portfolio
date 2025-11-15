import React from "react";

const Resume: React.FC = () => {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>Frank Spitzock</h2>
      <h5>Software Engineer</h5>

      <p>
        fspitzock@yahoo.com | 239-233-0032 | Orlando, FL
      </p>

      <h3>Objective</h3>
      <p>
        Strong communicator with a proven ability to present analytical findings
        to both technical and non-technical stakeholders, fostering a
        data-driven culture.
      </p>

      <h3>Work Experience</h3>

      {/* Full Sail */}
      <section>
        <h4>Full Sail University | Financial Aid (2012 - Current)</h4>
        <ul>
          <li>
            Excel spreadsheets with various formulas to streamline workflow
          </li>
          <li>Pull daily and weekly reports</li>
          <li>Extract data points for executive review</li>
          <li>Find creative solutions to help cover tuition charges</li>
          <li>Assist with complex financial scenarios</li>
          <li>Review class schedules with students/parents</li>
          <li>Review and counsel financial aid information</li>
          <li>
            Maintain knowledge of Title IV regulations and institutional policies
          </li>
          <li>Support management with various tasks and projects</li>
          <li>Create and maintain workflows for teams</li>
        </ul>
      </section>

      {/* SunTrust */}
      <section>
        <h4>SunTrust Bank | Financial Service Rep, Lead Teller (2008 – 2012)</h4>
        <ul>
          <li>
            Assist clients with mortgage loans and refinancing opportunities
          </li>
          <li>
            Recommend products/services to improve client financial well-being
          </li>
          <li>Input various loan and credit card applications</li>
          <li>
            Assist underwriters in getting loans approved and closed
          </li>
          <li>Perform outbound sales and service calls</li>
          <li>Provide responsive service to internal and external clients</li>
          <li>
            Build long-term customer relationships through superior service
          </li>
          <li>Contribute to branch sales and referral goals</li>
          <li>
            Identify product and referral opportunities through probing questions
          </li>
          <li>
            Offer recommendations for clients building or rebuilding credit
          </li>
          <li>Manage cash levels for the branch</li>
          <li>Assist tellers with shortages and overages</li>
          <li>Resolve customer escalations</li>
        </ul>
      </section>

      {/* Luxor */}
      <section>
        <h4>Luxor Hotel & Casino | Main Banker (2007 – 2008)</h4>
        <ul>
          <li>Assist supervisor with lines of credit approvals</li>
          <li>
            Responsible for balancing the entire casino cashier cage
          </li>
          <li>
            Assist guests with cashing checks, chips, and tickets
          </li>
        </ul>
      </section>

      <h3>Education</h3>
      <ul>
        <li>Valencia College, Associate in Arts (2014)</li>
      </ul>

      <h3>Skills & Abilities</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>GitHub</li>
        <li>SQL</li>
        <li>Excel</li>
        <li>Word</li>
        <li>PowerPoint</li>
        <li>Problem Solving</li>
        <li>Communication</li>
      </ul>
    </div>
  );
};

export default Resume;
