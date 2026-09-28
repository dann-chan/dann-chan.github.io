// frontend/src/pages/Profile/Certifications.jsx
import React from 'react';

const CertificationsTab = () => {
  return (
    <div className="profile-container">
      
      {/* Recognitions **************************************************************************************/}
      <div className="profile-section">
        <h3>Recognitions</h3>      
        <div className="education-card-block">
          <div className="education-row">
            <h4 className="edu-degree">John Doe - CEO of ABC Company</h4>
            <span className="edu-year">Jan 2026</span>
          </div>
          <div className="education-row">
            <h5 className="edu-school">ABC Company</h5>
          </div>
          <p className="edu-description">
            Awarded for demonstrating exceptional leadership, core architectural foresight, and driving milestone product deliverable goals ahead of initial timeline projections.
          </p>
        </div>
      </div>
      
     {/* Degrees & Academic Credentials **********************************************************************/}
      <div className="profile-section">
        <h3>Degrees & Academic Credentials</h3>
        <div className="education-card-block">
          <div className="education-row">
            <h4 className="edu-degree">Bachelor of Science in Computer Science</h4>
            <span className="edu-year">2020 - 2024</span>
          </div>
          <div className="education-row">
            <h5 className="edu-school">University of Engineering and Tech</h5>
            <span className="edu-location">Toronto, ON</span>
          </div>
          <p className="edu-description">
            Specialized in Software Engineering and Distributed Systems. Graduated with Honours, participating in advanced algorithms and system architectures development tracks.
          </p>
        </div>
      </div>

      {/* Professional Certifications **************************************************************************/}
      <div className="profile-section">
        <h3>Professional Certifications</h3>
        <div className="education-card-block">
          <div className="education-row">
            <h4 className="edu-degree">AWS Certified Solutions Architect – Associate</h4>
            <span className="edu-year">Issued Nov 2025</span>
          </div>
          <div className="education-row">
            <h5 className="edu-school">Amazon Web Services (AWS)</h5>
            <span className="edu-location">ID: AWS-123456</span>
          </div>
          <p className="edu-description">
            Validated expertise in cloud computing design architectures, infrastructure optimization, high-availability deployments, and cost-efficient cloud resource provisioning.
          </p>
        </div>

        <div className="education-card-block credential-divider">
          <div className="education-row">
            <h4 className="edu-degree">Meta Front-End Developer Professional Certificate</h4>
            <span className="edu-year">Issued Aug 2024</span>
          </div>
          <div className="education-row">
            <h5 className="edu-school">Coursera / Meta</h5>
            <span className="edu-location">Verified Credential</span>
          </div>
          <p className="edu-description">
            Comprehensive professional training track covering responsive user interfaces, React state management, web development frameworks, version control protocols, and component architectures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsTab;
