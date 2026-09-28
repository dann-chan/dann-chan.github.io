// frontend/src/pages/Profile/Certifications.jsx
import React from 'react';

const CertificationsTab = () => {
  return (
    <div className="profile-container">
      {/* Block 1: Academic Degrees */}
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
        </div>
      </div>

      {/* Block 2: Professional Certifications */}
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
        </div>

        <div className="education-card-block" style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px dashed var(--border-color)' }}>
          <div className="education-row">
            <h4 className="edu-degree">Meta Front-End Developer Professional Certificate</h4>
            <span className="edu-year">Issued Aug 2024</span>
          </div>
          <div className="education-row">
            <h5 className="edu-school">Coursera / Meta</h5>
            <span className="edu-location">Verified Credential</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsTab;
